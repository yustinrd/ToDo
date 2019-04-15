import { connect } from 'react-redux';

import ShowDone from '../components/show-done';
import { setShowDoneFilter } from '../actions';

function mapStateToProps(state) {
  return {
    showDone: state.showDoneFilter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleShowDone: showDone => dispatch(setShowDoneFilter(!showDone))
  };
}

const ShowDoneContainer = connect(mapStateToProps, mapDispatchToProps)(ShowDone);

export default ShowDoneContainer;
