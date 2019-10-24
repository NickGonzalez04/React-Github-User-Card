import React from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';


const UserCard= () => (
  
<Card>
  <Image src={this.props.followers.avatar_url}/>
  <Card.Content>
     <Card.Header>{this.props.followers.login}</Card.Header>
     {/* <Card.Description>Location: {this.props.location || "Unknown"}</Card.Description> */}
    </Card.Content>
    <Card.Content extra>
    <a>
      <Icon name="user"/>
      {/* {this.props.followers} Followers */}
    </a>
  </Card.Content>

</Card>
   
)

export default UserCard;