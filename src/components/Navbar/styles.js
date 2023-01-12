import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";
import { fadeIn } from "../../styles/animation";

export const Nav = styled.nav`
    align-items: center;
    background-color: #fcfcfc;
    border-top: 1px solid black;
    bottom: 0;
    display: flex;
    height: 50px;
    justify-content: space-around;
    left: 0;
    margin: 0 auto;
    max-width: 500px;
    position: fixed;
    right: 0;
    width: 100%;
    z-index: 1000;
`

export const Link = styled(LinkRouter)`
    align-items: center;
    color: grey;
    display: inline-flex;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    width: 100%;
    &[aria-current] {
        color: black;
        &:after {
            ${fadeIn({ time:'0.5s' })};
            content: '•';
            position: absolute;
            bottom: 0;
            font-size: 28px;
            line-height: 20px;
        }
    }
`