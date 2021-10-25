import React from "react"
import styled from "styled-components";

// icons
import { FiMenu } from 'react-icons/fi';

const Header = () => {
    return (
        <StyledHeader>
            <div className="logoWrapper">
                <svg className="logo" viewBox="0 0 60 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 0L14.5 9L30 18L45 9L30 0Z" fill="white"/>
                    <path d="M30 34.5L0 18V34.5L30 52L60 34.5V18L30 34.5Z" fill="white"/>
                </svg>
            </div>
            <div className="menu">
                <FiMenu className="icon" />
            </div>
        </StyledHeader>
    )
}

export default Header;

const StyledHeader = styled.div`
    width: 100%;
    max-width: 100vw;
    padding: 0 6%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .logoWrapper {
        width: 8.125rem;
        height: 8.125rem;
        background: #00111D;
        display: flex;
        align-items: center;
        justify-content: center;

        .logo {
            width: 3.75rem;
            height: auto;
        }
    }

    .menu {
        height: 8.125rem;
        display: flex;
        align-items: center;

        .icon {
            font-size: 1.5rem;
            color: #00111D;
            cursor: pointer;
        }
    }
`