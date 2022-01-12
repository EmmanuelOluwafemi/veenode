import React, {useState} from "react"
import styled from "styled-components";
import HeaderModal from "./HeaderModal";
// icons
import { FiMenu } from 'react-icons/fi';


const Header = () => {
    const [click, setClick] = useState(false);
    const toggleNav = () => setClick(!click);

    
    return (
        <StyledHeader>
            <div className="logoWrapper">
            <svg width="30" height="30" viewBox="0 0 60 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 0L14.5 9L30 18L45 9L30 0Z" fill="white"/>
            <path d="M30 34.5L0 18V34.5L30 52L60 34.5V18L30 34.5Z" fill="white"/>
            </svg>

            </div>
            
            <div className="menu" onClick ={toggleNav} >
              <FiMenu className="icon" /> 
            </div>
            {click && <HeaderModal setOpenModal={setClick} />}
            </StyledHeader>
        
    )
}

export default Header;

const StyledHeader = styled.div`
    width: 100%;
    max-width: 100vw;
    height: 5.125rem;
    padding: 0 6%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 768px) {
        height: 4.5rem;
    }

    .logoWrapper {
        width: 5.125rem;
        height: 5.125rem;
        background: #00111D;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 3.75rem;
            height: auto;
        }

        @media (max-width: 768px) {
            width: 4.5rem;
            height: 4.5rem;

            svg {
                width: 2rem;
            }
        }
    }

    .menu {
        height: 100%;
        display: flex;
        align-items: center;

        .icon {
            font-size: 1.5rem;
            color: #00111D;
            cursor: pointer;
        }
    }
    
   
`