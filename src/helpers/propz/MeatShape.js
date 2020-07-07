import PropTypes from 'prop-types';

const meatShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  expDate: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  photoUrl: PropTypes.string.isRequired,
  raffleUid: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  meatTypeId: PropTypes.string.isRequired,
  isAvailable: PropTypes.bool.isRequired,
});

export default { meatShape };
