import './App.css';
import MyListForADay from "./MyListForADay";
import { useState } from 'react';
import uuid from 'react-dom'
import MyListTasks from './MyListTasks';


function App() {
  const [taskPlans, setTaskPlans] = useState([])
  const addTask = () => {
    const newTask = {
      title: "Today I'll learn ",
      id:uuid
    }
    setTaskPlans([newTask, ...taskPlans])
    console.log(addTask);
  }

  return (
    <div>
      <MyListForADay 
      addTask={addTask} 
      taskPlans={taskPlans}
      />
      <MyListTasks />
    </div>
  )
}

export default App;
