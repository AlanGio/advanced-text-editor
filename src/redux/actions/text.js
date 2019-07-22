import getMockText from '../../text.service';

import {
  GET_INITIAL_TEXT_REQUEST,
  GET_INITIAL_TEXT_SUCCESS,
  GET_INITIAL_TEXT_ERROR,
} from '../constants';

export const getInitialText = () => (dispatch) => {
  dispatch({
    type: GET_INITIAL_TEXT_REQUEST,
    meta: getMockText()
      .then((response) => {
        dispatch({
          type: GET_INITIAL_TEXT_SUCCESS,
          payload: {
            text: response,
          },
        });
      })
      .catch(error => dispatch({
        type: GET_INITIAL_TEXT_ERROR,
        payload: {
          error,
        },
      })),
  });
};

export default getInitialText;
