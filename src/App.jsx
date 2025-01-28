import { useState } from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import Task from './Components/Task';
import TaskFilter from './Components/TaskFilter';
import './index.css';
function App() {
  //task states
  // const [task, setTask] = useState('');
  const [taskInfo, setTaskInfo] = useState({ name: '', status: false });

  //list states
  const [taskList, setTaskList] = useState([]);
  const [category, setCategory] = useState('');

  //adding task

  function handleTaskInfo(e) {
    setTaskInfo((t) => ({
      ...t,
      name: e.target.value,
      status: false,
      id: Date.now(),
    }));
  }

  function handleAddTask() {
    if (!taskInfo.name) return;
    setTaskList((t) => [...t, taskInfo]);
    setTaskInfo({ name: '', status: false });
  }
  //status toggler
  function handleStatus(taskId) {
    setTaskList((prevList) =>
      prevList.map((task) =>
        task.id === taskId ? { ...task, status: !task.status } : task
      )
    );
  }
  //delete task handler
  function handleDeleteTask(taskId) {
    setTaskList((prevList) => prevList.filter((task) => task.id !== taskId));
  }

  //handle selectedCategory
  function handleCategory(e) {
    setCategory((c) => e.target.value);
  }

  function filteredData(value, list) {
    let filteredList = list;

    if (value === 'completed') {
      filteredList = filteredList.filter((task) => task.status === true);
    } else if (value === 'not completed') {
      filteredList = filteredList.filter((task) => task.status === false);
    }

    return filteredList.map((task, index) => {
      return (
        <Task
          task={task}
          handleStatus={handleStatus}
          handleDeleteTask={handleDeleteTask}
          key={index}
        />
      );
    });
  }

  const result = filteredData(category, taskList);

  return (
    <div className='taskStyle'>
      <TaskForm
        taskInfo={taskInfo}
        handleTaskInfo={handleTaskInfo}
        handleAddTask={handleAddTask}
      />
      <div className='contentArea'>
        <TaskFilter handleCategory={handleCategory} />
        <TaskList result={result} />
      </div>
    </div>
  );
}

export default App;
