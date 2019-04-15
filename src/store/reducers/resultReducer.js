import * as actionType from '../actions/actionTypes';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      };
    case actionType.DELETE_RESULT:
      // const id =2;
      // const newArr = [...state.results];
      // newArr.splice(id, 1)
      const updatedArr = state.results.filter(
        result => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArr
      };
    default:
      return state;
  }
};

export default reducer;