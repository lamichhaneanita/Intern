import React, { useState } from 'react';
import TaskItem from './components/TaskItem';
import './App.css';
// import Container from './components/Container'
// import { FaSmile, FaReact, FaCalendar} from 'react-icons/fa'


function App() {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);;

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      setTasksList([...tasksList, task]);
      setTask('');
    }
  };



  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasksList.map((task, index) => (
          <TaskItem
            key={index}
            index={index}
            task={task}
         
          />
        ))}
      </ul>
    </div>
  );
}
// function App(){

// return(
// <div className='container'>
//   <Container title="Sales Planning" content="The gradual accumulation of information about atomic adnd small scales.">
//     <FaReact size={40} color='black' />
    
//      </Container>
//   <Container  title="Training Course" content="The gradual accumulation of information about atomic adnd small scales.">
//     <FaSmile size={40} color='black'/>
//     </Container>
//   <Container  title="Training Course" content="The gradual accumulation of information about atomic adnd small scales.">
//   <FaCalendar size={40} color='black'/>
//     </Container> 
// </div>
// );
// }
export default App