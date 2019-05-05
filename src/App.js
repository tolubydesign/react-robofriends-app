import React, { Component } from 'react';

// component
import CardList from './CardList';
import SearchBox from './SearchBox';

// data 
import { robots } from './robots';

// css 
import './App.css';

class App extends Component {
  // using STATE
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: '',
    }
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
    return (
      <div className="tc">
        <h1 className="f1"> RoboFriends </h1>
        <SearchBox searchChange={ this.onSearchChange }></SearchBox>
        { /* on try ( 1 ) */ }
        {/* <CardList robots={ this.state.robots }></CardList> */}
        <CardList robots={ filteredRobots }></CardList>
      </div>
    );
  }
}

export default App;