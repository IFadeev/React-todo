import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  constructor() {
    super()

    this.onFilterChange = evt => {

      this.props.onStatusChange(evt.target.value)

    }
  }

  render() {
    return (
      <div className="btr-group">
        <button type="button" onClick = {this.onFilterChange} value="all"
                className="btn btn-info">All</button>
        <button type="button" onClick = {this.onFilterChange} value="active"
                className="btn btn-outline-secondary">Active</button>
        <button type="button" onClick = {this.onFilterChange} value="done"
                className="btn btn-outline-secondary">Done</button>
      </div>
    );
  }
}