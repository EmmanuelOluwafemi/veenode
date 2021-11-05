import React from 'react'
import styled from 'styled-components'


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


const Recommended = () => {
    return (
       <RecommendSect>
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
       </RecommendSect>
    )
}

export default Recommended


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


const RecommendSect = styled.div`
     width: 100%;
        padding: 0 12%;
        margin-top: 180px;
        @media (max-width: 768px) {
            padding: 0;
        }

        .recommended-nav{
            display: flex;
            justify-content: space-between;
            font-size: 40px;
            font-style: normal;
            line-height: 61.67px;
            margin-bottom: 82px;
        }

        .recom-body {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
            grid-gap: 3rem;
            justify-content: space-between;
        }
`