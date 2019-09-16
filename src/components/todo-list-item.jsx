import React from 'react';


const TodoListItem = ( {label, important = false} ) => {
  return (
    <div>
      <span>{label}</span>
    </div>
  );
}

export default TodoListItem;