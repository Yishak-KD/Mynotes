import * as types from './counterType';

// Create an initial state
const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case types.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case types.RESET:
            return {
                ...state,
                counter: 0
            }
        default:
            return state
    }
}

export default counterReducer;