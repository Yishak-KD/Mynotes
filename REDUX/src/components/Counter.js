import React from 'react'
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

// The Counter component is designed to be a reusable component that can be used in different parts of the application. By using render props, we can allow the parent component to customize the behavior of the Counter component by passing different parameters and functions.

// In this case, we pass three functions, increment and decrement, reset to the Counter component as props.These functions dispatch Redux actions to update the counter state.

// We could have used another method, such as passing the functions directly to the connect() function from the react - redux library, or using the useDispatch() hook from the react - redux library to dispatch the actions directly from the Counter component.

// However, using render props provides more flexibility and allows the parent component to control the behavior of the Counter component in a more fine - grained way.It also makes it easier to test the Counter component in isolation, as we can mock the functions passed as props and test their behavior independently of the Redux store.

function Counter({ counter, increment, decrement, reset }) {
    return (
        <div className={css(styles.counter)}>
            Count: {counter}
            <br />
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = dispatch => ({
    incr: () => dispatch({ type: 'INCREMENT' }),
    decr: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' })
});

const styles = StyleSheet.create({
    counter: {
        color: 'red',
        textAlign: 'center',
        fontSize: '25px'
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)