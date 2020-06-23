
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import authData from '../../../helpers/data/authData';
import meatData from '../../../helpers/data/meatData';
import MeatCard from '../../shared/MeatCard/MeatCard';

import './Home.scss';

class Home extends React.Component {
  state = {
    meats: [],
  }

  getMeats = () => {
    const uid = authData.getUid();
    meatData.getFavMeatsByUid(uid)
      .then((meats) => this.setState({ meats }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getMeats();
  }

  render() {
    const user = firebase.auth().currentUser.displayName;
    const { meats } = this.state;
    const buildMeatCards = meats.map((item) => (
      <MeatCard key={item.id} item={item} removeItem={this.removeItem}/>
    ));
    return (
      <div className="container">
        <h1 className="title">Hello {user}</h1>
        <h2 className="subtitle">Welcome to your stuff!</h2>
        <div className="d-flex flex-wrap">
          {buildMeatCards}
        </div>
      </div>
    );
  }
}

export default Home;