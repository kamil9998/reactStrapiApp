/*
 *
 * ClientPage actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_USER
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

/**
 * Set the user value
 * @param  {Object} target strapi response data
 * @return {Object}
 */
export function setUser(data) {
  return { type: SET_USER, data };
}
