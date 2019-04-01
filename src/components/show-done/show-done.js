import React, { Component } from 'react';

import './show-done.css';

export default class ShowDone extends Component {

  render() {

    return (
      <div className="show-done">
        <input className="show-done__done-checkbox" id="done-checkbox" type="checkbox" onChange={this.props.showDoneToggle} checked={this.props.showDoneChecked}/>
        <label htmlFor="done-checkbox">Show done</label>
      </div>
    );
  };
}