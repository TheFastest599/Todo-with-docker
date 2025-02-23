import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
    <ToastContainer
          position={'top-right'}
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <TaskForm />
      <TaskList />
    </div>
    </>
  );
};

export default App;