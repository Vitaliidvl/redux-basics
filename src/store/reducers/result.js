import * as actionTypes from '../actions';

const initialState = {
  results: [],
};

const result = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }),
      };
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      const updArr = state.results.filter(
        (result) => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updArr,
      };
    default:
      return state;
  }
};
export default result;
