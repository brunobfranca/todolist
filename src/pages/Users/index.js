import React, { useEffect , useState } from 'react';
import { Button } from 'react-native';
import { Container, Input , Title } from './styles';
import AsyncStorage from '@react-native-community/async-storage'
import OneSignal from 'react-native-onesignal'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UserActions from '../../store/ducks/user/actions'

// d3df45a7-e337-4178-b7fe-d58e081a04c0

const Users = ({navigation , loadRequest , user , setUser}) => {

    const [name , setName ] = useState('')

    useEffect(()=>{
        loadRequest()
        if(user){ 
            setUser(user)
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
              });
        }
    },[user])
    async function handlePress() {
        const _id = Math.random().toString(36).substring(7)
        const user = { _id, name }
        await AsyncStorage.setItem('user', JSON.stringify(user))
        setUser(user)
    }
    return <Container >
        <Title>To Do List</Title>
        <Input placeholder="Digite seu nome" value={name} onChangeText={setName} />
        <Button onPress={handlePress} title="Entrar" />
    </Container>
}
const mapStateToProps = (state) => ({
    user : state.user.data
})

const mapDispatchToProps = (Dispatch) => bindActionCreators( UserActions , Dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Users);