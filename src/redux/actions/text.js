import getMockText from '../../text.service';

import {
  GET_INITIAL_TEXT_REQUEST,
  GET_INITIAL_TEXT_SUCCESS,
  GET_INITIAL_TEXT_ERROR,
  GET_TEXT_TO_FORMAT,
} from '../constants';

export const getInitialText = payload => dispatch => {
  dispatch({
    type: GET_INITIAL_TEXT_REQUEST,
    meta: getMockText()
      .then(response => {
          dispatch({
            type: GET_INITIAL_TEXT_SUCCESS,
            payload: {
              text: response,
            },
          });
        }
      )
      .catch(error =>
        dispatch({
          type: GET_INITIAL_TEXT_ERROR,
          payload: {
            error: error,
          }
        })
      ),
  })
};

export function getTextToFormat(payload, formatType) {
  console.log(payload, formatType);
  return {
    type: GET_TEXT_TO_FORMAT,
    payload: {
      text: payload,
      formatType
    }
  };
}