import React, { Component } from 'react';

import styles from './add-panel.module.css';

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
      <div className={styles.addPanel}>
        <form onSubmit={this.handleSubmit}>
          <input className={styles.input} type="text" ref="name" />
          <button className={styles.addBtn} type="submit">Add</button>
        </form>
      </div>
    );
  }
}