import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// import MeatShape from '../../../helpers/propz/MeatShape';
import './MeatCard.scss';

class MeatCard extends React.Component {
  // static propTypes = {
  //   Meat: MeatShape.MeatShape,
  //   removeMeat: PropTypes.func.isRequired,
  // }

  render() {
    const { meat, removeMeat } = this.props;
    // const singleLink = `/Meats/${Meat.id}`;
    return (
      <div className="MeatCard col-3">
        <div className="card">
          <div className="card-body">
            <img src={meat.photoUrl} alt="" className="card-img-top" />
            <h5 className="card-title">{meat.name}</h5>
            {/* <Link className="btn btn-info" to={singleLink}>Single View</Link> */}
            <button className="btn btn-danger" onClick={() => removeMeat(meat.id)}>Delete the meat!</button>
            <p className="card-text">{meat.quantity}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MeatCard;
