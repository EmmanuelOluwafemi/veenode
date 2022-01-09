import React from 'react'

import styled from 'styled-components'

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
]

const SingleProject = ({ title, desc }) => {
    return (
        <SingleProjectContainer>
            <div className="img-container">
                <img src="https://via.placeholder.com/507" alt="project" />
            </div>
            <div className="project-info">
                <h4 className="title">{title}</h4>
                <p className="description">{desc}</p>
            </div>
        </SingleProjectContainer>
    )
}

const Projects = () => {
    return (
        <ProjectsContainer>
            {
                data.map((project, index) => (
                    <SingleProject key={index} {...project} />
                ))
            }
        </ProjectsContainer>
    )
}

export default Projects

const ProjectsContainer = styled.section`
    width: 100%;
    padding: 0 12%;
    margin-top: -12rem;
    margin-bottom: 6rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;

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
        height: auto;
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

    .project-info {
        padding: 1.5rem 0;

        .title {
            font-size: 2rem;
            font-weight: 600;
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