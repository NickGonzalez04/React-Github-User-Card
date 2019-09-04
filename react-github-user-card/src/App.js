import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './components/userlist.js';
// import UserCard from './components/usercard.js';



class App extends React.Component{
       state={
          userData: [],
          followers: []
        }
    

    componentDidMount(){
      fetch('https://api.github.com/users/NickGonzalez04')
          .then(res => res.json())
          .then(res => {
          console.log(res); this.setState({userData: res.data})
          })
          .catch(err => console.log('nope'));


          fetch('https://api.github.com/users/NickGonzalez04/followers')
          .then(res => res.json())
          .then(res => {
          console.log(res); this.setState({followers: res.data})
          })
          .catch(err => console.log('nope'));
        }


    render(){
      return(
            <div className="App">
              <h2>GitHub UserCard</h2>
              




              <UserList followers={this.state.followers}/>
              {/* <UserCard userData={this.state.userData} followers={this.state.followers}/> */}
            </div>

      );
};

}

export default App;
