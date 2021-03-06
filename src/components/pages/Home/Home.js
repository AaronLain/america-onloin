import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import meatData from '../../../helpers/data/meatData';
import MeatCard from '../../shared/MeatCard/MeatCard';

import './Home.scss';


class Home extends React.Component {
  state = {
    meats: [],
    meatTypes: [],
  }

  getMeatTypes = () => {
    meatData.getAllMeatTypes()
      .then((meatTypes) => {
        this.setState({ meatTypes })
      })
    .catch((err) => console.error('getMeatTypes not getting meatTypes', err))
  }

  getMeats = () => {
    meatData.getAllMeats()
      .then((meats) => {
        this.setState({ meats })
      })
      .catch((err) => console.error('getMeats not getting meats', err));
  }

  removeMeat = (meatId) => {
    meatData.deleteMeat(meatId)
      .then(() => this.getMeats())   //after deleting, get the collection from the database
      .catch((err) => console.error('could not remove meat', err))
  }

  componentDidMount() {
    this.getMeats();
    this.getMeatTypes();
  }

  render() {
    const user = firebase.auth().currentUser.displayName;
    const { meats, meatTypes } = this.state;

    const getMeatTypeName = (meatTypeId) => {  //finds the meatType.name based on the meatTypeId
      const thisMeatType = meatTypes.find((meatType) => meatType.id === meatTypeId) 
      if (thisMeatType) return thisMeatType.name;   //without if statement, app crashes upon reload
    }

    const buildMeatCards = meats.map((meat) => (
      <MeatCard
        key={meat.id}
        meat={meat}
        meatType={getMeatTypeName(meat.meatTypeId)}
        description={meat.description}
        removeMeat={this.removeMeat}
      />
    ));
  
    return (
      <div className="container">
        <h1 className="title">Hello {user}</h1>
        <h2 className="subtitle"><em>Welcome to your meats!</em></h2>
        <div className="d-flex flex-row flex-wrap justify-content-md-around">
          {buildMeatCards}
        </div>
      </div>
    );
  }
}

export default Home;
