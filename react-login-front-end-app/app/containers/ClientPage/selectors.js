import { createSelector } from 'reselect';

/**
 * Direct selector to the clientPage state domain
 */
const selectClientPageDomain = (state) => state.get('clientPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ClientPage
 */

const makeSelectClientPage = () => createSelector(
  selectClientPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectClientPage;
export {
  selectClientPageDomain,
};
