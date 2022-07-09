import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap'
import userPlaceholder from '../../assets/userplaceholder.png';

function PresentationCard({ user, clickEvent }) {
  return (
    <div>
      <Card
        onClick={()=>{clickEvent(user.id)}}
        body
        inverse
        style={{
          backgroundColor: '#094f6d',
          borderColor: '#333',
          margin: '8px 0',
          cursor: 'pointer'
        }}
      >
        <img src={user.profilePicture?? userPlaceholder} className="img-fluid" id="user-logo-chat" />
        <CardTitle tag="h5">
          {user.nome}

        </CardTitle>
        <CardText>
          {user.email}
        </CardText>
        <Button onClick={()=>{clickEvent(user.id)}}>
          Chat
        </Button>
      </Card>
    </div>
  )
}

export { PresentationCard }