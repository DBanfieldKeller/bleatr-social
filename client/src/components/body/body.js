import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import BleatContainer from '../bleat-container/bleatContainer';
import HomePage from '../home-page/homePage';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import './style.css'

function Body(props) {

    const [currentPage, setCurrentPage] = useState('homepage')

    let display

    switch (currentPage) {
        case 'homepage':
            display = <HomePage
                isLoggedIn={props.isLoggedIn} />
            break;
        default:
            display = <HomePage
                isLoggedIn={props.isLoggedIn} />
    }


    return (
        <div>
            {display}
        </div>
    )
}

export default Body