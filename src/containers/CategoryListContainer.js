import { connect } from 'react-redux';

import CategoryList from '../components/category-list';
import { setCurrentCategoryId, deleteCategory, showEditCategoryModal, showAddCategoryModal } from '../actions';
import { getSortedCategories } from '../reducers';

function mapStateToProps(state) {
  return {
    categories: getSortedCategories(state),
    currentCategoryId: state.currentCategoryId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeCategory: id => dispatch(setCurrentCategoryId(id)),
    onDeleteCategory: id => dispatch(deleteCategory(id)),
    showEditCategoryModal: category => dispatch(showEditCategoryModal(category)),
    showAddCategoryModal: category => dispatch(showAddCategoryModal(category)),
  };
}

const CategoryListContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryList);

export default CategoryListContainer;