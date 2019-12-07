import React, { useState, useEffect } from 'react';
import Background from '../../../components/Background';
import { Container, Title, Info, Name, PostTitle, Description } from './styles';

export default function PostDetail({ navigation }) {
  const [post, setPost] = useState({});
  useEffect(() => {
    const postParam = navigation.getParam('post', undefined);
    setPost(postParam);
    console.tron.log(postParam);
  }, [navigation]);
  return (
    <Background>
      <Container>
        <Title>Post</Title>
        {post && (
          <Info>
            {post.User && <Name>{post.User.name}</Name>}
            <PostTitle>{post.title}</PostTitle>
            <Description>{post.body}</Description>
          </Info>
        )}
      </Container>
    </Background>
  );
}
