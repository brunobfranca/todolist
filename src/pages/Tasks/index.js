import React, { useEffect, useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Title, ViewAdd, InputAdd, AddButton, TextButton, CardList, CardTask, CardText, ButtonTrash } from './styles';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as TasksActions from '../../store/ducks/tasks/actions'

import firebase from '../../config/Firebase'

const dbref = firebase.database()
const Tasks = ({ loadRequest, addTask, tasks, updateTask }) => {

    const [taskDescription, setTaskDescription] = useState('')

    useEffect(() => {
        try {
            dbref.ref('tasks').on('value', res => {
                loadRequest()
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    function _addTask() {
        if (taskDescription.length > 0) {
            addTask(taskDescription)
            setTaskDescription('')
        } else {
            alert('Digite uma descrição para a tarefa!')
        }

    }
    function remove(item) {
        Alert.alert(
            'Delete',
            'Confirme a Exclusão',
            [
                {
                    text: "cancelar",
                    onPress: () => { },
                    style: "cancel"
                },
                {
                    text:
                        "confirmar",
                    onPress: () =>
                        dbref.ref('tasks/' + item.id)
                            .remove()
                            .then(res => {
                                Alert.alert('Tarefa Apagada!!')
                            }).catch(err => {
                                Alert.alert('Erro ao apagar Tarefa!')
                            })
                }
            ]
        );
    }
    return <Container>
        <ViewAdd>
            <InputAdd
                onChangeText={setTaskDescription}
                placeholder='new task'
                value={taskDescription}
            />
            <AddButton
                onPress={() => _addTask()}>
                <TextButton>+ ADD</TextButton>
            </AddButton>
        </ViewAdd>
        <Title> A Fazer</Title>
        <CardList
            data={tasks.filter(task => task.done == false)}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => updateTask(item)}
                >
                    <CardTask>
                        <CardText>
                            {item.description}
                        </CardText>
                        <ButtonTrash
                            onPress={() => remove(item)}
                        >
                            <Icon
                                name='trash'
                                size={25}
                            />
                        </ButtonTrash>
                    </CardTask>
                </TouchableOpacity>
            )}
        />
        <Title> Concluído</Title>
        <CardList
            data={tasks.filter(task => task.done == true)}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <CardTask>
                    <CardText>
                        {item.description}
                    </CardText>
                    <ButtonTrash
                        onPress={() => remove(item)}
                    >
                        <Icon
                            name='trash'
                            size={25}
                        />
                    </ButtonTrash>
                </CardTask>
            )}
        />
    </Container>;
}

const mapStateToProps = (state) => ({
    tasks: state.tasks.data,
})

const mapDispatchToProps = (dispatch) => bindActionCreators(TasksActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Tasks);

