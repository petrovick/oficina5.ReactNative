import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ToastActionsCreators } from 'react-native-redux-toast';
import Background from '../../components/Background';

import { Container, Form, FormInput, SubmitButton } from './styles';
import api from '../../services/api';

export default function NewPost({ navigation }) {
  const [idPost, setIdPost] = useState();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const bodyRef = useRef();

  const dispatch = useDispatch();

  async function handleSubmit() {
    try {
      const { data } = await api.post('posts', {
        title,
        body,
        id: idPost,
      });
      if (data.id) {
        navigation.pop();
      }
    } catch (err) {
      const message =
        err &&
        err.response &&
        err.response.data &&
        err.response.data.messages &&
        err.response.data.messages.length > 0
          ? err.response.data.messages[0]
          : 'Não foi possível criar um novo post, tente novamente mais tarde.';
      dispatch(ToastActionsCreators.displayError(message));
      console.tron.log();
    }
  }

  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            value={title}
            icon="wrap-text"
            placeholder="Titulo"
            onChangeText={text => setTitle(text)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            autoFocus
            returnKeyType="next"
            onSubmitEditing={() => bodyRef.current.focus()}
          />
          <FormInput
            icon="wrap-text"
            value={body}
            placeholder="Descrição"
            onChangeText={text => setBody(text)}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            returnKeyType="send"
            ref={bodyRef}
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>Salvar</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
