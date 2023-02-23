import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

function Form() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (event) => {
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
                    <input type={'text'} name={'Name'} value={formState.name} onChange={handleInputChange} />
                </label>

                <br />
                {/* Email Tag */}
                <label>Email:
                    <input type={'email'} name={'Email'} value={formState.email} onChange={handleInputChange} />
                </label>
                <br />
                {/* Message Tag */}
                <label>Message:
                    <input type={'text'} name={'Message'} value={formState.message} onChange={handleInputChange} />
                </label>
                <br />
                <button>Submit</button>

            </form>
        </>
    )
}

const styles = StyleSheet.create({
    h1: {
        color: "red",
        textAlign: 'center'
    }
})

export default Form