import React from 'react'
import styled from "styled-components";
import Footer from "../components/Footer"
import Hero from "../components/home/Hero"
import Header from "../components/Header"
import BlogsContent from '../components/blogs/BlogsContent';
import BlogNav from '../components/blogs/BlogNav';

const Blogs = () => {
    return (
        <StyledBlog>
            <Header />
            <Hero className="hero"
                subTitle= "OUR BLOG"
                height="290px"
                title = "Lorem ipsum dolor sit. "
            />
            <BlogNav /> 
            <BlogsContent/>
            <Footer />
        </StyledBlog>
    )
}

export default Blogs


const StyledBlog = styled.div`
    width: 100%;
    
      
`