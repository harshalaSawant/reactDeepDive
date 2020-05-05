import React, { PureComponent } from 'react';

import Person from './Person/Person';
import AuthContext from '../Context/auth-context'

class Persons extends PureComponent {

	static getDerivedStatefromProps(props, state){
		console.log("[Persons.js] getDerivedStatefromProps ", props)
		return state;
	}
	
	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log("[Persons.js] shouldComponentUpdate ")
	// 	if(nextProps.persons !== this.props.persons) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log("[Persons.js] getSnapshotBeforeUpdate  ");
		return null;
	}

	componentDidUpdate() {
		console.log("[Persons.js] componentDidUpdate  ")
	}

	componentWillUnmount() {
		console.log("[Persons.js] componentWillUnmount  ")
	}
	render() {
		console.log("[Persons.js] render ")

		return this.props.persons.map( (person, index) => {
										return <Person 
														clicked={() => this.props.clicked(index)}
														name={person.name}
														age={person.age} 
														changed={ (event) => this.props.changed(event, person.id) }
														key={person.id}
														/>
												})		
	}
}

export default Persons;