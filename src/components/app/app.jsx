import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';

const App = () => {
  const appData = [
    {label: "Make breakfast", important: false, id: 1},
    {label: "Create React App", important: true, id: 2},
    {label: "Make something", important: false, id: 3}
  ]; 

  return(
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <ItemStatusFilter/>
        <SearchPanel/>
      </div>
      <TodoList todos = {appData}/>
    </div>
  )
} 

export default App;