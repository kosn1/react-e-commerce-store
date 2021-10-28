import { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg"
import { ButtonContainer } from "./Button";
import styled from "styled-components";


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-4">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ms-3">
                        <Link to="/" className="nav-link">E-PhoneShop</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ms-auto">
                    <ButtonContainer>
                        <span className="me-2">
                            <i className="fas fa-cart-plus" />
                        </span>                        
                        My Cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background:var(--mainBlue);
    .nav-link{
        color: white !important;
        font-size:1.3rem;
        text-transform: capitalize;
    }
`


