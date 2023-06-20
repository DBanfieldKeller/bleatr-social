import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import BleatContainer from '../bleat-container/bleatContainer';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './style.css'

function HomePage(props) {

    return (
        <div>
            <div className='body'>
                {props.isLoggedIn
                    ? <Button variant="primary" size="lg" >New Bleat ➕</Button>
                    : <Button variant="primary" size="lg" className='invisible' >
                        New Bleat ➕
                    </Button>}



                <DropdownButton id="dropdown-basic-button" title="# of Bleats" size='lg'>
                    <Dropdown.Item href="#/action-1">25</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">50</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">100</Dropdown.Item>
                </DropdownButton>
            </div>
            <BleatContainer
            isLoggedIn={props.isLoggedIn}
            />
        </div>
    )
}

export default HomePage