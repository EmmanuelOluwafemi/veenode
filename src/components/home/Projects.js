import React, {useEffect, useRef} from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components'

gsap.registerPlugin(ScrollTrigger);

const data = [
    {
        title: 'Project Name',
        desc: 'In varius luctus molestie ultrices.'
    },
    {
        title: 'Project Name',
        desc: 'In varius luctus molestie ultrices.'
    },
    {
        title: 'Project Name',
        desc: 'In varius luctus molestie ultrices.'
    },
    {
        title: 'Project Name',
        desc: 'In varius luctus molestie ultrices.'
    },
    {
        title: 'Project Name',
        desc: 'In varius luctus molestie ultrices.'
    },
    {
        title: 'Project Name',
        desc: 'In varius luctus molestie ultrices.'
    },
    {
        title: 'Project Name',
        desc: 'In varius luctus molestie ultrices.'
    },
    {
        title: 'Project Name',
        desc: 'In varius luctus molestie ultrices.'
    },
]

const SingleProject = ({ title, desc }) => {
    const projectRef = useRef(null);
    
    useEffect(() => {
        gsap.to(projectRef.current, 0.8, {
            opacity: 1,
            y: 100,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                id:"project",
                trigger: '.box',
                toggleActions: "play none none reverse",
                ease: "power3.out",
                start: "top center",
            }
        })


    }, [])


    return (
        <SingleProjectContainer>
           <div  className="box-container">
            <div ref={projectRef} className="left-boxes">
            
            <div className="box box-1">
            <div className="img-container">
                <img src="https://via.placeholder.com/200" alt="project" />
            </div>
            <div className="project-info">
                <h4 className="title">{data.[0].title}</h4>
                <p className="description">{data.[0].desc}</p>
            </div>
            </div>
            <div className="box box-2">
            <div className="img-container">
                <img src="https://via.placeholder.com/507" alt="project" />
            </div>
            <div className="project-info">
            <h4 className="title">{data.[1].title}</h4>
                <p className="description">{data.[1].desc}</p>
            </div>
            </div>
            <div className="box box-3">
            <div className="img-container">
                <img src="https://via.placeholder.com/507" alt="project" />
            </div>
            <div className="project-info">
            <h4 className="title">{data.[1].title}</h4>
                <p className="description">{data.[2].desc}</p>
            </div>
                
            </div>
            </div>


            <div ref={projectRef} className="right-boxes">
            <div className="box box-4">
            <div className="img-container">
                <img src="https://via.placeholder.com/507" alt="project" />
            </div>
            <div className="project-info">
            <h4 className="title">{data.[3].title}</h4>
                <p className="description">{data.[3].desc}</p>
            </div>
            </div>
            <div className="box box-5">
            <div className="img-container">
                <img src="https://via.placeholder.com/507" alt="project" />
            </div>
            <div className="project-info">
            <h4 className="title">{data.[4].title}</h4>
                <p className="description">{data.[4].desc}</p>
            </div>
            </div>
            < div className="box box-6">
            <div className="img-container">
                <img src="https://via.placeholder.com/507" alt="project" />
            </div>
            <div className="project-info">
            <h4 className="title">{data.[5].title}</h4>
                <p className="description">{data.[5].desc}</p>
            </div>

            </div>
            </div>
            </div>
          
            {/* <div className="img-container">
                <img src="https://via.placeholder.com/507" alt="project" />
            </div>
            <div className="project-info">
                <h4 className="title">{title}</h4>
                <p className="description">{desc}</p>
            </div> */}
        </SingleProjectContainer>
    )
}

const Projects = () => {
    return (
        <ProjectsContainer>
            <SingleProject/>
            {/* {
                data.map((project, index) => (
                    <SingleProject key={index} {...project} />
                ))
            } */}
        </ProjectsContainer>
    )
}

export default Projects

const ProjectsContainer = styled.section`
    width: 100%;
    padding: 0 25%;
    margin-top: -12rem;
    margin-bottom: 6rem;
    display: flex;
    /* grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem; */

    @media (max-width: 768px) {
        grid-template-columns: 100%;
        padding: 0 2rem;
    }
`

const SingleProjectContainer = styled.div`
    width: 100%;
    max-width: 100vw;

    .img-container {
        width: 100%;
        min-height: 500px;
        background-color: #011F32;

        @media (max-width: 768px) {
            min-height: 200px;
            max-height: 200px;
            overflow: hidden;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .box-container{
        display: flex;
        flex-direction: row;
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-bottom: 20px;
        column-gap: 60px;
        
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
    .box{
        width: 100%; 
        margin-top: 20px;
    }

    .left-boxes{
        display: flex;
        flex-direction: column;

    }

    .right-boxes{
        padding-left: 20px;
        padding-top: 50px;
        display: flex;
        flex-direction: column;
    }

    .project-info {
        padding: 1.5rem 0;

        .title {
            font-size: 2rem;
            font-weight: 200;
            color: #011F32;

            @media (max-width: 768px) {
                font-size: 1.5rem;
            }
        }

        .description {
            font-size: 1.2rem;
            font-weight: 400;
            color: #011F32;
            margin-top: .5rem;

            @media (max-width: 768px) {
                font-size: .85rem;
            }
        }
    }


`