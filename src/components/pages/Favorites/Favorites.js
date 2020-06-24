import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import authData from '../../../helpers/data/authData';
import meatData from '../../../helpers/data/meatData';
import MeatCard from '../../shared/MeatCard/MeatCard';

import './Favorites.scss';

class Favorites extends React.Component {
  state = {
    meats: [],
  }

  getMeats = () => {
    const uid = authData.getUid();
    meatData.getMeatsByUid(uid)
      .then((meats) => this.setState({ meats }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getMeats();
  }

  render() {
    const user = firebase.auth().currentUser.displayName;
    const { meats } = this.state;
    const buildMeatCards = meats.map((meat) => (
      <MeatCard key={meat.id} meat={meat} removeItem={this.removeItem}/>
    ));
    return (
      <div className="container">
        <h1 className="title">{user}'s Favorites</h1>
        <div className="d-flex flex-wrap">
          {buildMeatCards}
        </div>
      </div>
    );
  }
}

export default Favorites;
