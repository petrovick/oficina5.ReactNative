import styled from 'styled-components/native';
import { metrics } from '../../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Right = styled.View`
  background: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: ${metrics.baseMargin * 2};
`;

export const Info = styled.View`
  margin-left: ${metrics.baseMargin};
`;

export const Name = styled.Text`
  font-weight: bold;

  font-size: 14px;
  color: #fff;
`;

export const PostTitle = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
`;

export const Description = styled.Text`
  font-weight: bold;
  font-size: 10px;
  color: #fff;
`;
