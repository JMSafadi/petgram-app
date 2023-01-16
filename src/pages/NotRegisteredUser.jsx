import React, { useContext } from 'react';
import UserForm from '../components/UserForm/UserForm';
import { Context } from '../context'
import { RegisterMutation } from '../container/RegisterMutation';
import { LoginMutation } from '../container/LoginMutation';

const NotRegisteredUser = () => {


    const { activateAuth } = useContext(Context)

    return (
        <>
        <RegisterMutation>
            {
                (register, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                        const input = { email, password }
                        const variables = { input }
                        register({ variables }).then(({data}) => {
                            const {signup} = data
                            activateAuth(signup)
                        })
                    }
                    const errorMsg = error && 'El usuario ya existe o hay algun problema.'
                    return <UserForm error={errorMsg} disabled={loading} title='Registrarse' onSubmit={onSubmit}/>
                }
            }
        </RegisterMutation>
        <LoginMutation>
            {
                (login, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    login({ variables }).then(({data}) => {
                        const {login} = data
                        activateAuth(login)
                    })
                }
                    const errorMsg = error && 'La contraseña es incorrecta o el usuario no existe.'
                    return <UserForm error={errorMsg} disabled={loading} title='Iniciar Sesion' onSubmit={onSubmit}/>
                }
            }

        </LoginMutation>
        </>          
    )
}

export default NotRegisteredUser;
