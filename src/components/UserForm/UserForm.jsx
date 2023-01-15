import React from 'react';
import useInputValue from '../../hooks/useInputValue';
import { Form, Input, Button, Title, Container, Img, Error } from './styles'
import img from '../../assets/pet-svg.svg'

const UserForm = ({ disabled, error, onSubmit, title }) => {

    const email = useInputValue('')
    const password = useInputValue('')


    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({ email: email.value, password: password.value })
    }

    return (
        <Container>
            <Img src={img}/>
            <Title>{ title }</Title>
            <Form onSubmit={handleSubmit} disabled={disabled} >
                <Input placeholder='Email' {...email}  disabled={disabled}/>
                <Input placeholder='Password' type='password' {...password}  disabled={disabled}/>
                <Button disabled={disabled}>{ title }</Button>
            </Form>
            {error && <Error>{error}</Error>}
        </Container>
    );
}

export default UserForm;
