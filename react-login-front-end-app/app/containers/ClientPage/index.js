/**
 *
 * SecurePage
 * Container that is accessible only if the user is logged in
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectClientPage from './selectors';
import reducer from './reducer';
import saga from './saga';

/* import {Query} from 'react-apollo'; */
/* import {GET_TRAININGS} from '../../queries'; */

export class ClientPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = { trainings: [] };
  render() {
    return (
      <div style={{ paddingTop: '30px', textAlign: 'center' }}>
        <h1>Now that you are logged in you have access to this page</h1>
        <p>
          <Link to="/">Back to HomePage</Link>
        </p>
        {/* <Query query={GET_TRAININGS}>
          {({ loading, error, data }) => {
            if (loading) {
              return null;
            }

            if (error) {
              return `Error: ${error}`;
            }

            return (
              <div className="productPageWrapper">
                <div className="container">
                  
                </div>
              </div>
            );
          }}
        </Query> */}
      </div>
    );
  }
}

ClientPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  clientpage: makeSelectClientPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'clientPage', reducer });
const withSaga = injectSaga({ key: 'clientPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ClientPage);
