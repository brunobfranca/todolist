import {all , takeEvery } from 'redux-saga/effects'

import { loadUser } from './user/sagas'
import { loadTasks , addTask , updateTask } from './tasks/sagas'

export default function* rootSaga() {
    return yield all([
        takeEvery('@user/LOAD_REQUEST', loadUser),
        takeEvery('@tasks/LOAD_REQUEST', loadTasks),
        takeEvery('@tasks/ADD_TASK', addTask),
        takeEvery('@tasks/UPDATE_TASK', updateTask),
    ]);
}