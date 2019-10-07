import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  constructor() {
    super()

    this.buttons = [
      { name: 'all', label: 'All' },
      { name: 'active', label: 'Active' },
      { name: 'done', label: 'Done' }
    ]
    this.onFilterChange = evt => {
      this.props.onStatusChange(evt.target.value)
    }
  }

  render() {
    const { status } = this.props 
    const buttons = this.buttons.map( ({name, label}) => {
      const isActive = status === name;
      const classStatus = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button type="button" onClick = {this.onFilterChange} 
                value = { name }
                key = { name }
                className={`btn ${classStatus}`}>{label}</button>
      );
    });
    return (
      <div className="btr-group">
        {buttons}
      </div>
    );
  }
}