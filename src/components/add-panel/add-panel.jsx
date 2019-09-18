import React, {Component} from 'react';
import './add-panel.css';

export default class AddPanel extends Component {
  constructor() {
    super();
    
    this.state = {
      label: ''
    }

    this.onLabelChange = (event) => {
      this.setState({
        label: event.target.value
      });
    }

    this.onSubmit = (e) => {
      e.preventDefault();
      this.props.addItem(this.state.label);
      this.setState({
        label: ''
      });
    };

  }
  

  render() {
    return (
      <form className = "item-add-form d-flex"
             onSubmit = {this.onSubmit}>
        <input type = "text" 
               className = "form-control"
               placeholder = "Type what need to do"
               onChange = {this.onLabelChange}
               value={this.state.label}
                  />
        <button type = "submit" className="btn btn-outline-secondary">
             Add</button>
      </form>
    )
  }
   

}

