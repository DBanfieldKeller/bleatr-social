import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css'

function Bleat() {
    return (
        <Card className='bleat'>
            <Card.Header className='bleat-header'>
                <div className='bleat-header-row'>
                    <div className='header-item' id='username'>Username</div>
                    <div className='header-item' id='num-of-replies'># of Replies</div>
                </div>
                <div className='bleat-header-row'>
                    <p>createdAt</p>
                    <Button variant='primary'>Reply 💬</Button>
                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default Bleat;