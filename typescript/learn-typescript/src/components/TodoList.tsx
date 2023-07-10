
import React, { useState } from 'react';
import { Todo } from '../types';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() === '') {
      return;
    }

    const newTodo: Todo = {
      id: Date.now().toString(),
      task: inputValue,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const handleToggleTodo = (id: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const handleEditTodo = (id: string) => {
    const todoToEdit = todos.find(todo => todo.id === id);
    if (todoToEdit) {
      setEditId(id);
      setEditValue(todoToEdit.task);
    }
  };

  const handleSaveEdit = () => {
    if (editValue.trim() === '') {
      return;
    }

    setTodos(prevTodos =>
      prevTodos.map(todo => {
        if (todo.id === editId) {
          return { ...todo, task: editValue };
        }
        return todo;
      })
    );

    setEditId(null);
    setEditValue('');
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditValue('');
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Todo List</h1>
      <div className='mb-4'>
        <input
          type='text'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder='Add a todo'
          className='border border-gray-300 rounded px-2'
        />
        <button
          onClick={handleAddTodo}
          className='bg-blue-500 text-white px-4 py-2 ml-4 rounded'
        >
          Add Todo
        </button>
      </div>
      {todos.map(todo => (
        <div key={todo.id} className='flex items-center mt-4 mb-2'>
          <input
            type='checkbox'
            checked={todo.isCompleted}
            onChange={() => handleToggleTodo(todo.id)}
            className='mr-2'
          />
          {editId === todo.id ? (
            <>
              <input
                type='text'
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                className='border border-gray-300 rounded px-2 flex-grow mr-2'
              />
              <button
                onClick={handleSaveEdit}
                className='bg-green-500 text-white px-4 py-2 rounded mr-2'
              >
                Save
              </button>
              <button
                onClick={handleCancelEdit}
                className='bg-gray-500 text-white px-4 py-2 rounded'
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <p
                className={`${
                  todo.isCompleted ? 'line-through' : ''
                } flex-grow`}
              >
                {todo.task}
              </p>
              <button
                onClick={() => handleEditTodo(todo.id)}
                className='bg-yellow-500 text-white px-4 py-2 rounded mr-2'
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className='bg-red-600 text-white rounded px-2'
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
