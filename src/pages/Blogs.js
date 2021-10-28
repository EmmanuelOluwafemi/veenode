import React from 'react'
import styled from "styled-components";
import Footer from "../components/Footer"
import Hero from "../components/home/Hero"
import Header from "../components/Header"
import { AiOutlineSearch } from 'react-icons/ai';

const data = [
    {
        author: "veenode",
        duration: "4mins read",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
    {
        author: "veenode",
        duration: "4mins read",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
    {
        author: "veenode",
        duration: "4mins read",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
    {
        author: "veenode",
        duration: "4mins read",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
    {
        author: "veenode",
        duration: "4mins read",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
    {
        author: "veenode",
        duration: "4mins read",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
    {
        author: "veenode",
        duration: "4mins read",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    },
    {
        author: "veenode",
        duration: "4mins read",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    }
]

const SingleNews = ({author, duration, title}) => {
    return(
        <SingleNewsContainer>
            <div className="img-box">
                <img src="https://via.placeholder.com/323x198" alt=" news"/>
            </div>
            <div className="news-details">
                <span className="news-info">{author} | {duration}</span>
                <p className="title">{title}</p>
            </div>
        </SingleNewsContainer>
    )
}

const Blogs = () => {
    return (
        <StyledBlog>
            <Header />
            <Hero className="hero"
                subTitle= "OUR BLOG"
                title = "Lorem ipsum dolor sit. "
            />
            
                <div className="blogNav">
                    <ul className ="blogList">
                        <li className="blogListItem">All</li>
                        <li className="blogListItem">Marketing</li>
                        <li className="blogListItem">Technology</li>
                        <li className="blogListItem">Blockchain</li>
                    </ul>
                    <div className="searchIcon">
                    <AiOutlineSearch/>                    
                    </div>
                </div>
                <div className="blogCard">

            <div className="blogBody">
                {
                    data.map((blogPost, index) => (
                        <SingleNews key={index} {...blogPost} />
                    ))
                }

            </div>

                </div>
            <Footer />
        </StyledBlog>
    )
}

export default Blogs

const SingleNewsContainer = styled.div `
    width: 50%;
    
    .img-box{
        width: 329px;
        height: 198px;
        min-height: 198px;
        background-color: #011F32;
   
        img{
            width: 329px;
            height: 198px;
            object-fit: cover;
        }
    }
    .news-details{
        padding: 1.5rem 0;
        
        .news-info{
            font-size: 12px;
            font-weight: 400;
            line-height: 16.34px;
            color: #252424;
        }
        
        .title{
            font-size: 24px;
            font-weight: 400;
            width: 300px
        }

    }

`

const StyledBlog = styled.div`
    width: 100%;
    
    .hero{
        height: 70px !important;
    }

    .blogNav{
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 45%;
        width: 75%;
        margin-left: 16%;
        margin-bottom : -10px;
    }
    .blogList{
        list-style-type: none;
        display: flex;
        color: #000000;
        font-weight: 600;
        font-size: 20px;
    }
    .blogListItem{
        margin-right: 32px;
        cursor: pointer;
    }
    .searchIcon{
        font-size: 25px;
    }   
    
    .blogBody{
        position: relative;
        top: 50%;
        width: 100%;
        padding: 0 12%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0.5rem;
    }
`