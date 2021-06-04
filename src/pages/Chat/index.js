// @refresh reset
import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat'
import { Container } from './styles';

import { connect } from 'react-redux'

import firebase from '../../config/Firebase'

const dbRef = firebase.default.database()

const Chat = ({ user }) => {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        dbRef.ref('chats')
            .on('child_added', snapshot => {
                appendMessages({
                    ...snapshot.toJSON(),
                    createdAt: snapshot.toJSON().createdAt
                })
            })
    }, [])

    const appendMessages = useCallback((messages) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages,
                messages))
    }, [messages])

    function onSend(messages) {
        let message = messages[0]
        dbRef.ref('chats').push({
            ...message,
            createdAt: message.createdAt.toJSON()
        })
    }
    return <Container>
        <GiftedChat
            messages={messages}
            renderUsernameOnMessage
            placeholder='Digite sua mensagem...'
            user={JSON.parse(user)}
            onSend={messages => onSend(messages)} />
    </Container>;
}

const mapStateToProps = (state) => ({
    user: state.user.data
})

export default connect(mapStateToProps)(Chat);