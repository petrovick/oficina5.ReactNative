import React from 'react';
import PropTypes from 'prop-types';
import { Container, Info, Name, Email, Description } from './styles';

export default function Comment({ data }) {
  return (
    <Container>
      {data && (
        <Info>
          <Name>{data.name}</Name>
          <Email>{data.email}</Email>
          <Description>{data.body}</Description>
        </Info>
      )}
    </Container>
  );
}

Comment.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
