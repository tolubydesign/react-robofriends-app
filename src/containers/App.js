import React, { Component } from 'react';
import { connect } from 'react-redux'

// component
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

// data 
// import { robots } from '../robots';

// css 
import './App.css';

// actions
import { setSearchField, requestRobots } from '../actions';

/* maps out the props */
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    // searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  }
}
/* watches for props to dispatch */
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  }
}

class App extends Component {
//   // using STATE
//   constructor() {
//     super()
//     this.state = {
//       robots: [],
//       // searchfield: '',
//     }
//   };

  componentDidMount() {
    // console.log(this.props.store.getState())
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response =>
    //     response.json()
    //   ).then(users => {
    //     this.setState({ robots: users })
    //   });
    this.props.onRequestRobots();
  };

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value }); /* when you want to update the state */
  //   /* on try ( 1 ) */
  //   // const filteredRobots = this.state.robots.filter(robot => {
  //   //   return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  //   // })
  // };

  render() {
    // const { robots, searchfield } = this.state;
    // const { robots } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    // return !robots.length ?
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className="tc">
          <h1 className="f1"> RoboFriends </h1>
          <SearchBox searchChange={onSearchChange}></SearchBox>
          { /* on try ( 1 ) */}
          {/* <CardList robots={ this.state.robots }></CardList> */}
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}></CardList>
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// connect is a higher order function
// ie it returns another function