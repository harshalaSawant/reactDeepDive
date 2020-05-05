import React, { Component } from 'react';
import './App.css';
import classes from './App.css'

import Persons from '../Persons/Persons'
import Cockpit from '../Cockpit/Cockpit'
import withClass from '../hoc/WithClass'
import Aux from '../hoc/Auxiliary'
import AuthContext from '../Context/auth-context'

class App extends Component {

  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  static getDerivedStateFromProps(props, state) {
		console.log("[App.js] getDerivedStateFromProps ", props);
    return state;
  }
  componentDidMount() {
		console.log("[App.js] componentDidMount ");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate: ", nextProps, nextState);
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate: ");
  }
  state = {
      showPersons: false,
      persons: [
        { id:"erter", name: 'Hermione', age: 26 },
        { id:"sdf", name: 'Harry', age: 26 },
        { id:"hgjj", name: 'Ron', age: 26 }
      ],
      showCockpit: true,
      authenticateUser: false
    }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons =  [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  toggleCockpit = () => {
    this.setState({
      showCockpit: !this.state.showCockpit
    });
  }

  loginhandler = () => {
    this.setState({
      authenticateUser: true
    })
  }
  render() {
    console.log("[App.js] render");
    let persons = null;
    

    if(this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            isAuthenticated={this.state.authenticateUser} />; 
    }
    return (
      // <div className={classes.App}>
      <Aux>
        <button onClick={this.toggleCockpit}>Remove Cockpit</button>
        <AuthContext.Provider value={{authenticated: this.state.authenticateUser, login: this.loginhandler}}>
        {
          this.state.showCockpit === true ? 
          <Cockpit 
          clicked={this.togglePersonHandler}
          personsLength={this.state.persons.length}
          showPersons={this.state.showPersons} /> : null
        }
        {persons}
        </AuthContext.Provider>
      </Aux>
        
      // </div>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React App!'));
}

export default withClass(App, classes.App);