import * as React from 'react';
// import { connect } from 'react-redux';
import HeaderMenu from './HeaderMenu';
// import { IAppState } from '../../../store';
// import { logout } from '../../../store/auth/authActions';
// import { IAuthState } from '../../../store/auth';

class HeaderMenuContainer extends React.Component {
  render() {
    return (
      <HeaderMenu
        // isAuthenticated={this.props.auth.isAuthenticated}
        // isLogoutLoading={this.state.isLogoutLoading}
        // logout={this.logout}
        // name={this.props.auth.name}
      />
    );
  }
}


export default (HeaderMenuContainer);
