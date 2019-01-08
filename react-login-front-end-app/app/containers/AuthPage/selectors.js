import { createSelector } from 'reselect';

/**
 * Direct selector to the authPage state domain
 */
const selectAuthPageDomain = (state) => state.get('authPage');

/**
 * Other specific selectors
 */
const makeSelectFormType = () => createSelector(
  selectAuthPageDomain,
  (substate) => substate.get('formType'),
);

const makeSelectModifiedData = () => createSelector(
  selectAuthPageDomain,
  (substate) => substate.get('modifiedData').toJS(),
);

const makeSelectUser = () => createSelector(
  selectAuthPageDomain,
  (substate) => substate.get('user').toJS(),
);

const makeSelectUserId = () => createSelector(
  makeSelectUser,
  (substate) => substate.get('_id'),
);

/**
 * Default selector used by AuthPage
 */

const makeSelectAuthPage = () => createSelector(
  selectAuthPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectAuthPage;
export {
  makeSelectFormType,
  makeSelectModifiedData,
  makeSelectUser,
  makeSelectUserId,
  selectAuthPageDomain,
};
