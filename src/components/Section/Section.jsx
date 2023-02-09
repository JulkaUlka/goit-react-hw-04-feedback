import PropTypes from 'prop-types';

import { Block, Title } from './Section.styled.jsx';

export function Section({ title, children }) {
  return (
    <Block>
      <Title>{title}</Title>
      {children}
    </Block>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
