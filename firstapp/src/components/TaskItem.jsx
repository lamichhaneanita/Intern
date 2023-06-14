import React from 'react';

function TaskItem({ task, index }) {
  return (
    <li>
      <input type="checkbox" />
      {task}

    </li>
  );
}

export default TaskItem;