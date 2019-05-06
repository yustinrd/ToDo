import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CategoryList from '../components/category-list';
import { setCurrentCategoryId, deleteCategory, showEditCategoryModal, showAddCategoryModal } from '../actions';
import { getSortedCategories } from '../selectors/categories';

function mapStateToProps(state) {
  return {
    categories: getSortedCategories(state),
    currentCategoryId: state.currentCategoryId
  };
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({
    onChangeCategory: setCurrentCategoryId,
    onDeleteCategory: deleteCategory,
    showEditCategoryModal: showEditCategoryModal,
    showAddCategoryModal: showAddCategoryModal,
  }, dispatch);
}

const CategoryListContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryList);

export default CategoryListContainer;
