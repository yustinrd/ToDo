import { connect } from 'react-redux';

import SearchPanel from '../components/search-panel';
import { setSearchFilter } from '../actions';

function mapStateToProps(state) {
  return {
    searchFilter: state.searchFilter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeSearchFilter: searchFilter => dispatch(setSearchFilter(searchFilter))
  };
}

const SearchPanelContainer = connect(mapStateToProps, mapDispatchToProps)(SearchPanel);

export default SearchPanelContainer;
