import {all, takeLatest, call, put} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage'
import { setUser } from './actions';


export function* loadUser() {
  try {
    const t = async () => {
      return await AsyncStorage.getItem('user')
    }
    const data = yield call(t)
    yield put(setUser(data))
  } catch (error) {
    console.log(error)
  }

}


