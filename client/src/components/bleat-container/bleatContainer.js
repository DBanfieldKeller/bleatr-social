import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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