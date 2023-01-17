import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 15px;
`

export const Form = styled.form`
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
`

export const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 3px;
    margin: 12px;
    padding: 10px 10px;
    width: 100%;
    &[disabled] {
        opacity: .3;
    }
`

export const Title = styled.h2`
    font-size: 24px;
    font-weight: 500;
    padding: 8px 0;
`

export const Img = styled.img`
    color: #fff;
    width: 120px;
    height: 120px;
    margin-bottom: 22px;
`

export const Error = styled.span`
    color: red;
    font-size: 14px;
`