import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'

//components
import Hero from "../components/home/Hero";
import IntroSection from '../components/about/IntroSection';
import ValueSection from '../components/about/ValueSection';
import TeamSection from '../components/about/TeamSection';
import Testimonial from '../components/about/Testimonial';

const About = () => {
    return (
        <StyledAbout>
            <Header />
            <Hero 
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            subTitle="About us"
            content= {` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et convallis lacus, eget suspendisse. A varius mattis laoreet enim viverra ligula eget. Volutpat et, nec dui luctus aliquam tortor.`
            }
            height= '700px'
            />
            <IntroSection/>
            <ValueSection/>
            <TeamSection/>
            <Testimonial/>
            <Footer/>                                                                               
        </StyledAbout>
    )
}

export default About

const StyledAbout = styled.div`
    width: 100%;
`