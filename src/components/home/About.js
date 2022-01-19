import React, {useEffect, useRef} from "react";
import gsap from "gsap";
import styled from "styled-components";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { IoArrowForward } from 'react-icons/io5';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    let about = useRef(null);

    useEffect(() => {
        gsap.from(about.current, 0.8, {
            delay: 0.8,
            opacity: 0,
            ease: "power3.out",
            y: 80,
            scrollTrigger: {
                id: "about",
                trigger: ".about",
                start: "top center",
                stop: "bottom center",
                toggleActions: "play none none reverse"
            }
        })

    }, [])
    return (
        <AboutWrapper>
            <div ref={about} className="about-info">
                <h4 className="about">About Us</h4>
                <p className="about">
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
            font-size: 1rem;
            font-weight: 200;
            color: #0D0C0C;
            text-transform: uppercase;
            margin-bottom: 2rem;
            text-align: center;
        }
        
        p {
            font-size: 3rem;
            font-weight: 200;
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