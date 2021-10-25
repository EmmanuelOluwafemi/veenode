import React from "react"
import styled from "styled-components";
import Footer from "../components/Footer";

// components
import Header from "../components/Header";
import About from "../components/home/About";
import Hero from "../components/home/Hero";
import MoreInfo from "../components/home/MoreInfo";
import Projects from "../components/home/Projects";
import Testimony from "../components/home/Testimony";
import Work from "../components/home/Work";

const Home = () => {
    return (
        <StyledHome>
            <Header />
            <Hero />
            <Work />
            <Hero />
            <MoreInfo />
            <Projects />
            <About />
            <Testimony />
            <Footer />
        </StyledHome>
    )
}

export default Home;

const StyledHome = styled.div`
    width: 100%;
`