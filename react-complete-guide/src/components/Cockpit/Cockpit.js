import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../Context/auth-context';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);
    useEffect(() => {
        console.log("[Cockpit.js] useEffect");
        // setTimeout(() => {
        //     console.log('Fetched Data from API')
        // }, 1000);
        toggleBtnRef.current.click();

        return () => {
            console.log("[Cockpit.js] Cleanup work complete");
        }
    }, [props.persons]); // use without args if need to call only once 

    const assignedClasses = [];
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }
    return(
        <div className={classes.Cockpit}>
            <h1>Hi I am a React App!</h1>
            <p className={assignedClasses.join(' ')}>Welcome to my first React App</p>
            <button ref={toggleBtnRef} 
                    className={btnClass} 
                    onClick={props.clicked}>
                Toggle Persons
            </button>
            {/* <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer> */}
            <button onClick={authContext.login}>Log in</button>
        </div>
    );
} 

export default React.memo(cockpit);