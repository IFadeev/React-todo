import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';



export default class App extends Component {
  constructor() {
    super();

    this.state = {
      appData: [
        {label: "Make breakfast", important: false, id: 1},
        {label: "Create React App", important: true, id: 2},
        {label: "Make something", important: false, id: 3}
      ] 
    };

    this.deleteItem = (id) => {
      this.setState( ({appData})=> {
        const idx = appData.findIndex( (el) => el.id === id);
        //Для того, чтобы не изменять state напрямую,
        //используем метод slice, вместо splice
        const newAppData = [
          ...appData.slice(0, idx),
          ...appData.slice(idx+1)
        ]
        return {
          appData: newAppData
        }
      })
    };
  }

  render() {
    return(
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <ItemStatusFilter/>
          <SearchPanel/>
        </div>
        <TodoList todos = {this.state.appData} onDeleted = {this.deleteItem}/>
      </div>
    )
  }
}
