import React from 'react';

import CategoryBlock from '../categories-block';
import TodosBlock from '../todos-block';
import ModalContainer from '../../containers/ModalContainer';

import './app.css';

export default function App() {
  return (
    <section className="todo-app">
      <CategoryBlock />
      <TodosBlock />
      <ModalContainer />
    </section>
  );
}