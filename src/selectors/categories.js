import { createSelector } from 'reselect';

const getCategories = (state) => state.categories;

export const getSortedCategories = createSelector(
  [ getCategories ],
  (categories) => {
    let sortedCategoryIdList = [];
    categories.allIds.filter(id => !('parentId' in categories.byId[id])).forEach(item => {
      sortedCategoryIdList = [...sortedCategoryIdList, item, ...categories.allIds.filter(id => categories.byId[id].parentId === item)];
    });
    return sortedCategoryIdList.map(id => categories.byId[id]);
  }
);
