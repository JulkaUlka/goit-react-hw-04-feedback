import PropTypes from 'prop-types';
import { Title } from './Section.styled.jsx';

export function Section({ title }) {
  return <Title>{title}</Title>;
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
