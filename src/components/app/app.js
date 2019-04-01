import React, { Component } from 'react';

import CategoryBlock from '../category-block';
import ActionsBlock from '../actions-block';

import './app.css';

export default class App extends Component {

  state = {
    selectedCategoryId: null
  };

  onChangeCategory = (id) => {
    this.setState({
      selectedCategoryId: id
    });
  };

  render() {

    return (
      <section className="todo-app">
        <CategoryBlock selectedCategoryId={this.state.selectedCategoryId} onChangeCategory={this.onChangeCategory} />
        <ActionsBlock selectedCategoryId={this.state.selectedCategoryId} />
      </section>
    );
  };
}