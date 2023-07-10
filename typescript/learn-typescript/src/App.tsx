// import React, { FC, useState } from 'react';

// const App: React.FC = () => {
//   const [todos, setTodos] = useState<string[]>([]);
//   const [newTodo, setNewTodo] = useState('');

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setNewTodo(event.target.value);
//   };

//   const handleAddTodo = () => {
//     if (newTodo.trim() !== '') {
//       setTodos([...todos, newTodo]);
//       setNewTodo('');
//     }
//   };

//   const handleToggleTodo = (index: number) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index] = updatedTodos[index].startsWith('✅ ')
//       ? updatedTodos[index].slice(2)
//       : `✅ ${updatedTodos[index]}`;
//     setTodos(updatedTodos);
//   };

//   const handleDeleteTodo = (index: number) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Todo List</h1>
//       <div className="flex flex-col md:flex-row  mb-4">
//         <input
//           type="text"
//           className="flex-grow border border-gray-200 p-2 rounded-l  mb-2 md:mb-0 md:mr-2"
//           placeholder="Add a new todo"
//           value={newTodo}
//           onChange={handleInputChange}
//         />
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
//           onClick={handleAddTodo}
//         >
//           Add
//         </button>
//       </div>
//       <ul>
//         {todos.map((todo, index) => (
//           <li
//             key={index}
//             className="flex items-center justify-between py-2 px-4 border-b border-gray-200"
//           >
//             <span
//               className={`cursor-pointer ${todo.startsWith('✅ ') ? 'line-through' : ''}`}
//               onClick={() => handleToggleTodo(index)}
//             >
//               {todo}
//             </span>
//             <button
//               className="text-red-500 hover:text-red-700"
//               onClick={() => handleDeleteTodo(index)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

// import React, { FC, useState } from 'react';

// const App: React.FC = () => {
//   const [todos, setTodos] = useState<string[]>([]);
//   const [newTodo, setNewTodo] = useState('');

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setNewTodo(event.target.value);
//   };

//   const handleAddTodo = () => {
//     if (newTodo.trim() !== '') {
//       setTodos([...todos, newTodo]);
//       setNewTodo('');
//     }
//   };

//   const handleDeleteTodo = (index: number) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Todo List</h1>
//       <div className="flex flex-col md:flex-row  mb-4">
//         <input
//           type="text"
//           className="flex-grow border border-gray-200 p-2 rounded-l  mb-2 md:mb-0 md:mr-2"
//           placeholder="Add a new todo"
//           value={newTodo}
//           onChange={handleInputChange}
//         />
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-r"
//           onClick={handleAddTodo}
//         >
//           Add
//         </button>
//       </div>
//       <ul>
//         {todos.map((todo, index) => (
//           <li
//             key={index}
//             className="flex items-center justify-between py-2 px-4 border-b border-gray-200"
//           >
//             <span>{todo}</span>
//             <button
//               className="text-red-500 hover:text-red-700"
//               onClick={() => handleDeleteTodo(index)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;


import React from 'react';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return(
    <div>
      <TodoList/>
    </div>
  )
}
export default App;