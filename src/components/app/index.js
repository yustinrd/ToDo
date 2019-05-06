import React from 'react';

import CategoryBlock from '../categories-block';
import TodosBlock from '../todos-block';
import ModalContainer from '../../containers/ModalContainer';

import styles from './app.module.css';

export default function App() {
  return (
    <section className={styles.todoApp}>
      <CategoryBlock />
      <TodosBlock />
      <ModalContainer />
    </section>
  );
}