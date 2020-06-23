import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Home.scss';

class Home extends React.Component {
  state = {
    meats: [],
  }

  render() {
    const user = firebase.auth().currentUser.displayName;
    // const { meats } = this.state;
    return (
      <div className="container">
        <h1 className="title">Hello {user}</h1>
        <h2 className="subtitle">Look at you go!</h2>
        {/* <div className="d-flex flex-wrap">
          {buildItemCards}
        </div> */}
      </div>
    );
  }
}

export default Home;
