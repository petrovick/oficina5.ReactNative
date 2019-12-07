import styled from 'styled-components/native';
import { metrics } from '../../styles';

export const Container = styled.View`
  margin-bottom: ${metrics.baseMargin};
  border-radius: ${metrics.borderRadius};
  background: #fff;
  display: flex;
  flex-direction: row;
  background-color: transparent;
`;

export const Info = styled.View`
  margin-left: ${metrics.baseMargin};
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
`;

export const Email = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
`;

export const Description = styled.Text`
  font-weight: normal;
  font-size: 10px;
  color: #fff;
`;
