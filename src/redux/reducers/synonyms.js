import {
  GET_SYNONYMS_REQUEST,
  GET_SYNONYMS_SUCCESS,
  GET_SYNONYMS_ERROR,
} from '../constants';

const initialState = {
  error: null,
  loading: false,
  data: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SYNONYMS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case GET_SYNONYMS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case GET_SYNONYMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  
    default:
      return state;
  }
};