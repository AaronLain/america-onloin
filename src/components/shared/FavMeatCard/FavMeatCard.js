import React from 'react';
import PropTypes from 'prop-types';

import colorSort from '../../../helpers/colorSort/MeatCardColorSort';
import './FavMeatCard.scss';

class FavMeatCard extends React.Component {
  static propTypes = {
    removeMeat: PropTypes.func.isRequired,
  }

  meatCardColorSort = colorSort.meatCardColorSort;

  render() {
    const {
      favMeat,
      removeMeat,
      description
    } = this.props;
    
    return (
      <div className="meatcard col-md-4 col-sm-12">
        <div className={this.meatCardColorSort(favMeat.meatTypeId)}> {} {/* sets the color of the card based on the TYPE of protein it is*/}
          <img src={favMeat.photoUrl} alt="" className="card-img-top" />
          <h5 className="card-title">{favMeat.name}</h5>
          <p className="card-text"><em>{description}</em></p>
          <div>
            <button className="btn btn-dark btn-sm"
              onClick={() => removeMeat(favMeat.favoriteId)}>
              Remove from Favorites
              </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FavMeatCard;
