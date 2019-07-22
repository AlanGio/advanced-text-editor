import api from '../../api';
import {
  GET_SYNONYMS_REQUEST,
  GET_SYNONYMS_SUCCESS,
  GET_SYNONYMS_ERROR,
} from '../constants';

export const getSynonyms = payload => (dispatch) => {
  dispatch({
    type: GET_SYNONYMS_REQUEST,
    meta: api.synonyms
      .getSynonyms(payload)
      .then((response) => {
        dispatch({
          type: GET_SYNONYMS_SUCCESS,
          payload: {
            data: response.data,
          },
        });
      })
      .catch(error => dispatch({
        type: GET_SYNONYMS_ERROR,
        payload: error.response,
      })),
  });
};

export default getSynonyms;
