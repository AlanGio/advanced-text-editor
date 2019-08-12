import { GET_INITIAL_TEXT_SUCCESS, GET_INITIAL_TEXT_ERROR } from '../constants';

const initialState = {
  error: null,
  text: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_INITIAL_TEXT_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case GET_INITIAL_TEXT_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
