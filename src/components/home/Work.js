import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import veeDio from '../../assets/video/veenode_web.mp4'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {

    const videoRef = useRef(null);
    const contentRef = useRef(null);
    const sl = useRef(gsap.timeline());


    useEffect(() => {
        videoRef.current.play()

        gsap.from(videoRef.current, {
            delay: 2,
            opacity: 0, 
            x: 100, 
            duration: 1
        })

        sl.current = ScrollTrigger.batch(contentRef.current, {
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
    //  you can also define most normal ScrollTrigger values like start, end, etc.
      start: "20px bottom",
      end: "+=5000px" 
        })
        ScrollTrigger.refresh();   
    },[])




    return (
        <StyledWork>
            <div className="videoContainer">
            <div className="introVideo">
            <video muted autoplay playsInline preload="true" loop ref={videoRef}  className='veedio'>
               <source src={veeDio} type='video/mp4'/> 
            </video>
            </div>
            </div>
            <div id='content'  className="contentContainer">
            <div ref={contentRef}   className="content">
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
    min-height: 700px;
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
        flex: 1;
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
        height: 70vh;
        width: 100%;
        background: #000;
        color: #fff;
        margin-top: -20rem;
        display: flex;
        z-index: -1000;
        @media (max-width: 768px) {
            height: 50vh;
            width: 100%;
            margin-left: 0rem;
        }

        .veedio{
            min-width: 100%;
            min-height: 70%;
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
        flex: 4;
        max-height: 50%;
        height: 60vh;
        width: 100%;
        max-width: 1037px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 30rem;
        padding-bottom: 0px;
        @media (max-width: 768px) {
            flex-direction: column;
            height: 50vh;
            min-height: 100px;
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