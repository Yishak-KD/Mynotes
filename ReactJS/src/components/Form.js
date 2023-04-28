import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

function Form() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = event => {
        // const { name, value } = event.target;
        const value = event.target.value;
        setFormState({
            ...formState,
            [event.target.name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    }

    return (
        <>
            <h1 className={css(styles.h1)}>Form</h1>
            <form onSubmit={handleSubmit}>
                {/* Name Tag */}
                <label>Name:
                    <input className={css(styles.input)} type={'text'} name={'name'} value={formState.name} onChange={handleInputChange} />
                </label>

                <br />
                {/* Email Tag */}
                <label>Email:
                    <input className={css(styles.input)} type={'email'} name={'email'} value={formState.email} onChange={handleInputChange} />
                </label>
                <br />
                {/* Message Tag */}
                <label>Message:
                    <textarea className={css(styles.input)} name='message' rows={'4'} cols={'50'} value={formState.message} onChange={handleInputChange}></textarea>
                </label>
                <br />
                <button className={css(styles.btn)}>Submit</button>
            </form>
        </>
    )
}

const styles = StyleSheet.create({
    h1: {
        color: "red",
        textAlign: 'center'
    },
    input: {
        border: '1px solid black'
    },
    btn: {
        color: 'white',
        backgroundColor: 'black',
        padding: '10px'
    }
})

export default Form