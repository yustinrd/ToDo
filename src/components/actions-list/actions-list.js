import React, { Component } from 'react';

import ActionsListItem from '../actions-list-item';

import './actions-list.css';

export default class ActionsList extends Component {

  render() {

    const TasksList = this.props.tasks.map((item) => {
      if (item.categoryId === this.props.selectedCategoryId) {
        if (!item.done || (item.done && this.props.showDoneChecked)) {
          return <ActionsListItem
            key={item.id}
            text={item.text}
            itemId={item.id}
            done={item.done}
            taskDoneToggle={this.props.taskDoneToggle}
          />
        } else {
          return false
        }
      }
      return null
    });

    return (
      <ul className="actions-list">
        {TasksList}
      </ul>
    );
  };
}