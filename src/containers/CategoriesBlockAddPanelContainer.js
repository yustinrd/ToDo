import { connect } from 'react-redux';

import AddPanel from '../components/add-panel';
import { addCategory } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: name => dispatch(addCategory({name})),
  };
}

const CategoriesBlockAddPanelContainer = connect(null, mapDispatchToProps)(AddPanel);

export default CategoriesBlockAddPanelContainer;