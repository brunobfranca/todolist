import { all, takeLatest, call, put } from 'redux-saga/effects';
import firebase from '../../../config/Firebase'
import { loadSucess, _addTask } from './actions';

const dbRef = firebase.default.database()

export function* loadTasks() {
  try {
    const response = async () => await dbRef.ref('tasks').get()
    const res = yield call(response)
    const data = []
    res.forEach(r => {
      data.push(r.toJSON())
    })
    yield put(loadSucess(data))
  } catch (error) {
    console.log(error)
  }
}
export function* addTask({ payload }) {
  try {
    let id = Math.floor(new Date())
    dbRef.ref('tasks/' + id).set({
      id: id,
      description: payload.data,
      done: false
    })
  } catch (error) {
    console.log(error)
  }
}
export function* updateTask ({payload}){
  try {
    const task = {
      id: payload.data.id,
      description: payload.data.description,
      done: true
    }
    dbRef.ref('tasks/' + task.id).set(task)
  } catch (error) {
    console.log(error)
  }
}
