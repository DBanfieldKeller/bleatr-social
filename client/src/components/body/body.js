import React from 'react';
import Button from 'react-bootstrap/Button';
import BleatContainer from '../bleat-container/bleatContainer';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './style.css'

function Body() {
    return (
        <div>
            <div className='body'>
                <Button variant="primary" size="lg">
                    New Bleat ➕
                </Button>


                <DropdownButton id="dropdown-basic-button" title="# of Bleats" size='lg'>
                    <Dropdown.Item href="#/action-1">25</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">50</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">100</Dropdown.Item>
                </DropdownButton>
            </div>
            <BleatContainer className='bleatContainer'></BleatContainer>
        </div>
    )
}

export default Body