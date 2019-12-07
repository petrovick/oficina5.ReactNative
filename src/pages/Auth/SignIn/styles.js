import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { metrics } from '../../../styles';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  margin-top: 50px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 30,
  },
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: ${metrics.baseMargin};
`;

export const SubmitButton = styled(Button)`
  margin-top: ${metrics.baseMargin / 2};
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: ${metrics.baseMargin};
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
