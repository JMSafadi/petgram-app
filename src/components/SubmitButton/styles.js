import styled from "styled-components"

export const Button = styled.button`
    background-color: #8d00ff;
    border-radius: 3px;
    color: #fff;
    height: 32px;
    width: 100%;
    margin: 10px;
    text-align: center;
    &[disabled] {
        opacity: .3;
    }
`