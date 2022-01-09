import React from 'react'

import styled from 'styled-components'

import blog from "../../assets/images/blog.jpg"
import BlogButton from './BlogButton'

const BlogCard = () => {
    return (
        <BlogCardContainer>
            <div className="img-wrapper">
                <img src={blog} alt="blog" />
            </div>

            <div className="content">
                <h3>Blog dshjds sdjds jsd dshjsdjs</h3>
                <p>Blog dshjds sdjds jsd dshjsdjs fhjdjfdhjfdjfjdjfdjf dfhdhdfdhjfdhjdfhjfd dfjfjfd hdfhjfd.</p>

                <div className="button-container">
                    <BlogButton text="Edit" />
                    <BlogButton text="Delete" outline={true} />
                </div>
            </div>
        </BlogCardContainer>
    )
}

export default BlogCard

const BlogCardContainer = styled.div`
    width: 100%;
    background: #fff;

    .img-wrapper {
        width: 100%;
        height: 224px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .content {
        padding: 1.5rem;

        h3 {
            font-size: 1.5rem;
            font-weight: 500;
            color: #000;
            margin-bottom: 0.5rem;
        }

        p {
            font-size: 1rem;
            font-weight: 300;
            color: #000;
            margin-bottom: 1.5rem;
        }

        .button-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
`