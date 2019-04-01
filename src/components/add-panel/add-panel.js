import React, { Component } from 'react';

import './add-panel.css';

export default class AddPanel extends Component {

  state = {
    addInputValue: ''
  };

  onChange = (event) => {
    const val = event.target.value;
    this.setState((state, props) => {
      return {
        addInputValue: val
      }
    });
  };

  onClickAdd = () => {
    this.setState({
      addInputValue: ''
    });
    this.props.onAdd(this.state.addInputValue);
  };

  render() {

    return (
      <div className="add-panel">
        <input className="add-panel__input" type="text" onChange={this.onChange} value={this.state.addInputValue}/>
        <button className="add-panel__add-btn" onClick={this.onClickAdd}>Add</button>
      </div>
    );
  };
}