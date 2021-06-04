import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Tasks from './pages/Tasks';
import Users from './pages/Users/'
import Home from './pages/Home'
import Chat from './pages/Chat'
import { Provider } from 'react-redux'
import store from './store'

// import { Container } from './styles';

const Stack = createStackNavigator()


const src = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator 
            initialRouteName={Users}
          >
            <Stack.Screen 
              name='Users'
              component={Users}
              options={({ navigation }) => {
                return {
                  headerShown: false
                }
              }}
            />
            <Stack.Screen 
              name='Home'
              component={Home}
              options={({ navigation }) => {
                return {
                  title: 'Home',
                }
              }}
            />
            <Stack.Screen 
              name='tasks'
              component={Tasks}
              options={({ navigation }) => {
                return {
                  title: 'Tasks',
                }
              }}
            />
            <Stack.Screen 
              name='chats'
              component={Chat}
              options={({ navigation }) => {
                return {
                  title: 'Chat',
                }
              }}
            />
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default src;