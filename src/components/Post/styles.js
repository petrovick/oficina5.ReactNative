import styled from 'styled-components/native';
import { metrics } from '../../styles';

export const Container = styled.View`
  margin-top: ${metrics.baseMargin}
  border-radius: ${metrics.borderRadius};
  background-color: #333;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  opacity: ${props => (props.past ? 0.6 : 1)};
  background-color: transparent;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Right = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const Info = styled.View`
  margin-left: ${metrics.baseMargin};
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #3349ff;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #333;
`;

export const Description = styled.Text`
  font-weight: normal;
  font-size: 10px;
  color: #333;
`;
