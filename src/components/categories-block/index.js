import React from 'react';

import CategoriesBlockAddPanelContainer from '../../containers/CategoriesBlockAddPanelContainer';
import CategoryListContainer from '../../containers/CategoryListContainer';

import styles from './categories-block.module.css';

export default function CategoryBlock() {
  return (
    <div className={styles.categoriesBlock}>
      <CategoriesBlockAddPanelContainer />
      <CategoryListContainer />
    </div>
  );
}