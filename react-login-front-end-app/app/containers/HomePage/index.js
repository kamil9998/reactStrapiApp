/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {bindActionCreators, compose} from 'redux';

// Design
import Button from 'components/Button';

// Utils
import auth from 'utils/auth';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { setUser } from '../AuthPage/actions';
import reducer from '../AuthPage/reducer';
import saga from '../AuthPage//saga';

import './styles.scss';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = { showButton: false, clientId: '1' }

  componentDidMount() {
    if (auth.getToken()) {
      this.setState({ showButton: true });
    }
    if (auth.getUserInfo()) {
      const userInfo = auth.getUserInfo();
      this.setState({clientId: userInfo._id});
      this.props.setUser(userInfo);
    }
  }

  logout = (e) => {
    e.preventDefault();
    auth.clearAppStorage();
    this.setState({ showButton: false });
  }

  render() {
    return (
      <div className="container">
        <div>
          <h1>
            Welcome !
          </h1>
          <p>
            This is the HomePage of your app therefore the access is not restricted
          </p>
          <p>
            Try to access a protected url by either changing the url from the browser or by clicking on the <Link to={`/client/${this.state.clientId}`}>link</Link>
          </p>
          { this.state.showButton ? (
            <Button primary onClick={this.logout} type="button">Logout</Button>
          ) : ''}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setUser
  }, dispatch);
}

const withConnect = connect('', mapDispatchToProps);

const withReducer = injectReducer({key: 'authPage', reducer});
const withSaga = injectSaga({key: 'authPage', saga});

export default compose(withReducer, withSaga, withConnect,)(HomePage);
