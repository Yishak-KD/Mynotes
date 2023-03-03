import React from 'react'
import { StyleSheet, css } from 'aphrodite';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../Redux/counter/counterActions'

// Here we use the useSelector and useDispatch hooks from the react-redux library. We use this to avoid passing props to the component.

// In this case we use the 'useSelector' hook from 'react-redux' library to get the counter value from the Redux store and the 'useDispatch' hook to dispatch the 'increment', 'decrement' and 'reset' actions. 

function Count() {
    const count = useSelector(state => state.counter)
    const dispatch = useDispatch();
    return (
        <div className={css(styles.counter)}>
            Count: {count}
            <br />
            <button onClick={() => dispatch(actions.increment())}>+</button>
            <button onClick={() => dispatch(actions.decrement())}>-</button>
            <button onClick={() => dispatch(actions.reset())}>reset</button>
        </div>
    )
}

const styles = StyleSheet.create({
    counter: {
        color: 'red',
        textAlign: 'center',
        fontSize: '25px'
    }
})

export default Count;