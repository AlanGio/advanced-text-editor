import {
  GET_INITIAL_TEXT_SUCCESS,
  GET_INITIAL_TEXT_ERROR,
  GET_TEXT_TO_FORMAT,
} from '../constants';

const initialState = {
  error: null,
  text: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_INITIAL_TEXT_SUCCESS:
      return {
        ...state,
        text: action.payload.text,
      };
    case GET_INITIAL_TEXT_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case GET_TEXT_TO_FORMAT:
      console.log(action);
      return {
        ...state,
      };

    default:
      return state;
  }
};