import styled from "styled-components"

export const ButtonContainer = styled.button`
    text-transform:capitalize;
    font-size:1.4rem;
    font-weight:bold;
    background:transparent;
    border: 0.2rem solid var(--lightBlue);
    border-color:${props => (props.cartBtn ? "var(--mainYellow)":"var(--lightBlue)")};
    color:${props => (props.cartBtn ? "var(--mainYellow)":"var(--lightBlue)")};
    border-radius:0.5rem;
    padding: 0.2rem 0.5rem;
    cursor:pointer;
    margin:0.2rem 0.5rem 0.2rem 0;
    transition:all 0.3s ease-in-out;
    &:hover{
        background:${props => (props.cartBtn ? "var(--mainYellow)":"var(--lightBlue)")};
        color:${props => (props.cartBtn ? "white":"var(--mainBlue)")};
    }
    &:focus{
        outline:none;
    }
`