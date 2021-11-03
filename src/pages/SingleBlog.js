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
                height="250px"
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

                <div className="blogContent">
                   <div className="socialIcons">
                        <a href="/" className="socials"><FiLinkedin/></a>
                        <a href="/" className="socials"><FiTwitter/></a>
                        <a href="/" className="socials"><FiFacebook/></a>
                    </div>
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
                </div>
                
                <div className="recom-body">
                    {
                        data.map((recomPost, index) => (
                            <SingleRecom key={index} {...recomPost} />
                        ))
                    }
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
    width: 100%;
    display: block;
    

    .author{
        width: 500px;
        height: 34;
        display: flex;
        flex-direction: row;
        margin-left: 17%;
    }
    .profile{
        background-color: #C4C4C4;
        width: 88px;
        height: 88px;
        border-radius: 50px;
        font-size: 60px;
        
    }
    .usericon{
        margin-left: 13px;
        margin-top: 10px;
    }
    .nameTime{
        margin-top: 15px;
        margin-left: 12px;
        width: 400px;
        max-height: 68px;
    }
    .authorName{
        font-size: 20px;
        font-weight: 600px;
        font-style: normal;
        line-height: 22.54px;
        color: #000000;
    }
    .duration{
        font-size: 14px;
        font-weight: 400;
        font-style: normal;
        line-height: 15.78px;
        color: #302F2F;
        text-transform: uppercase;
        margin-top: 10px;
    }
    .blueSection{
        width: 100%;
        height: 680px;
        background: #011F32;
    }
    .blogContent{
        position: relative;
        display: flex;
        flex-direction: row;
        width: 80%;
        left: 5%;
        margin-top: 87px;   
    }
    .socialIcons{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
    .socials{
        text-decoration: none;
        font-size: 20px;
        color: #000000;
        margin-bottom: 50px;
    }
    .articles   {
        width: 811px;
        display: flex;
        flex-direction: column;
        flex-grow: 2;
    }
    .articleSm{
        font-size: 24px;
        line-height: 37px;
        font-weight: 400;
        margin-bottom: 16px;
    }
    .articleLg{
        font-size: 40px;
        font-weight: 600;
        line-height:60.16px;
        margin-top: 16px;
        margin-bottom: 20px;
    }
    .blueSm{
        height: 518px;
        background: #011F32;
        margin-top: 16px;
        margin-bottom: 16px;
    }
    .recommend-sect{
        margin-top: 184px;
        width: 80%;
        margin-left: 125px;
}
    .recommended-nav{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 40px;
        font-weight: 600;
        line-height: 61.67px;
    }
    .recom-body{
        padding: 0 12%;
        margin-top: 82px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 0.05rem;
    }
    .next-article{
        width: 100%;
        margin-top: 142px;
        margin-bottom: 100px;
    }
    .nextarticle-info{
        padding: 3rem 12%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;


        h4 {
            font-size: 2rem;
            font-weight: 400;
            color: #0D0C0C;
            text-transform: uppercase;
            margin-bottom: 2rem;
            text-align: center;
        }

        p {
            font-size: 3rem;
            font-weight: 600;
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
    }
`