import React from 'react';
import Bleat from '../bleat/bleat';
import './style.css';


function BleatContainer() {
    return (
        <div className='bleat-container'>
            <Bleat/>
            <Bleat/>
            <Bleat/>
        </div>
    )
};

export default BleatContainer