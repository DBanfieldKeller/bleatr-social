import React, { useState } from 'react';
import HomePage from '../home-page/homePage';

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