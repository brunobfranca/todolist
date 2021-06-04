import { combineReducers } from 'redux'

import tasks from './tasks/reducer'
import user from './user/reducer'

export default combineReducers({
    tasks,
    user,
})