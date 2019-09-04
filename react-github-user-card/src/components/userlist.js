import React from 'react';


class UserList extends React.Component{
    constructor(props){
    super(props);
    console.log('Users', props);

    }




render(){
    console.log('user followers', this.props.userData.login);
    return(
        <div>
          {this.props.followers.map(followers => (
          <div>
               key={followers.id} followers={followers}
        </div>))}
        </div>

    );
}


}


export default UserList;