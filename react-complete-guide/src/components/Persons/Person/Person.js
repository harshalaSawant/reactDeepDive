import React, { Component, Fragment } from 'react';
import classes from './Person.css';

import Aux from '../../hoc/Auxiliary'
import withClass from '../../hoc/WithClass'
import PropTypes from 'prop-types'
import AuthContext from '../../Context/auth-context'

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    
    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    static contextType = AuthContext;
    render() {
        console.log("[Person.js] render ")
        return (
            <Aux>
                {/* <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated</p> : null}
                </AuthContext.Consumer> */}

                {
                    this.context.authenticated ? <p>Authenticated!!!</p> : null
                }
                <p onClick={this.props.clicked}>I am {this.props.name} and I am {this.props.age} years old</p>
                <p onClick={this.props.clicked}>{this.props.children}</p>

                <input 
                    type="text" 
                    onChange={this.props.changed}
                    value={this.props.name}
                    ref={this.inputElementRef} />
                
            </Aux>
        )
    }
    
}

Person.propTypes = {
     click: PropTypes.func,
     name: PropTypes.string,
     age: PropTypes.number,
     changed: PropTypes.func
}
export default withClass(Person, classes.Person);