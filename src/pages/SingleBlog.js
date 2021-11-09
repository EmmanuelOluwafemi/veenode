import React from 'react'
import styled from 'styled-components'
import Hero from "../components/home/Hero"
import { FiUser } from "react-icons/fi"
import BlogContent from '../components/singleBlog/BlogContent'
import Header from "../components/Header"
import Footer from '../components/Footer';
import Recommended from '../components/singleBlog/Recommended'
import NextArticle from '../components/singleBlog/NextArticle'

const SingleBlog = () => {
    return (
        <SingleBlogStyle>
                <Header />
                <Hero 
                subTitle = "CRYPTO"
                height="200px"
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
                <BlogContent />      
               <Recommended/>
                <NextArticle/>        
                <Footer />  
        </SingleBlogStyle>
        
    )
}

export default SingleBlog


const SingleBlogStyle = styled.div`
    .author{
        margin-top: 40px;
        margin-bottom: 20px;
        height: 88px;
        width: 416px;
        display: flex;
        flex-direction: row;
        word-break: normal; 
        margin-left: 16%;
        @media (min-width: 768px) {
                margin-top: 60px;
            }

    .profile{
            height: 88px;   
            width: 110px;
            background-color: #C4C4C4;
            border-radius: 50px;
        }

    .usericon{
        width: 40px;
        height: 50px;
       text-align: center;
        margin-left: 21px;
        margin-top: 15px;
    }   
    .nameTime{
        margin-left: 10px;
        margin-top: 16px;
        width: 416px;
        height: 68px;
        
        .authorName{
            font-weight: 600;
            font-size: 20px;
            line-height: 22.54px;
            color: #000000;
        }
        .duration{
            font-size: 20px;
            color: #302F2F;
            font-weight: 400;
            font-size: 14px;
            text-transform: uppercase;
            margin-top: 10px;
        }
    }

    }    

   
`