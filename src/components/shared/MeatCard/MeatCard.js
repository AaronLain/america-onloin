import React from 'react';
import { Link } from 'react-router-dom';

import authData from '../../../helpers/data/authData';
import meatData from '../../../helpers/data/meatData';
import cardColorSort from '../../../helpers/colorSort/MeatCardColorSort';
import btnColorSort from '../../../helpers/colorSort/buttonColorSort';
import './MeatCard.scss';

class MeatCard extends React.Component {
  state = {
    favorites: [],
    meatId: '',
    uid: '',
    id: '',
  }

  addToFavorites = (meatId) => {
    const rand = Math.floor(Math.random() * 3912)
    const newFavMeat = {
      id: "favMeat2" + rand,
      meatId,
      uid: authData.getUid(),
    }

    this.setState({ id: newFavMeat.key })
    
    meatData.patchFavMeatIdToMeat(meatId, newFavMeat.id)  //add the new favMeatId to the meat 
      .then(meatData.addFavMeat(newFavMeat))
      .then(() => this.props.history.push('/home'))   //returns to home after post is complete
      .catch((err) => console.error('could not save favorite', err));
  }

  meatCardColorSort = cardColorSort.meatCardColorSort;
  buttonColorSort = btnColorSort.buttonColorSort;

  render() {
    const { meat, removeMeat, meatType } = this.props;
    const singleLink = `/Edit/${meat.id}`;
    
    return (
      <div className="meatcard col-md-4 col-sm-12">
        <div className={this.meatCardColorSort(meat.meatTypeId)}> {} {/* sets the color of the card based on the TYPE of protein it is*/}
          <img src={meat.photoUrl} alt="" className="card-img-top" />
          <h5 className="card-title">{meat.name}</h5>
          <div>
            <button
              className={this.buttonColorSort(meat.meatTypeId)}
              onClick={() => this.addToFavorites(meat.id)}>
              Add to Favorites!
            </button>
            <Link className="btn btn-light btn-sm" to={singleLink}>Edit the meat!</Link>
            <button className="btn btn-dark btn-sm" onClick={() => removeMeat(meat.id)}>Delete the meat!</button>
          </div>
          <p className="card-text">{meatType}</p>
        </div>
      </div>
    );
  }
}

export default MeatCard;
