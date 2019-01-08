/*
 *
 * ClientPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_USER,
} from './constants';

const initialState = fromJS({});

function clientPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_USER:
      return state
        .set('user', Map(action.data))
    default:
      return state;
  }
}

export default clientPageReducer;
