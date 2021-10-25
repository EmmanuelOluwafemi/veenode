import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
                            <svg className="logo" viewBox="0 0 60 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30 0L14.5 9L30 18L45 9L30 0Z" fill="white"/>
                                <path d="M30 34.5L0 18V34.5L30 52L60 34.5V18L30 34.5Z" fill="white"/>
                            </svg>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste impedit maxime nostrum. 
                            Esse nam perspiciatis quas aperiam magni at quos, a officia 
                            reprehenderit vel temporibus.
                        </p>
                    </div>

                    <div className="links">
                        <div className="heading">Veenode</div>

                        <Link to="/about">About</Link>
                        <Link to="/team">Team</Link>
                        <Link to="/contact">Contact</Link>
                    </div>

                    <div className="socialLinks">
                        <div className="heading">Social</div>

                        <a href="https://facebook.com">Facebook</a>
                        <a href="https://facebook.com">Instagram</a>
                        <a href="https://facebook.com">Twitter</a>
                        <a href="https://facebook.com">Linkedin</a>
                    </div>

                    <div className="subscribe">
                        <div className="heading">Subscribe</div>

                        <form>
                            <input type="email" placeholder="Enter your email" />
                        </form>
                    </div>
                </div>

                <div className="lastSection">
                    <div className="time"></div>
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
`
