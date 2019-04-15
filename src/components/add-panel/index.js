import React, { Component } from 'react';

import './add-panel.css';

export default class AddPanel extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.handleSubmit(this.refs.name.value);
    this.refs.name.value = '';
  };

  render () {
    return (
      <div className="add-panel">
        <form onSubmit={this.handleSubmit}>
          <input className="add-panel__input" type="text" ref="name" />
          <button className="add-panel__add-btn" type="submit">Add</button>
        </form>
      </div>
    );
  }
}