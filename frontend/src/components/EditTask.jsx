import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/globalContext';

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const HOST = import.meta.env.VITE_HOST;
  const [content, setContent] = useState('');
  const { notify,dispatch,state } = useContext(GlobalContext);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch(`${HOST}/api/tasks/${id}`);
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error('Error fetching task:', error);
        notify('Error fetching task', 'error');
      }
    };

    fetchTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${HOST}/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content : content.content }),
      });
      const data = await response.json();
      if (response.ok) {
        notify(data.message, 'success');
        dispatch({type:'UPDATE_TODO',payload:content});
        navigate('/');
      } else {
        notify(data.error, 'error');
      }
    } catch (error) {
      console.error('Error updating task:', error);
      notify('Error updating task', 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
      <input
        type="text"
        value={content.content}
        onChange={(e) => setContent((prev) => ({ ...prev, content: e.target.value }))}
        placeholder="Edit task"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">
        Update Task
      </button>
    </form>
  );
};

export default EditTask;