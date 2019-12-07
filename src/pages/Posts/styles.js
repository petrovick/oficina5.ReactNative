import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { SwipeableFlatList } from 'react-native-swipeable-flat-list';
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
export const List = styled(SwipeableFlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  font-size: 20px;
  background-color: #7159c1;
  font-weight: bold;
`;

export const CenterButtons = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  align-self: center;
  height: 70px;
  flex-direction: row;
`;

export const DeleteButton = styled(TouchableOpacity)`
  margin-left: ${metrics.baseMargin};

  align-self: center;
  width: 40px;
`;

export const DetailButton = styled(TouchableOpacity)`
  margin-left: ${metrics.baseMargin};
  align-self: center;
`;

export const AddButton = styled(TouchableOpacity)`
  margin-left: ${metrics.baseMargin};

  align-self: flex-end;
  width: 40px;
`;
