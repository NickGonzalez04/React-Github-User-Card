import React from 'react';
import UserCard from './usercard';


class UserList extends React.Component{
    constructor(){
    super();
    // this.state={
    //     followers: []
    // }
    // console.log('Users', this.props);

    }

// componentDidMount(){
//     fetch('https://api.github.com/users/NickGonzalez04/followers')
//     .then(res => {
//     console.log('myfollowers',res); this.setState({followers: res})
//     })
//     .catch(err => console.log('nope'));
//   }



render(){
    // console.log('user followers', this.props.followers.login);
    return(
        <div>
          {this.props.followers.map(followers => (
             <UserCard  key={followers.id} followers={followers} />
        ))}
        </div>

       );
   }


}


export default UserList;