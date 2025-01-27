import React from 'react';

function TaskFilter({ handleCategory }) {
  return (
    <div>
      <button value='All' onClick={(e) => handleCategory(e)}>
        All
      </button>
      <button value='completed' onClick={(e) => handleCategory(e)}>
        completed
      </button>
      <button value='not completed' onClick={(e) => handleCategory(e)}>
        not completed
      </button>
    </div>
  );
}

export default TaskFilter;
