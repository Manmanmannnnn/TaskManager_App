import './Task.css';
import { FaRegTrashAlt } from 'react-icons/fa';

function Task({ task, handleStatus, handleDeleteTask }) {
  return (
    <section>
      <label className={task.status ? 'completed' : ''}>
        <input
          type='checkbox'
          checked={task.status}
          onChange={() => handleStatus(task.id)}
        />
        {task.name}
      </label>
      <span>
        <FaRegTrashAlt onClick={() => handleDeleteTask(task.id)} />
      </span>
    </section>
  );
}

export default Task;
