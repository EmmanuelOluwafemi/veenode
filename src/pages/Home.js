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
            <Hero 
                title="Lorem ipsum dolor sit amet, consectetur adipiscing." 
                subTitle="Etiam fusce elit ac nunc orci ac enim."
                content={`
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Et convallis lacus, eget suspendisse. A varius mattis 
                    laoreet enim viverra ligula eget. Volutpat et, 
                    nec dui luctus aliquam tortor.
                `}
            />
            <Work />
            <Hero 
                title="Lorem ipsum dolor sit amet, consectetur adipiscing." 
                subTitle="Etiam fusce elit ac nunc orci ac enim."
                content={`
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Et convallis lacus, eget suspendisse. A varius mattis 
                    laoreet enim viverra ligula eget. Volutpat et, 
                    nec dui luctus aliquam tortor.
                `}
            />
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