import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Background from '../../components/Background';
import Comment from '../../components/Comment';

import { Container, Title, List } from './styles';

function Comments({ navigation }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const valor = navigation.getParam('postId', '0');
    LoadComments(valor);
  }, [navigation]);

  async function LoadComments(id) {
    if (Number(id)) {
      const response = await api.get(`posts/${id}/comments`);
      setComments(response.data);
    }
  }

  return (
    <Background>
      <Container>
        <Title>Comments</Title>
        <List
          data={comments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Comment
              style={{ height: 70 }}
              data={item}
              onClick={() => handleCancel(item.id)}
            />
          )}
        />
      </Container>
    </Background>
  );
}

export default Comments;
