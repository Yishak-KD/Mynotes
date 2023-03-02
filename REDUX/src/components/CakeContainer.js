import React from 'react';
import { connect } from 'react-redux';
import './cakeContainer.css';
import buyCake from '../Redux/cakes/cakeActions';


function CakeContainer(props) {
    return (
        <div className='cake'>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

// Using the mapStateToProps and mapDispatchToProps
const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)