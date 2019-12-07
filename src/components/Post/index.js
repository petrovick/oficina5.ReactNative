import React from 'react';
import PropTypes from 'prop-types';
import { Container, Left, Info, Name, Title, Description } from './styles';

export default function Post({ data, handleAlbum }) {
  return (
    <Container>
      {data && (
        <Left>
          <Info>
            <Name onPress={() => handleAlbum(data.User.idUser)}>
              {data.User.name}
            </Name>
            <Title>{data.title}</Title>
            <Description>{data.body}</Description>
          </Info>
        </Left>
      )}
    </Container>
  );
}

Post.propTypes = {
  handleAlbum: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    User: PropTypes.shape({
      name: PropTypes.string.isRequired,
      idUser: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
