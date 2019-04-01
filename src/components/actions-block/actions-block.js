import React, { Component } from 'react';

import ShowDone from '../show-done';
import SearchPanel from '../search-panel';
import AddPanel from '../add-panel';
import ActionsList from '../actions-list';
import EditingPopup from '../editing-popup';
import Service from "../../service";

import './actions-block.css';

export default class ActionsBlock extends Component {

  Service = new Service();

  state = {
    tasks: [],
    showDoneChecked: false
  };

  componentDidMount() {
    this.updateTasks();
  }

  updateTasks = () => {
    this.Service
      .getAllTasks()
      .then((data) => {
        this.setState({
          tasks: data
        });
      })
      .catch(this.onError);
  };

  showDoneToggle = () => {
    this.setState((state, props) => {
      return {
        showDoneChecked: !state.showDoneChecked
      }
    });
  };

  taskDoneToggle = (id) => {
    const task = this.state.tasks.find(task => task.id === id);
    task.done = !task.done;
    this.Service
      .updateTask(task)
      .then(() => {
        this.updateTasks();
      })
      .catch(this.onError);
  };

  onError = (err) => {
    this.setState({
      tasks: []
    });
    console.log(err);
  };

  render() {

    return (
      <div className="actions-block">
        <div className="top-panel">
          <ShowDone showDoneToggle={this.showDoneToggle} showDoneChecked={this.state.showDoneChecked}/>
          <SearchPanel />
          <AddPanel />
        </div>
        <ActionsList tasks={this.state.tasks} selectedCategoryId={this.props.selectedCategoryId} showDoneChecked={this.state.showDoneChecked} taskDoneToggle={this.taskDoneToggle}/>
        <EditingPopup />
      </div>
    );
  };
}