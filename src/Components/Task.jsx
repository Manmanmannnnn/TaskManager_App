import './Task.css';
import { FaRegTrashAlt } from 'react-icons/fa';

function Task({ task, handleStatus, handleDeleteTask }) {
  return (
    <section className='task'>
      <div className='taskName'>
        <input
          type='checkbox'
          checked={task.status}
          onChange={() => handleStatus(task.id)}
        />
        <span className={`${task.status ? 'completed' : ''}`}>{task.name}</span>
      </div>

      <FaRegTrashAlt
        className='trashIcon'
        onClick={() => handleDeleteTask(task.id)}
      />
    </section>
  );
}

export default Task;
