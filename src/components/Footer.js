import React, {useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {AiOutlineArrowRight} from 'react-icons/ai'
import vicImage from "../assets/images/victor.jpg"
import {gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const contactRef = useRef(null);
    const sl = useRef(gsap.timeline());

    useEffect(() => {
        sl.current = ScrollTrigger.batch(contactRef.current, {
            onEnter: batch =>
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: { each: 0.15, grid: [1, 3] },
                    overwrite: true
                  }),
                onLeave: batch => gsap.set(batch, {opacity: 0, y: -100, overwrite: true }),
                onEnterBack: batch =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: batch =>
        gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
      // you can also define most normal ScrollTrigger values like start, end, etc.
      start: "20px bottom",
      end: "+=5000px" 
      
        })
    }, [])

    return (
        <StyledFooter>
            <div   className="contact">
                <div ref={contactRef} className="contactContent">
                    <div className="contactSc contactMain">
                        Say hi to Victor, our director of new
                        partnerships
                    </div>
                    <a className="contactSc contactLink" href="https://google.com" _blank>
                        Contact  👋
                    </a>
                </div>

                <div className="imgContainer">
                    <img className='ceoImage' src={vicImage} alt="" />
                </div>
            </div>
            <div  className="mainFooter">
                <div   className="firstSection">
                    <div  className="orgTitle">
                    <div className="logoWrapper">
                        <svg className="logo" width="40" height="40" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="130" height="130"/>
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

                    <div className="  links">
                        <div className="heading">Veenode</div>

                        <Link className="footer-items" to="/about">About</Link>
                        <Link className="footer-items" to="/team">Team</Link>
                        <Link className="footer-items" to="/contact">Contact</Link>
                    </div>

                    <div className="  socialLinks">
                        <div className="heading">Social</div>

                        <a className="footer-items" href="https://facebook.com">Facebook</a>
                        <a className="footer-items" href="https://facebook.com">Instagram</a>
                        <a className="footer-items"  href="https://facebook.com">Twitter</a>
                        <a className="footer-items" href="https://facebook.com">Linkedin</a>
                    </div>

                    <div className="  subscribe">
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
    max-width: 100vw;
    background-color: #000C13;

    .contact {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        @media (max-width: 768px) {
            grid-template-columns: 100%;
        }

        .contactContent {
            padding: 4rem 3rem;
            padding-left: 18%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            min-height: 100vh;
            max-width: 700px;

            @media (max-width: 768px) {
                padding: 2rem;
                min-height: 200px;
            }

            .contactMain {
                font-size: 2.5rem;
                font-weight: 200;
                line-height: 1.5;
                color: #fff;

                @media (max-width: 768px) {
                    font-size: 1.5rem;
                    text-align: center;
                }
            }

            

            .contactLink {
                display: block;
                width: 100%;
                font-size: 1.5rem;
                margin-top: 2.5rem;
                font-weight: 600;
                color: #fff;
                text-decoration: none;
                
                @media (max-width: 768px) {
                    text-align: center;
                }
            }
        }

        .imgContainer {
            width: 100%;
            height: 100%;
            background: #011F32;

            @media (max-width: 768px) {
                display: none;
            }

            .ceoImage{
                width: 100%;
                height: 100%;
            }
        }
    }

    .mainFooter {
        width: 100%;
        padding: 5rem 9%;

        @media (max-width: 768px) {
            padding: 3rem 2rem;
        }

        .firstSection{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            
            @media (max-width: 768px) {
                flex-direction: column;
                align-items: center;
                border-top: 1px solid #fff;
                padding-top: 2rem;
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

                @media (max-width: 768px) {
                    width: 4.5rem;
                    height: 4.5rem;

                    .logo {
                        width: 2.5rem;
                        height: auto;
                    }
                }
            }
        }
    }
    
    .orgTitle{
        max-width: 260px;
        font-size: 20px;
        font-weight: normal;
        color: #ffffff;

        @media (max-width: 768px) {
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        .title-text{
            margin-top: 54.8px;
            line-height: 1.5;
        }

        @media (max-width: 768px) {
            font-size: 1rem;

            .title-text{
                margin-top: 2.5rem;
                text-align: center;
            }
        }
    }
    
    .heading{
        font-size: 1.125rem;
        text-transform: uppercase;
        color: #8D8D8D;
        margin-bottom: 3rem;

        @media (max-width: 768px) {
            text-align: center;
        }
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
        font-size: 1.125rem;
        margin-top: 1.5rem;

        @media (max-width: 768px) {
            text-align: center;
        }
    }
    .email-input{
        width: 100%;
        max-width: 381px;
        height: 2;
        outline: 0;
        border-width: 0 0 2px;
        border-color: #ffff;
        background-color: #000C13;
        color: #fff;
        font-size: 1.2rem;
        
    }
    .arrow-icon{
        float: right;
        bottom: 30px;
        margin-top: 5px; 
        position: relative;
        z-index: 2;
        color: #ffffff;
        font-size: 20px;
    }
    .lastSection{
        display: flex;
        justify-content: space-between;
        font-size: 1.125rem;
        font-weight: normal;
        color: #ffffff;
        margin-top: 2rem;

        @media (max-width: 768px) {
            flex-direction: column;

            .time, .privacy {
                text-align: center;
                margin-top: 1rem;
            }
        }
    }    
`
