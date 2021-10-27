import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Footer = () => {
    return (
        <StyledFooter>
            <div className="contact">
                <div className="contactContent">
                    <div className="contactMain">
                        Say hi to Victor, our director of new
                        partnerships
                    </div>
                    <a className="contactLink" href="https://google.com" _blank>
                        Contact  👋
                    </a>
                </div>
                <div className="imgContainer"></div>
            </div>
            <div className="mainFooter">
                <div className="firstSection">
                    <div className="orgTitle">
                    <div className="logoWrapper">
                        <svg className="logo" width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="130" height="130" fill="white"/>
                        <path d="M65 39L49.5 48L65 57L80 48L65 39Z" fill="#006EB6"/>
                        <path d="M65 73.5L35 57V73.5L65 91L95 73.5V57L65 73.5Z" fill="#006EB6"/>
                        </svg>
                    </div>
                        <p className="title-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste impedit maxime nostrum. 
                            Esse nam perspiciatis quas aperiam magni at quos, a officia 
                            reprehenderit vel temporibus.
                        </p>
                    </div>

                    <div className="links">
                        <div className="heading">Veenode</div>

                        <Link className="footer-items" to="/about">About</Link>
                        <Link className="footer-items" to="/team">Team</Link>
                        <Link className="footer-items" to="/contact">Contact</Link>
                    </div>

                    <div className="socialLinks">
                        <div className="heading">Social</div>

                        <a className="footer-items" href="https://facebook.com">Facebook</a>
                        <a className="footer-items" href="https://facebook.com">Instagram</a>
                        <a className="footer-items"  href="https://facebook.com">Twitter</a>
                        <a className="footer-items" href="https://facebook.com">Linkedin</a>
                    </div>

                    <div className="subscribe">
                        <div className="heading">Subscribe</div>

                        <form>
                            <input className="email-input" type="email" placeholder="Email" />
                            <AiOutlineArrowRight className="arrow-icon" />
                        </form>
                    </div>
                </div>

                <div className="lastSection">
                    <div className="time"> © 2020 Mabbly, LLC. All rights reserved. </div>
                    <div className="privacy">Privacy Policy</div>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.section`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #000C13;

    .contact {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        .contactContent {
            padding: 4rem 3rem;
            padding-left: 18%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            min-height: 100vh;
            max-width: 700px;

            .contactMain {
                font-size: 2.5rem;
                font-weight: 600;
                line-height: 1.5;
                color: #fff;
            }

            .contactLink {
                font-size: 2rem;
                margin-top: 2.5rem;
                font-weight: 600;
                color: #006EB6;
                text-decoration: none;
            }
        }

        .imgContainer {
            width: 100%;
            height: 100%;
            background: #011F32;
        }
    }

    .mainFooter {
        width: 100%;
        padding: 5rem 9%;
    }
    .firstSection{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .logoWrapper {
        width: 8.125rem;
        height: 8.125rem;
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;

        .logo {
            width: 8.125rem;
            height: auto;
        }
    }
    .orgTitle{
        max-width: 260px;
        font-size: 20px;
        font-weight: normal;
        color: #ffffff;
    }
    .title-text{
        margin-top: 54.8px;
    }
    .heading{
        font-size: 20px;
        text-transform: uppercase;
        color: #8D8D8D;
        margin-bottom: 33.6px;
    }
    .links{
        display: flex;
        flex-direction: column;
    }
    .socialLinks{
        display: flex;
        flex-direction: column;
    }
    .footer-items{
        color: #ffffff;
        text-decoration: none;
        font-weight: 600;
        font-size: 20px;
        margin-top: 33.53px;
    }
    .email-input{
        width: 381px;
        height: 32px;
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        border-bottom-style: groove;
        border-color: #ffff;
        background-color: #000C13;
        color: #fff;
        
    }
    .arrow-icon{
        float: right;
        /* margin-right: px; */
        margin-top: 5px; 
        position: relative;
        z-index: 2;
        color: #ffffff;
        font-size: 20px;
    }
    .lastSection{
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        font-weight: normal;
        color: #ffffff;
        margin-top: 134px
    }    
`
