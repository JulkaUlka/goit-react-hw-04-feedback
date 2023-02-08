import PropTypes from 'prop-types';
import { Text } from './Notification.styled.jsx';

export function Notification({ message }) {
  return <Text>{message}</Text>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
