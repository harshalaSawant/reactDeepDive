import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot}  from 'radium';
import styled from  'styled-components'

import Person from './Person/Person'


const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  border: 1px solid blue;
  font: inherit;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;
class App extends Component {

  state = {
      showPersons: false,
      persons: [
        { id:"erter", name: 'Hermione', age: 26 },
        { id:"sdf", name: 'Harry', age: 26 },
        { id:"hgjj", name: 'Ron', age: 26 }
      ]
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

  render() {
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                      click={() => this.deletePersonHandler(index)}
                      name={person.name}
                      age={person.age} 
                      key={person.id}
                      changed={(event) => this.nameChangeHandler(event, person.id)} />
           })
          }
        </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover']= {
      //   backgroundColor: 'salmon',
      //   color: 'black',
        
      // }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi I am a React App!</h1>
        <p className={classes.join(' ')}>Welcome to my first React App</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>
          Toggle Persons
        </StyledButton>

        {persons}

      </div>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React App!'));
}

export default App;