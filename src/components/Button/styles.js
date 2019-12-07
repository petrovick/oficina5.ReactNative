import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { metrics } from '../../styles';

export const Container = styled(RectButton)`
  height: 46px;
  background: #3b9eff;
  border-radius: ${metrics.borderRadius};

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
