import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'SET_FIRST_NAME':
            return { ...state, firstName: action.payload }
        case 'SET_LAST_NAME':
            return { ...state, LastName: action.payload }
        case 'SET_AGE':
            return { ...state, age: action.payload }
        default:
            return state;
    }
}

function UserProfile() {
    const [state, dispatch] = useReducer(reducer, {
        firstName: '',
        LastName: '',
        age: null
    });

    const handleFirstNameChange = event => {
        dispatch({ type: 'SET_FIRST_NAME', payload: event.target.value })
    }

    const handleLastNameChange = event => {
        dispatch({ type: 'SET_LAST_NAME', payload: event.target.value })
    }

    const handleAgeChange = event => {
        dispatch({ type: 'SET_AGE', payload: event.target.value })
    }

    return (
        <div>
            <label>First Name:</label>
            <input type='text' value={state.firstName} onChange={handleFirstNameChange}></input>

            <label>Last Name:</label>
            <input type='text' value={state.lastName} onChange={handleLastNameChange}></input>

            <label>Age:</label>
            <input type='number' value={state.age} onChange={handleAgeChange}></input>
        </div>
    )
}

export default UserProfile;