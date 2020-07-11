import React from 'react';

import './Auth.scss';

class Auth extends React.Component {
  render() {
    return (
      <div className="auth-container">
        <img className="img-fluid" src="https://i.ibb.co/P4NH24L/steak-Auth.png" alt="steak" />
        <h5 className="subtitle"><em>Please login to see your stuff</em></h5>
      </div>
    );
  }
}

export default Auth;
