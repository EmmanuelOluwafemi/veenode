import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import veeDio from '../../assets/video/veenode_web.mp4'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {

    const videoRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        gsap.from(videoRef.current, {
            delay: 2,
            opacity: 0, 
            x: 100, 
            duration: 1
        })

        gsap.from(contentRef.current, 0.6, {
            delay: 0.8,
            opacity: 0,
            ease: "power3.out",
            y: 80,
            scrollTrigger:{ 
                id: "content",
                trigger: '.contentText',
                start: "top center",
                stop: "bottom center",
                toggleActions: "play none none reverse",
            }
        })   
    },[])




    return (
        <StyledWork>
            <div className="videoContainer">
            <div className="introVideo">
            <video ref={videoRef} autoPlay playsInline loop className='veedio'>
               <source src={veeDio} type='video/mp4'/> 
            </video>
            </div>
            </div>
            <div id='content' ref={contentRef}  className="contentContainer">
            <div className="content">
                <h4 className='contentText' >Our life’s work</h4>
                <p className='contentText'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Purus ut facilisis etiam faucibus. Sem blandit magnis sem 
                    eu arcu pretium gravida vitae fermentum. Sit aliquam id 
                    sapien sit leo vitae, odio. Quis malesuada arcu.
                </p>
            </div>
            </div>
        </StyledWork>
    )
}

export default Work

const StyledWork = styled.section`
    width: 100%;
    min-width: 100vw;
    min-height: 600px;
    background: #00111D; 
    padding-bottom: 4rem;
    display: flex;
    flex-direction: column;
    margin-top: 10rem;
    position: relative;

    @media (max-width: 768px) {
            margin-top: 25rem;
        }

    .videoContainer{
        background: #00111D; 
        height: 50vh;
        width: 100vw;
        padding-left: 20rem;
        position: inherit;


         @media (max-width: 984px) {
            padding-left: 0rem;
            height: 10vh;
        } 

    
    }

    .introVideo {
        height: 100vh;
        width: 100%;
        background: #000;
        color: #fff;
        margin-top: -20rem;
        display: flex;
        z-index: -1;
        @media (max-width: 768px) {
            height: 50vh;
            width: 100%;
            margin-left: 0rem;
        }

        .veedio{
            min-width: 100%;
            min-height: 100%;
            object-fit: cover;

            @media (max-width: 768px) {
            height: 50vh;
            width: 100%;
        }

        }
    }
    .contentContainer{
        background: #00111D; 
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

                
        @media (max-width: 768px) {
            padding: 0px 100px 0px 100px;
            margin-top: -10rem;
        }
    }
    .content {
        width: 100%;
        max-width: 1037px;
        margin-top: 20rem;
        color: #fff;
        display: flex;
        column-gap: 30rem;
        
        @media (max-width: 768px) {
            flex-direction: column;
        }

        h4 {
            font-size: 3rem;
            font-weight: 200;
            color: #fff;
            /* max-width: 428px; */
            width: 100%;


            @media (max-width: 768px) {
                font-size: 2rem;
            }
        }

        p {
            flex-grow: 1;
            font-size: 1rem;
            margin-top: .8rem;
            line-height: 2.5;

            @media (max-width: 768px) {
                font-size: .85rem;
            }
        }
    }
`