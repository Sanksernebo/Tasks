
import './App.css';
import Tasks from "./components/Expenses/Tasks";
import {useState} from "react";
import NewTask from "./components/NewExpenses/NewTask";
import TaskList from "./components/Expenses/TaskList";
import Card from "./components/UI/Card";


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    date: new Date(2024, 0, 10),
    task:'Do smart stuff',
    priority: 'Critical'
  },
  {
    id: 'e2',
    date: new Date(2024, 0, 5),
    task:'Live laugh love',
    priority: 'Medium'
  },
  {
    id: 'e3',
    date: new Date(2023, 0, 26),
    task:'Drive car vroom vroom',
    priority: 'Low'
  }

]

const App = () => {
  const [tasks, setTasks] = useState(DUMMY_EXPENSES)



  const addTaskhandler = (task) => {
    console.log('In App.js')
    setTasks((previousTask) => {
      return [task, ...previousTask]
    })
  }
  console.log(tasks)

  return (
      <Card className="App">
        <NewTask onAddExpense={addTaskhandler}></NewTask>
        <Tasks expenses={tasks}></Tasks>

      </Card>
  );
}




export default App;