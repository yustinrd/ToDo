import React from 'react';

import TodoListContainer from '../../containers/TodoListContainer';
import ShowDoneContainer from '../../containers/ShowDoneContainer';
import SearchPanelContainer from '../../containers/SearchPanelContainer';
import TodosBlockAddPanelContainer from '../../containers/TodosBlockAddPanelContainer';

import './todos-block.css';

export default function TodosBlock() {

  return (
    <div className="todos-block">
      <div className="top-panel">
        <ShowDoneContainer />
        <SearchPanelContainer />
        <TodosBlockAddPanelContainer />
      </div>
      <TodoListContainer />
    </div>
  );
}