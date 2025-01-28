import './TaskFilter.css';
function TaskFilter({ handleCategory }) {
  return (
    <div className='buttonArea'>
      <button value='All' onClick={(e) => handleCategory(e)}>
        All
      </button>
      <button value='completed' onClick={(e) => handleCategory(e)}>
        Completed
      </button>
      <button value='not completed' onClick={(e) => handleCategory(e)}>
        Not Completed
      </button>
    </div>
  );
}

export default TaskFilter;
