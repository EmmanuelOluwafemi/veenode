import React, {useEffect, useRef} from "react";
import gsap from "gsap";
import styled from "styled-components";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { IoArrowForward } from 'react-icons/io5';

import staff1 from "../../assets/images/staff.jpg"
import staff2 from "../../assets/images/staff2.jpg"
import staff3 from "../../assets/images/staff3.jpg"

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    let about = useRef(null);
    const sl = useRef(gsap.timeline());

    useEffect(() => {
        sl.current = ScrollTrigger.batch(about.current, {
            onEnter: batch =>
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
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
        <AboutWrapper>
            <div ref={about} className="about-info">
                <h4 className="about">About Us</h4>
                <p className="about">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Enim amet pellentesque. 
                </p>
                <IoArrowForward className="icons" />
            </div>
            <div className="aboutImg">
            <img className=" staffImage" src={staff1} alt="" />
            <img className="staffImage" src={staff2} alt="" />
            <img className="inactive staffImage" src={staff3} alt="" />
            </div>
        </AboutWrapper>
    )
}

export default About;

const AboutWrapper = styled.section`
    width: 100%;
    max-width: 100vw;
    
    .aboutImg {
        width: 100%;
        height: 500px;
        display: flex;

            .staffImage{
            width: 33.33%;
            @media (max-width: 768px) {
                width: 50%;
                height: 400px;
            }
        }
        .inactive{
            @media (max-width: 768px) {
                display: none;
                
            }
        }
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
            font-weight: bolder;
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