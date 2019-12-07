import styled from 'styled-components/native';
import { metrics } from '../../styles';

export const Container = styled.View`
  margin-bottom: ${metrics.baseMargin};
  padding: 20px;
  border-radius: ${metrics.borderRadius};
  background: #fff;
  display: flex;
  flex-direction: row;
  background-color: transparent;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Info = styled.View`
  margin-left: ${metrics.baseMargin};
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
`;
