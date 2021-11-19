import React from 'react'
import styled from 'styled-components'

const Introduction = () => {
    return (
        <StyledIntro>
            <div className="blueSection" />

            <section className="mainContent">
            <div className="work-box">
                <div className="work-text">
                <p>Work</p>
                </div>
                <div className="work-details">
                    <div className="design">Visual Design</div>
                    <div className="design">Website Design</div>
                    <div className="design">Digital Marketing</div>
                    <div className="design-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maecenas massa euismod at id. Quam ipsum augue lobortis ut nulla dui porttitor massa enim. Risus, vulputate lectus scelerisque scelerisque. Bibendum malesuada suspendisse suscipit at convallis etiam. Et mauris lectus dis cras mauris, eleifend libero. Orci urna commodo semper cursus urna. Pellentesque ac.
                    </div>
                </div>
            </div>
            <div className="obj-box">
            <div className="obj-text"> 
            <p>Objective</p>
            </div>
            <div className="obj-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maecenas massa euismod at id. Quam ipsum augue lobortis ut nulla dui porttitor massa enim. Risus, vulputate lectus scelerisque scelerisque. 
            </div>
            </div>
            </section>

             <div className="blueSection" />
            <div className="blueSection" /> 
        </StyledIntro>
    )
}

export default Introduction

const StyledIntro = styled.div`
    width: 100%;

    .blueSection {
        width: 100%;
        height: 680px;
        background:#011F32;
        margin: 3rem 0;
    }
    .mainContent{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding:  6.438rem 12.5rem;
        .work-box{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
            margin: 0 auto;
            border-bottom: 1px solid #011F32 ;
            @media (max-width: 768px) {
                grid-template-columns: repeat(1, 1fr);
        }
        }
        .work-text{
            font-size: 40px;
            font-weight: mormal;
            line-height: 60px;
        }
        .work-details{
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        .design{
            font-size: 40px;
            font-style: normal;
            line-height: 60.18px;
            height: 70px;
            border-bottom: 1px solid #011F32 ;

            @media (max-width: 1030px) {
                font-size: 30px;
            }
            @media (max-width: 872px) {
                font-size: 25px;
            }
            @media (max-width: 784px) {
                font-size: 20px;
            }
        }
        .design-text{
            font-size: 1.5rem;
            font-weight: normal;
            line-height: 2rem;
            letter-spacing: .03;
            margin-top: 51px;
            margin-bottom: 81px;
        }
        .obj-box{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
            margin-top: 30px;           
            border-bottom: 1px solid #011F32 ;
            @media (max-width: 768px) {
                grid-template-columns: repeat(1, 1fr);
        }
        }
        .obj-text{
            font-size: 40px;
            font-weight: mormal;
            line-height: 60px;
        }
        .obj-details{
            font-size: 1.5rem;
            font-weight: normal;
            line-height: 2rem;
            letter-spacing: .03;
            /* margin-top: 51px; */
             margin-bottom: 81px;
        }
    }
    
    

`