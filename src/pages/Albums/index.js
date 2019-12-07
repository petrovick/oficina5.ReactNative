import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
import Background from '../../components/Background';
import Album from '../../components/Album';
import { Container, Title, List } from './styles';

function Albums({ navigation }) {
  const [albums, setAlbums] = useState([]);

  async function loadAlbums(userId) {
    const response = await api.get(`users/${userId}/albums`);
    setAlbums(response.data);
  }

  useEffect(() => {
    const userId = navigation.getParam('userId', 0);
    loadAlbums(userId);
  }, [navigation]);

  return (
    <Background>
      <Container>
        <Title>Albums</Title>
        <List
          data={albums}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Album data={item} />}
        />
      </Container>
    </Background>
  );
}
Albums.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default Albums;
