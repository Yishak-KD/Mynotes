import React, { useState } from 'react'
import { StyleSheet, css } from 'aphrodite'

function Form() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
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
                <label>Name:</label>
                <input type={'text'} name={'Name'} value={formState.name} onChange={handleInputChange} />
                <br />
                {/* Email Tag */}
                <label>Email:</label>
                <input type={'email'} name={'Email'} value={formState.email} onChange={handleInputChange} />
                <br />
                <label>Message:</label>
                <input type={'text'} name={'Message'} value={formState.message} onChange={handleInputChange} />
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