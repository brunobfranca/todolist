import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'

import { Container, Button } from './styles';

const Home = (props) => {
    return <Container>
        <Button
            onPress={() =>
                props.navigation.navigate('tasks')}
        >
            <Icon
                name='tasks'
                color='#000'
                size={75}
            />
            <Text>
                tasks
            </Text>
        </Button>
        <Button
            onPress={() =>
                props.navigation.navigate('chats')}
        >
            <Entypo
                name='chat'
                color='#000'
                size={75}
            />
            <Text>
                chat
            </Text>

        </Button>
    </Container>;
}

export default Home;