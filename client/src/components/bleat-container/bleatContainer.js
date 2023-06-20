import React from 'react';
import Bleat from '../bleat/bleat';
import './style.css';


function BleatContainer(props) {
    return (
        <div className='bleat-container'>
            <Bleat
                isLoggedIn={props.isLoggedIn} />
            <Bleat
                isLoggedIn={props.isLoggedIn} />
            <Bleat
                isLoggedIn={props.isLoggedIn} />
        </div>
    )
};

export default BleatContainer