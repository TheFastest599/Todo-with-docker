import React, { useContext, useEffect, useRef } from 'react';
import { GlobalContext } from '../context/globalContext';
import { Link } from 'react-router-dom';
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';

const TaskItem = ({ task }) => {
  const HOST = import.meta.env.VITE_HOST;
  const { notify,dispatch,state } = useContext(GlobalContext);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [task.content]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`${HOST}/api/tasks/${task.id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (response.ok) {
        notify(data.message, 'success');
        dispatch({type:'REMOVE_TODO',payload:task.id});
      } else {
        notify(data.error, 'error');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
      notify('Error deleting task', 'error');
    }
  };

  const handleComplete = async () => {
    try {
      const response = await fetch(`${HOST}/api/tasks/${task.id}/complete`, {
        method: 'PUT',
      });
      const data = await response.json();
      if (response.ok) {
        notify(data.message, 'success');
        dispatch({type:'UPDATE_TODO',
          payload: {
            ...task,
            completed: true,
          },
        });
      } else {
        notify(data.error, 'error');
      }
    } catch (error) {
      console.error('Error completing task:', error);
      notify('Error completing task', 'error');
    }
  };

  return (
    <div className="items-center p-4 border-b">
      <textarea
        ref={textareaRef}
        className={`w-full resize-none ${
          task.completed ? 'line-through text-gray-500' : ''
        }`}
        value={task.content}
        readOnly
      />
      <div className="flex space-x-2">
        {!task.completed && (
          <>
            <button
              onClick={handleComplete}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
            >
              <FaCheck className="text-sm" />
            </button>
            <Link
              to={`/edit-task/${task.id}`}
              className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-200"
            >
              <FaEdit className="text-sm" />
            </Link>
          </>
        )}
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200"
        >
          <FaTrash className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;