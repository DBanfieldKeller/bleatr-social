import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css'

function Bleat(props) {
    return (
        <Card className='bleat'>
            <Card.Header className='bleat-header'>
                <div className='bleat-header-row'>
                    <div className='header-item' id='username'>Username</div>
                    <div className='header-item' id='num-of-replies'># of Replies</div>
                </div>
                <div className='bleat-header-row'>
                    <p>createdAt</p>
                    {props.isLoggedIn
                    ? <Button variant='primary'>Reply 💬</Button>
                    : <div>Login to Reply</div>}
                   
                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Card.Body>
            <Card.Footer className='bleat-footer'>
                <Button variant='primary'>Delete 🗑️</Button>
            </Card.Footer>
        </Card>
    )
};

export default Bleat;