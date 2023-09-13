import PropTypes from 'prop-types';
const cityTypes = PropTypes.arrayOf(
 PropTypes.shape({
  cityName: PropTypes.string,
  country: PropTypes.string,
  emoji: PropTypes.string,
  date: PropTypes.string,
  notes: PropTypes.string,
  position: PropTypes.shape({
   lat: PropTypes.number,
   lng: PropTypes.number,
  }),
  id: PropTypes.number,
 })
);

export { cityTypes };
