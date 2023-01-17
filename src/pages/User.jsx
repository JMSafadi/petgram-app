import React, { useContext } from 'react';
import SubmitButton from '../components/SubmitButton/SubmitButton';
import { Context } from '../context';

const User = () => {

    const { removeAuth } = useContext(Context)

    return (
        <>
            <h1>User</h1>
            <SubmitButton onClick={removeAuth}> Cerrar sesion </SubmitButton>
        </>
    );
}

export default User;
