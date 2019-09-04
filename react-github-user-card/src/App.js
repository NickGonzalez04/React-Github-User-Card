import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './components/userlist.js';
import UserCard from './components/usercard.js';



class App extends React.Component{
    constructor(){
        super();
        this.state={
          userData: [],
          followers: []
        }
    }

    componentDidMount(){
      fetch('https://api.github.com/users/NickGonzalez04')
          .then(res => res.json())
          .then(res => {
          console.log(res); this.setState({userData: res})
          })
          .catch(err => console.log('noooo'));


          fetch('https://api.github.com/users/NickGonzalez04/followers')
          .then(res => res.json())
          .then(res => {
          console.log(res); this.setState({followers: res})
          })
          .catch(err => console.log('noooo'));
        }






    render(){
      return(
            <div className="App">
              <h2>GitHub UserCard</h2>
              <UserList userData={this.state.userData} followers={this.state.followers}/>
              <UserCard userData={this.state.userData}/>
            </div>

      );
};

}

export default App;
