import React from 'react'
import styled from "styled-components";
import {FaTimes} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const HeaderModal = ({setOpenModal}) => {
    return (
        <ModalContent>
           <div className="modalBackground">
                <div className="modalContainer">
                    <div className="modalHeader">
                        <div className="logoWrapper">
                            <svg  width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="130" height="130" fill="white"/>
                                <path d="M65 39L49.5 48L65 57L80 48L65 39Z" fill="#006EB6"/>
                                <path d="M65 73.5L35 57V73.5L65 91L95 73.5V57L65 73.5Z" fill="#006EB6"/>
                            </svg>
                        </div>
                        <div className="closeBtn" onClick={() => {
                            setOpenModal(false)
                        }}>
                        <FaTimes />
                    </div>
                </div>
                <div className="modalBody">
                    <div className="rightContent">
                        <ul className="contentDetails">
                            <li className="contentItems">New business</li>
                            <li className="contentItems">Example@gmail.com</li>
                            <li className="contentItems">312 448 7473</li>
                        </ul>

                        <ul className="contentDetails contDetBottom">
                            <li className="contentItems">Visit Us</li>
                            <li className="contentItems">1901 Thornridge Cir.shiloh, Hawaii 81063</li>
                            <li className="contentItems">Chicago, IL 60654</li>
                        </ul>
                    </div>
                    <div className="leftContent">
                        <ul className="menuList">
                            <NavLink to="/about" className="menuItems">About</NavLink>
                            <NavLink to="/contact" className="menuItems">Contact  👋</NavLink>
                            <NavLink to="/services" className="menuItems">Services</NavLink>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </ModalContent>
    )
}

export default HeaderModal

const ModalContent = styled.div `
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    overflow: hidden;
    z-index: 3;


  .modalContainer{
        width: 100%;
        height: 100%;
        min-height: 100vh;
        background-color: #000C13;
        display: flex;
        flex-direction: column;
        padding: 0 8.375rem; 

        @media (max-width: 768px) {
            padding: 0 2rem;
        }
  }
  .modalHeader{
      display: flex;
       top: 0; 
       justify-content: space-between;
         align-items: center;
      /* margin-top: -10px; */
  }


  .logoWrapper {
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px) {
            width: 4rem;
            height: 4rem;
        }
    }

    .closeBtn{
        color: #ffffff;
        width: 20px;
        margin-top: 40px;
        font-size: 1.5rem;
        cursor: pointer;
  }

    .modalBody{
        width: 920px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 104px;

        @media (max-width: 768px) {
            width: 100%;
            margin-top: 2rem;
            flex-direction: column;
        }

        .rightContent {
            @media (max-width: 768px) {
                order: 2;
            }

            .contentDetails{
                list-style-type: none;
                color: #ffffff;
                font-size: 1.125rem;

                @media (max-width: 768px) {
                    font-size: .85rem;
                }
            }

            .contentItems{
                margin-top: 1rem;

                @media (max-width: 768px) {
                    text-align: center;
                }
            }
            .contDetBottom{
                margin-top: 4rem;

                @media (max-width: 768px) {
                    margin-top: 1.5rem;
                }
            }  
        }

        .leftContent {
            @media (max-width: 768px) {
                order: 1;
            }

            .menuList{
                list-style-type: none;
                color: #ffffff;
                font-size: 2.5rem;
                line-height: 3rem;
                font-weight: 600;

                @media (max-width: 768px) {
                    font-size: 1.25rem;
                    text-align: center;
                }
            }
        }
  } 

  .menuItems{
        display: block;
        text-decoration: none;
        margin-top: 3rem;
        color: #fff;
        font-size: 2.5rem;
        line-height: 3rem;
        font-weight: 600;

        @media (max-width: 768px) {
            font-size: 1.25rem;
            text-align: center;
            margin-top: 1rem;
        }
    }
`