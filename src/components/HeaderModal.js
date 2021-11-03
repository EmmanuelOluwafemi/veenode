import React from 'react'
import styled from "styled-components";
import {FaTimes} from "react-icons/fa";


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
                    <li className="menuItems">About</li>
                    <li className="menuItems">Team</li>
                    <li className="menuItems">Contact  👋</li>
                    <li className="menuItems">Services</li>
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


  .modalContainer{
        width: 100vw;
        height: 100vh;
        background-color: #000C13;
        display: flex;
        flex-direction: column;
        padding: 0 134px; 
  }
  .modalHeader{
      display: flex;
       top: 0; 
       justify-content: space-between;
      /* margin-top: -10px; */
  }


  .logoWrapper {
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
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
  }
    .contentDetails{
        list-style-type: none;
        color: #ffffff;
        font-size: 20px;
 }
    .contentItems{
        margin-top: 25px;
 }
    .contDetBottom{
        margin-top: 104px;
 }
    .menuList{
        list-style-type: none;
        color: #ffffff;
        font-size: 40px;
        line-height: 55.67px;
        font-weight: 600;
    }
    
    .menuItems{
        margin-top: 47px;
    }   
`