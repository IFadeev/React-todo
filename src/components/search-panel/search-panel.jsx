import React, {Component} from 'react';

import './search-panel.css';


export default  class SearchPanel extends Component {
  constructor() {
    super()
    
    this.state = {
      phrase: '' 
    }

    this.onSearchChange = evt => {
      const phrase = evt.target.value;
      this.setState({phrase});
      this.props.onSearchChange(evt.target.value);
    }

  }

  render() {
    return ( 
      <input type="text"
             onChange = {this.onSearchChange}
             value = {this.state.phrase}
             className="form-control search-input" 
             placeholder = "type to search"/>

    );

  }

}
