import React, { useContext, useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import { GlobalContext } from '../context/globalContext';
import { Link } from 'react-router-dom';


const TaskList = () => {
  const HOST = import.meta.env.VITE_HOST;
  const [tasks, setTasks] = useState([]);

  const {notify,dispatch,state} = useContext(GlobalContext);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`${HOST}/api/tasks`);
        const data = await response.json();
        setTasks(data);
        dispatch({type:'SET_TODOS',payload:data});
        notify('Tasks fetched successfully', 'success');
      } catch (error) {
        console.error('Error fetching tasks:', error);
        notify('Error fetching tasks', 'error');
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      {state.todos.length > 0 ? (
        state.todos.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p className="text-center text-gray-500">No tasks available</p>
      )}
      <Link to="/add-task" className="block text-center mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add a new task
      </Link>
    </div>
  );
};

export default TaskList;