import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import api from '../../services/api';
import Background from '../../components/Background';
import Post from '../../components/Post';

import {
  Container,
  Title,
  List,
  CenterButtons,
  DeleteButton,
  DetailButton,
  AddButton,
} from './styles';

function Posts({ isFocused, navigation }) {
  const [posts, setPosts] = useState([]);

  async function loadPosts() {
    const response = await api.get('posts');
    setPosts(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadPosts();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    const response = await api.delete(`posts/${id}`);
    setPosts(posts.filter(post => post.id !== id));
  }

  async function handleDetail(post) {
    navigation.navigate('PostDetail', { post });
  }

  async function handleComments(id) {
    console.tron.log(id);
    navigation.navigate('Comments', { postId: id });
  }

  async function addPost() {
    navigation.navigate('NewPost');
  }

  async function handleAlbum(idUser) {
    console.tron.log('Album clicked');
    navigation.navigate('Albums', { userId: idUser });
  }

  return (
    <Background>
      <Container>
        <Title>Posts</Title>

        <AddButton onPress={() => addPost()}>
          <Icon name="add" size={20} color="#fff" />
        </AddButton>
        <List
          data={posts}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Post
              handleAlbum={handleAlbum}
              style={{ height: 70 }}
              data={item}
              onClick={() => handleCancel(item.id)}
            />
          )}
          renderLeft={({ item }) => (
            <CenterButtons style={{ width: 40 }}>
              <DeleteButton onPress={() => handleCancel(item.id)}>
                <Icon name="delete-forever" size={20} color="#f64c75" />
              </DeleteButton>
            </CenterButtons>
          )}
          renderRight={({ item }) => (
            <CenterButtons style={{ width: 80 }}>
              <DetailButton onPress={() => handleComments(item.id)}>
                <Icon name="comment" size={20} color="#f64c75" />
              </DetailButton>

              <DetailButton onPress={() => handleDetail(item)}>
                <Icon name="chevron-right" size={20} color="#f64c75" />
              </DetailButton>
            </CenterButtons>
          )}
        />
      </Container>
    </Background>
  );
}

Posts.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigationFocus(Posts);
