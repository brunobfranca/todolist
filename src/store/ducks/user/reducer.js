

const INITIAL_STATE = {
    data: null,
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case '@user/LOAD_REQUEST':
            return {
                ...state,
            };
        case '@user/READ_USER' : {
            return {
                ...state, data: action.payload.data
            }
        }
        case '@user/SET_USER' : {
            return {
                ...state, data: action.payload.data
            }
        }
        default:
            return state
    }
}

export default reducer