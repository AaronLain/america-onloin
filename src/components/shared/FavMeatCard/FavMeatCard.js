import React from 'react';
import PropTypes from 'prop-types';

// import MeatShape from '../../../helpers/propz/MeatShape';
import './FavMeatCard.scss';

class FavMeatCard extends React.Component {
  static propTypes = {
    // Meat: MeatShape.MeatShape,
    removeMeat: PropTypes.func.isRequired,
  }

  meatCardColorSort = (meatType) => {
    let domString = '';
    switch (meatType) {
    case 'type1':
      domString = 'card bg-danger';
      break;
    case 'type2':
      domString = 'card bg-warning';
      break;
    case 'type3':
      domString = 'card bg-success';
      break;
    case 'type4':
      domString = 'card bg-info';
      break;
    case 'type5':
      domString = 'card bg-primary';
      break;
    default:
      domString = 'card';
    }
    return domString;
  }

  render() {
    const { favMeat, removeMeat, meatType } = this.props;
    
    return (
      <div className="meatcard col-md-3 col-sm-12">
        <div className={this.meatCardColorSort(favMeat.meatTypeId)}> {} {/* sets the color of the card based on the TYPE of protein it is*/}
          <img src={favMeat.photoUrl} alt="" className="card-img-top" />
          <h5 className="card-title">{favMeat.name}</h5>
          <div>
            <button className="btn btn-dark btn-sm" onClick={() => removeMeat(favMeat.favoriteId)}>Remove from Favorites</button>
          </div>
          <p className="card-text">{meatType}</p>
        </div>
      </div>
    );
  }
}

export default FavMeatCard;
