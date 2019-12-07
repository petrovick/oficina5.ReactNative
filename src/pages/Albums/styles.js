import styled from 'styled-components/native';
import { metrics } from '../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: ${metrics.baseMargin * 2};
`;
export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
`;
