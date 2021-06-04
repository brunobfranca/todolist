import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #dcdcdc
  flex: 1
`;
export const Title = styled.Text`
    text-align: center; 
    font-size: 30px; 
    font-weight: bold;
    margin: 10px; 
`;
export const ViewAdd = styled.View`
    flex-direction: row; 
    justify-content: space-between;
    margin: 15px
`;
export const InputAdd = styled.TextInput`
    border-bottom-width: 0.7px;
    height: 50px;
    width: 80%
`;
export const AddButton = styled.TouchableOpacity`
    backgroundColor: #03a0ff;
    width: 15%
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;
export const TextButton = styled.Text`
    color: #fff;
`;
export const CardList = styled.FlatList`
`;
export const CardTask = styled.View`
    flex-direction: row;
    height: 75px;
    margin-bottom: 15px;
    margin-horizontal: 15px
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
    background-color: #fff; 
`;
export const CardText = styled.Text`
    font-size: 25px;
    margin-left: 15px
`;
export const ButtonTrash = styled.TouchableOpacity`
    margin: 10px
`;

