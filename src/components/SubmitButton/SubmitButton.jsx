import React from 'react';
import { Button } from './styles';

const SubmitButton = ({ children, disabled, onClick }) => {
    return (
        <Button onClick={onClick} disabled={disabled}>{ children }</Button>
    );
}

export default SubmitButton;
