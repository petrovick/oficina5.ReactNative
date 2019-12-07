import React from 'react';
import PropTypes from 'prop-types';
import { Container, Left, Info, Name } from './styles';

export default function Album({ data }) {
  return (
    <Container>
      <Left>
        <Info>
          <Name>{data.title}</Name>
        </Info>
      </Left>
    </Container>
  );
}

Album.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
