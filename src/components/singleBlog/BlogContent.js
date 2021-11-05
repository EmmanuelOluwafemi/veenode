import React from 'react'
import styled from 'styled-components'
import { FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi"

const BlogContent = () => {
    return (
        <ContentStyle>
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
                </ContentStyle>
    )
}

export default BlogContent

const ContentStyle = styled.div `
    width: 100%;

    .blueSection {
        width: 100%;
        height: 680px;
        background:#011F32;
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

        .articleLg{
            font-weight: 600;
            font-size: 40px;
            line-height: 61.67px;
            margin-bottom: 24px;
        }

        .articleSm {
            font-size: 1rem;
            line-height: 1.5;
            letter-spacing: .03em;
            margin-bottom: 1rem;

            @media (min-width: 768px) {
                font-size: 1.2rem;
            }
        }
        .blueSm{
            width: 100%;
            height: 518px;
            background-color: #011F32;
            margin-top: 16px;
            margin-bottom: 25px;
        }
        @media (max-width: 768px) {
            padding: 0 6%;
        }
    }

`
