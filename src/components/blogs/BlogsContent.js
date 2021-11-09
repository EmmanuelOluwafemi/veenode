import React from "react";
import styled from "styled-components";

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

const BlogsContent = () => {
    return(
    <Blogbody>
    {
        data.map((blogPost, index) => (
            <SingleNews key={index} {...blogPost} />
        ))
    }

</Blogbody>
    )
}

export default BlogsContent;

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
        margin-top: -15px;
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
const Blogbody = styled.section `
        width: 100%; 
        padding: 0 12%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0.5rem;
        margin-bottom: 10rem;
`