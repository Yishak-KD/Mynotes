const createStore = require('redux').createStore;
const combineReducers = require('redux').combineReducers;

// Define initial state for burger
const burgerState = {
    burger: 10,
}

// Define initial state for pizza
const pizzaState = {
    pizza: 20
}

// Define an action type
const BUY_BURGER = 'BUY_CAKE'
const BUY_PIZZA = 'BUY_PIZZA'

// Define an action creator for a Burger
function burgerAction() {
    return {
        type: BUY_BURGER
    }
}

// Define an action for a pizza
function pizzaAction() {
    return {
        type: BUY_PIZZA
    }
}

// Define a Burger reducer
function burgerReducer(state = burgerState, action) {
    switch (action.type) {
        case BUY_BURGER:
            return { ...state, burger: state.burger - 1 }
        default:
            return state
    }
}

// Define a Pizza Reducer
function pizzaReducer(state = pizzaState, action) {
    switch (action.type) {
        case BUY_PIZZA:
            return { ...state, pizza: state.pizza - 1 }
        default:
            return state
    }
}

// Create a store
const store = createStore(
    combineReducers({
        burger: burgerReducer,
        pizza: pizzaReducer
    })
)

// Subscribe to state changes
store.subscribe(() => console.log(store.getState()))

// Dispatch an action
store.dispatch(burgerAction()) // {Count: 1}
store.dispatch(burgerAction()) // {Count: 2}
store.dispatch(burgerAction()) // {Count: 3}
store.dispatch(pizzaAction()) // {Count: 4}
store.dispatch(pizzaAction()) // {Count: 5}
store.dispatch(pizzaAction()) // {Count: 4}
store.dispatch(pizzaAction()) // {Count: 2}