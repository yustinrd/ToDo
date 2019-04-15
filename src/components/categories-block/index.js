import React from 'react';

import CategoriesBlockAddPanelContainer from '../../containers/CategoriesBlockAddPanelContainer';
import CategoryListContainer from '../../containers/CategoryListContainer';

import './categories-block.css';

export default function CategoryBlock() {
  return (
    <div className="category-block">
      <CategoriesBlockAddPanelContainer />
      <CategoryListContainer />
    </div>
  );
}