import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MeatShape from '../../../helpers/propz/MeatShape';
import './MeatCard.scss';

class MeatCard extends React.Component {
  static propTypes = {
    Meat: MeatShape.MeatShape,
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
    const { meat, removeMeat, meatType } = this.props;
    const singleLink = `/Edit/${meat.id}`;
    
    return (
      <div className="meatcard col-md-3 col-sm-12">
        <div className={this.meatCardColorSort(meat.meatTypeId)}>
          <img src={meat.photoUrl} alt="" className="card-img-top" />
          <h5 className="card-title">{meat.name}</h5>
          <div>
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
