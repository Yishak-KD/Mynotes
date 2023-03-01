const createStore = require('redux').createStore;

// Define an initial state value
const initialState = {
    loading: false,
    users: [],
    error: ''
}

// Define an action type

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

// Create action creators for the fetch user request
const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

// Create action creators for the fetch user success
const fetchUserSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

// Create action creators for the fetch user error
const fetchUserError = error => {
    return {
        type: FETCH_USERS_REQUEST,
        payload: error
    }
}

// Define reducer functions
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }
}


// Create store
const store = createStore(reducer);