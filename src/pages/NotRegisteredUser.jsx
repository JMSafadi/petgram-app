import React, { Children } from 'react';
import UserForm from '../components/UserForm/UserForm';
import Context from '../context'

const NotRegisteredUser = () => {
    return (
        <Context.Consumer>
            {
                ({ activateAuth }) => {
                    return (
                        <UserForm onSubmit={activateAuth}/>
                    )
                }
            }
        </Context.Consumer>
    );
}

export default NotRegisteredUser;
