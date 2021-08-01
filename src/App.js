import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1, 
        task: 'Appointment with doctor', 
        day: 'Aug 21 at 5:30pm',
        remind: true,
    },
    {
        id: 2, 
        task: 'visit Park', 
        day: 'Tommarrow at 5:30pm',
        remind: false,
    },
    {
        id: 3, 
        task: 'meeting with boss', 
        day: 'Monday Aug 1 at 5:30pm',
        remind: true,
    },
])

  // function to toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, remind: !task.remind} : task))
    tasks.forEach(task => {
      if(task.id === id) console.log(task.remind);
    })
  }

  //function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id ))
  }
  
  return (
    <div className="main-container">
      <Header title="Task Tracker"/>
      {tasks.length > 0 ? <Tasks taskProp={tasks} onRemind={toggleReminder} onDelete={deleteTask}/> : <p className='empty'>Add some Tasks to get started</p>}
    </div>
  );
}

export default App;
