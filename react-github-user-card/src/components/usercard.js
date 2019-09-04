import React from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';


const UserCard = (props)=>(

<Card>
  <Image src={props.userData.avatar_url}/>
  <Card.Content>
     <Card.Header>{props.userData.login}</Card.Header>
     <Card.Description>Location: {props.userData.location || "Unknown"}</Card.Description>
    </Card.Content>
    <Card.Content extra>
    <a>
      <Icon name="user"/>
      {props.userData.followers} Followers
    </a>
  </Card.Content>
</Card>
)

export default UserCard;