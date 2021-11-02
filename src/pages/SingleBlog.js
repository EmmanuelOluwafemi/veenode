import React from 'react'
import styled from 'styled-components'
import Hero from "../components/home/Hero"
import { FiUser, FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi"
import { IoArrowForward } from 'react-icons/io5';
import Header from "../components/Header"
import Footer from '../components/Footer';

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
    }
]

const SingleRecom = ({author, duration, title}) =>{
    return(
        <SingleRecomContainer>
            <div className="blue-box" />
            <div className="recom-details">
            <span className="recom-info">{author} | {duration}</span>
            <p className="recom-title">{title}</p>
            </div>
        </SingleRecomContainer>
    )
}

const SingleBlog = () => {
    return (
        <SingleBlogStyle>
                <Header />
                <Hero 
                subTitle = "CRYPTO"
                title = "Lorem ipsum dolor sit"
                />
                <div className="author">
                    <div className="profile">
                    <FiUser className="usericon" />
                    </div>
                    <div className="nameTime">
                        <div className="authorName">
                            Emmanuel Yusuf
                        </div>
                        <div className="duration">
                             3 min read
                        </div>
                    </div>
                </div>
                <div className="blueSection" />

                <div className="icon-group">
                    <a href="!#"><FiFacebook /></a>
                    <a href="!#"><FiLinkedin /></a>
                    <a href="!#"><FiTwitter /></a>
                </div>

                <div className="blogContent">
                    <div className="articles">
                        <div className="articleSm">
                        <p>Social media has become an integral part of digital marketing for business and digital marketing agencies, but engaging in social media activity alone is not the same as delivering a digital marketing campaign. Although the terms Social Marketing and Digital Marketing are often used interchangeably, they are, in fact, two very different things, and understanding this difference is the key to building a rounded marketing strategy. </p>
                        </div>
                        <div className="articleLg">
                        What is social marketing, and why is it different from digital marketing?
                        </div> 
                        <div className="articleSm">
                        Social media has become an integral part of digital marketing for business and digital marketing agencies, but engaging in social media activity alone is not the same as delivering a digital marketing campaign. Although the terms Social Marketing and Digital Marketing are often used interchangeably, they are, in fact, two very different things, and understanding this difference is the key to building a rounded marketing strategy. 
                        </div>   
                        <div className="blueSm" />
                        <div className="articleLg">
                        What is social marketing, and why is it different from digital marketing?
                        </div>
                        <div className="articleSm">
                        Social media has become an integral part of digital marketing for business and digital marketing agencies, but engaging in social media activity alone is not the same as delivering a digital marketing campaign. Although the terms Social Marketing and Digital Marketing are often used interchangeably, they are, in fact, two very different things, and understanding this difference is the key to building a rounded marketing strategy. 
                        </div>
                    </div> 
                </div>
                <div className="recommend-sect">
                    <div className="recommended-nav">
                        <div className="recommend">
                            Recommended Articles
                        </div>
                        <div className="view-all">
                            View All
                        </div>
                    </div>

                    <div className="recom-body">
                        {
                            data.map((recomPost, index) => (
                                <SingleRecom key={index} {...recomPost} />
                            ))
                        }
                    </div>
                </div>
                

                <div className="next-article">
                    <div className="nextarticle-info">
                        <h4>Next Article</h4>
                        <p>
                        What is social marketing, and why is it different from digital marketing?
                        </p>
                        <IoArrowForward className="icons" />
                    </div>
                </div>
                <Footer />  
        </SingleBlogStyle>
        
    )
}

export default SingleBlog

const SingleRecomContainer = styled.div `
    max-width: 284px;
    height: 342px;

    .blue-box{
        width: 284px;
        height: 198px;
        min-height: 198px;
        background: #011F32;
    }
    .recom-details{
        padding: 1.5rem 0;

        .recom-info{
            font-size: 12px;
            font-weight: 400;
            line-height: 16.34px;
            color: #252424;
        }

        .recom-title{
            font-size: 24px;
            font-weight: 400;
            width: 280px;
        }
    }
`

const SingleBlogStyle = styled.div`
    .blueSection {
        width: 100%;
        height: 400px;
        background: #000;
        margin: 3rem 0;
    }

    .icon-group {
        background: #fff;
        padding: 1rem;
        position: fixed;
        top: 5rem;
        left: 3rem;
        display: flex;
        flex-direction: column;
        max-width: 40px;
        justify-content: center;
        align-items: center;

        a {
            color: #000;
            margin-bottom: 1rem;
        }
    }

    .blogContent {
        width: 100%;
        max-width: 700px;
        margin: 0 auto;


        .articleSm {
            font-size: 1rem;
            line-height: 1.5;
            letter-spacing: .03em;
            margin-bottom: 1rem;

            @media (min-width: 768px) {
                font-size: 1.2rem;
            }
        }

        @media (max-width: 768px) {
            padding: 0 6%;
        }
    }

    .recommend-sect {
        width: 100%;
        padding: 0 12%;

        @media (max-width: 768px) {
            padding: 0;
        }

        .recom-body {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
            grid-gap: 3rem;
            justify-content: space-between;
        }
    }
`