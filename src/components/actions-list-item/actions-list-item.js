import React, { Component } from 'react';

import './actions-list-item.css';

export default class ActionsListItem extends Component {

  render() {

    return (
      <li className="actions-list__item">
        <input className="actions-list__item-checkbox" type="checkbox" onChange={() => this.props.taskDoneToggle(this.props.itemId)} checked={this.props.done} />
        <span className="actions-list__item-name">{this.props.text}</span>
        <button className="actions-list__small-btn small-btn small-btn--edit">
          <i className="fas fa-edit"></i>
        </button>
      </li>
    );
  };
}