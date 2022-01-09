import React from "react";

import styled from "styled-components";

import { IoArrowForward } from 'react-icons/io5';

const About = () => {
    return (
        <AboutWrapper>
            <div className="about-info">
                <h4>About Us</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Enim amet pellentesque. 
                </p>
                <IoArrowForward className="icons" />
            </div>
            <div className="aboutImg"></div>
        </AboutWrapper>
    )
}

export default About;

const AboutWrapper = styled.section`
    width: 100%;
    max-width: 100vw;
    
    .aboutImg {
        width: 100%;
        height: 400px;
        background-color: #0D0C0C;
    }
    
    .about-info {
        padding: 3rem 12%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        
        h4 {
            font-size: 2rem;
            font-weight: 700;
            color: #0D0C0C;
            text-transform: uppercase;
            margin-bottom: 2rem;
            text-align: center;
        }
        
        p {
            font-size: 3rem;
            font-weight: 700;
            color: #0D0C0C;
            text-align: center;
            line-height: 1.6;
            max-width: 786px;
            margin: 0 auto;
            margin-bottom: 2rem;
        }
        
        .icons {
            font-size: 3.5rem;
            color: #0D0C0C;
            cursor: pointer;
        }

        @media (max-width: 768px) {
            padding: 3rem 2rem;

            h4 {
                font-size: 1.5rem;
            }

            p {
                font-size: 1rem;
            }

            .icons {
                font-size: 2rem;
            }
        }
    }
    `