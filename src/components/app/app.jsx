import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import AddPanel from '../add-panel/add-panel';

export default class App extends Component {
  constructor() {
    super();
    
    this.initialID = 10;
    this.state = {
      appData: [
        {label: "Make breakfast", important: false, done: false, id: 1},
        {label: "Create React App", important: true, done: false, id: 2},
        {label: "Make something", important: false, done: false, id: 3}
      ],
      phrase: '',
      status: 'all'
    };

    this.deleteItem = (id) => {
      this.setState( ({ appData }) => {
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

    this.addItem = (text) => { 
      const newItem =  {
        label: text,
        important: false,
        done: false,
        id: this.initialID++
      };
      //Для того, чтобы не изменять state напрямую,
        //используем Spread оператор для массивов, вместо push
      this.setState( ({appData}) => {
        const newAppData = [
          ...appData,
          newItem
        ]; 
        return {
          appData: newAppData
        }
      });
    };
    
    this.toggleProperty = (arr, id, propery) => {
      const idx = arr.findIndex( el => el.id === id);
      const oldItem = arr[idx];
      const newItem = {...oldItem, [propery]: !oldItem[propery]};
        //Для того, чтобы не изменять state напрямую,
        //используем Spread оператор для массиа
      return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
      ];
    };

    this.onToggleDone = id => {
      this.setState( ({ appData } ) => {
        return {
          appData: this.toggleProperty(appData, id, 'done')
        }
      })
    };

    this.onToggleImportant = id => {
      this.setState( ({ appData }) => {
        return {
          appData: this.toggleProperty(appData, id, 'important')
        }
      })
    }; 


    this.search = (items, phrase) => {

      if (phrase.length === 0) {
        return items;
      }
      
      return items.filter( elem => {
        return elem.label.toLowerCase().indexOf(phrase.toLowerCase()) > -1;
      });
    };

    this.onSearchChange = phrase => {
      this.setState({phrase});
    };

    this.onStatusChange = status => {
      this.setState({status});
    }

    this.onFilter = (items, status) => {
      switch(status) {
        case "all": return items
        case "active": return items.filter( elem => (!elem.done)) 
        case "done": return items.filter( elem => (elem.done))
        default: return items
      }
    }

  }

  render() {
    const { appData, phrase, status } = this.state;
    const doneCount = appData.filter( el => el.done).length;
    const todoItemCount = appData.length - doneCount;
    const currentItems = this.search(this.onFilter(appData, status), phrase);

    return(
      <div className="todo-app">
        <AppHeader toDo={todoItemCount} done={doneCount} />
        <div className="top-panel d-flex">
          <ItemStatusFilter status = {status} onStatusChange = {this.onStatusChange}/>
          <SearchPanel onSearchChange = {this.onSearchChange}/>
        </div>
        <TodoList   todos = {currentItems} 
                onDeleted = {this.deleteItem}
             onToggleDone = {this.onToggleDone}
        onToggleImportant = {this.onToggleImportant}/>
        <AddPanel addItem = {this.addItem}/>
      </div>
    )
  }
}
