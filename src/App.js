import React, { Component } from 'react';

// component
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

// data 
import { robots } from './robots';

// css 
import './App.css';

class App extends Component {
  // using STATE
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: '',
    }
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => 
      response.json()
    ).then( users => 
      this.setState({ robots: users })
    );
  };

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value }); /* when you want to update the state */
    /* on try ( 1 ) */
    // const filteredRobots = this.state.robots.filter(robot => {
    //   return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    // })
  };

  render () {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    } else {      
      return (
        <div className="tc">
          <h1 className="f1"> RoboFriends </h1>
          <SearchBox searchChange={ this.onSearchChange }></SearchBox>
          { /* on try ( 1 ) */ }
          {/* <CardList robots={ this.state.robots }></CardList> */}
          <Scroll>
            <CardList robots={ filteredRobots }></CardList>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;