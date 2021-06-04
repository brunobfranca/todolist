import {createStore , applyMiddleware , Store} from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSaga'

const sagaMiddeware = createSagaMiddleware()

const store = createStore(rootReducer , applyMiddleware(sagaMiddeware))

sagaMiddeware.run(rootSaga)

export default store