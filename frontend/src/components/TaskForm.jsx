import React, { useContext, useState, useRef, useEffect } from 'react';
import { GlobalContext } from '../context/globalContext';
import { useNavigate } from 'react-router-dom';

const TaskForm = () => {
  const HOST = import.meta.env.VITE_HOST;
  const [content, setContent] = useState('');
  const textareaRef = useRef(null);
  const { notify } = useContext(GlobalContext);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      if (textareaRef.current.scrollHeight > 160) { 
        textareaRef.current.classList.add('overflow-y-auto');
      } else {
        textareaRef.current.classList.remove('overflow-y-auto');
      }
    }
  }, [content]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${HOST}/api/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });
      const data = await response.json();
      if (response.ok) {
        notify(data.message, 'success');
        navigate('/');
      } else {
        notify(data.error, 'error');
      }
      setContent('');
    } catch (error) {
      notify('Error adding task', 'error');
      console.error('Error adding task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 p-4 bg-white shadow-md rounded-lg overflow-y-hidden">
      <h2 className="text-2xl font-bold mb-4">Add a New Task</h2>
      <textarea
        ref={textareaRef}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Add a new task"
        maxLength={1000}
        className="w-full p-2 mb-2 border border-gray-300 rounded resize-none overflow-y-auto"
        rows={1}
        style={{ maxHeight: '10rem' }} 
      />
      <div className="text-right text-gray-500 mb-4">
        {content.length}/1000
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;