

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case '@tasks/LOAD_REQUEST':
            return {
                ...state, loading: true , error: false
            };
        case '@tasks/LOAD_SUCESS':
            return {
                ...state, loading: false, error: false , data: action.payload.data
            }
        case '@tasks/ADD_TASK':
            return {
                ...state, data: [...state.data, action.payload.data]
            };
        case '@tasks/REMOVE_TASK':
            var task = action.payload.data
            return {
                ...state, data: [...state.data.filter(data => task.id != data.id)]
            };
        case '@tasks/UPDATE_TASK': {
            return {
                ...state,
            }
        }
        default:
            return state
    }
}

export default reducer