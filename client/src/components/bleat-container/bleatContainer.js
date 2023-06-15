import React from 'react';
import Bleat from '../bleat/bleat';
import './style.css';


function BleatContainer(props) {
    return (
        <div className='bleat-container'>
            <Bleat
            isLoggedIn = {props.isLoggedIn}/>
            <Bleat/>
            <Bleat/>
        </div>
    )
};

export default BleatContainer