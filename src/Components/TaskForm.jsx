import './TaskForm.css';

function TaskForm({ taskInfo, handleTaskInfo, handleAddTask }) {
  return (
    <div className='inputArea'>
      <input
        value={taskInfo.name}
        onChange={(e) => handleTaskInfo(e)}
        type='text'
        placeholder='Add task here...'
        style={{ height: '1.8rem', fontSize: '1.4rem' }}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default TaskForm;
