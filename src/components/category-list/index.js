import React from 'react';

import CategoryListItem from '../category-list-item';

import styles from './category-list.module.css';

export default function CategoryList (props) {

  const handleShowEditCategoryModal = (categoryId) => {
    const category = props.categories.find(category => categoryId === category.id);
    props.showEditCategoryModal(category);
  };

  const handleShowAddCategoryModal = (categoryId) => {
    const category = {
      name: '',
      parentId: categoryId
    };
    props.showAddCategoryModal(category);
  };

  const CategoryList = props.categories.map((item) => {
    const isSelected = props.currentCategoryId === item.id;
    return <CategoryListItem
      key={item.id}
      itemId={item.id}
      name={item.name}
      isInnerItem={'parentId' in item}
      isSelected={isSelected}
      onChangeCategory={props.onChangeCategory}
      onDeleteCategory={props.onDeleteCategory}
      showEditCategoryModal={handleShowEditCategoryModal}
      showAddCategoryModal={handleShowAddCategoryModal}
    />
  });

  return (
    <ul className={styles.categoryList}>
      {CategoryList}
    </ul>
  );
}