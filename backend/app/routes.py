from flask import request, jsonify, send_from_directory
from app import app, db
from app.models import Todo

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/tasks', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        data = request.get_json()
        task_content = data.get('content')

        # Validate task content
        if not task_content or task_content.strip() == "":
            return jsonify({'error': 'Task content cannot be empty'}), 400

        new_task = Todo(content=task_content)

        try:
            db.session.add(new_task)
            db.session.commit()
            return jsonify({'message': 'Task added successfully'}), 201
        except Exception as e:
            db.session.rollback()
            print(f"Error: {e}")
            return jsonify({'error': 'There was an issue adding your task'}), 500

    else:
        tasks = Todo.query.order_by(Todo.date_created).all()
        tasks_list = [{'id': task.id, 'content': task.content, 'completed': task.completed, 'date_created': task.date_created} for task in tasks]
        return jsonify(tasks_list), 200

@app.route('/api/tasks/<int:id>', methods=['GET'])
def get_task(id):
    task = Todo.query.get_or_404(id)
    return jsonify({'id': task.id, 'content': task.content, 'completed': task.completed, 'date_created': task.date_created}), 200

@app.route('/api/tasks/<int:id>', methods=['DELETE'])
def delete(id):
    task_to_delete = Todo.query.get_or_404(id)
    try:
        db.session.delete(task_to_delete)
        db.session.commit()
        return jsonify({'message': 'Task deleted successfully'}), 200
    except Exception as e:
        db.session.rollback()
        print(f"Error: {e}")
        return jsonify({'error': 'There was an issue deleting your task'}), 500

@app.route('/api/tasks/<int:id>', methods=['PUT'])
def update(id):
    task = Todo.query.get_or_404(id)
    if request.method == 'PUT':
        data = request.get_json()
        task_content = data.get('content')

        # Validate task content
        if not task_content or task_content.strip() == "":
            return jsonify({'error': 'Task content cannot be empty'}), 400

        task.content = task_content
        try:
            db.session.commit()
            return jsonify({'message': 'Task updated successfully'}), 200
        except Exception as e:
            db.session.rollback()
            print(f"Error: {e}")
            return jsonify({'error': 'There was an issue updating your task'}), 500

@app.route('/api/tasks/<int:id>/complete', methods=['PUT'])
def complete(id):
    task = Todo.query.get_or_404(id)
    if request.method == 'PUT':
        task.completed = 1
        try:
            db.session.commit()
            return jsonify({'message': 'Task marked as completed successfully'}), 200
        except Exception as e:
            db.session.rollback()
            print(f"Error: {e}")
            return jsonify({'error': 'There was an issue marking your task as completed'}), 500