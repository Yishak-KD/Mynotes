const createStore = require('redux').createStore;
const combineReducers = require('redux').combineReducers;

// Define initial state
const countState = {
    count: 0,
}

const decoState = {
    deco: 20
}

// Define an action type
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// Define an action creator
function increment() {
    return {
        type: INCREMENT
    }
}

function decrement() {
    return {
        type: DECREMENT
    }
}

// Define an Icrement Reducer
function incrementReducer(state = countState, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 }
        default:
            return state
    }
}

// Define a Decrement Reducer
function decrementReducer(state = decoState, action) {
    switch (action.type) {
        case DECREMENT:
            return { ...state, deco: state.deco - 1 }
        default:
            return state
    }
}

// Create a store
const store = createStore(
    combineReducers({
        increment: incrementReducer,
        decrement: decrementReducer
    })
)

// Subscribe to state changes
store.subscribe(() => console.log(store.getState()))

// Dispatch an action
store.dispatch(increment()) // {Count: 1}
store.dispatch(increment()) // {Count: 2}
store.dispatch(increment()) // {Count: 3}
store.dispatch(increment()) // {Count: 4}
store.dispatch(increment()) // {Count: 5}
store.dispatch(decrement()) // {Count: 4}
store.dispatch(decrement()) // {Count: 3}
store.dispatch(decrement()) // {Count: 2}