import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import authData from '../../../helpers/data/authData';
import meatData from '../../../helpers/data/meatData';
import MeatCard from '../../shared/MeatCard/MeatCard';

import './Favorites.scss';

class Favorites extends React.Component {
  state = {
    filteredMeats: [],
    uid: authData.getUid(),
  }

  getSortedMeats = () => {
    meatData.getSortedFavMeats(this.state.uid)
      .then((filteredMeats) => this.setState({ filteredMeats }))
      .catch((err) => console.error(err))
  }

  removeMeat = (meatId) => {
    meatData.deleteFavMeat(meatId)
      .then(() => this.getMeats())   //after deleting, get the collection from the database
      .catch((err) => console.error('could not remove meat', err))
  }
  
  componentDidMount() {
    this.getSortedMeats();
  }

  render() {
    const user = firebase.auth().currentUser.displayName;
    const { filteredMeats } = this.state;

    const buildMeatCards = filteredMeats.map((meat) => (
      <MeatCard
        key={meat.id}
        meat={meat}
        removeMeat={this.removeMeat}
      />
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
