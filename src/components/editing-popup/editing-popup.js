import React, { Component } from 'react';

import './editing-popup.css';

export default class EditingPopup extends Component {

  render() {

    return (
      <div className="editing-popup hidden">
        <div className="editing-popup__window">
          <button className="editing-popup__small-btn small-btn small-btn--close">
            <i className="fas fa-times"></i>
          </button>
          <input className="editing-popup__todo-item-name" type="text" />
          <div className="editing-popup__is-done">
            <input className="editing-popup__done-checkbox" id="isdone-checkbox" type="checkbox" />
            <label htmlFor="isdone-checkbox">Is Done</label>
          </div>
          <select className="editing-popup__selection">
            <option className="editing-popup__selection-item">Category 1</option>
            <option className="editing-popup__selection-item">Category 2</option>
            <option className="editing-popup__selection-item">Category 3</option>
            <option className="editing-popup__selection-item">Category 3 1</option>
            <option className="editing-popup__selection-item">Category 3 2</option>
            <option className="editing-popup__selection-item">Category 3 3</option>
          </select>
          <button className="editing-popup__save-btn">Save</button>
        </div>
      </div>
    );
  };
}