import React from 'react'

import styled from 'styled-components'

import teammember from "../../assets/images/teammember.jpg"

import { FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';
import BlogButton from './BlogButton';

const TeamCard = () => {
    return (
        <StyledTeamCard>
            <div className="team-card-image">
                <img src={teammember} alt="team member" />
                <div className='team-card-image-social'>
                    <a href="https://instagram.com" className='social-icon-container'><FiInstagram className='social-icon' /></a>
                    <a href="https://twitter.com" className='social-icon-container'><FiTwitter className='social-icon' /></a>
                    <a href="https://linkedin.com" className='social-icon-container'><FiLinkedin className='social-icon' /></a>
                </div>
            </div>
            <div className="team-card-content">
                <h3>John Doe</h3>
                <p>CEO</p>

                <div className="button-container">
                    <BlogButton text="Edit" />
                    <BlogButton text="Delete" outline={true} />
                </div>
            </div>
        </StyledTeamCard>
    )
}

export default TeamCard

const StyledTeamCard = styled.div`
    width: 100%;
    background: #fff;
    max-width: 400px;

    .team-card-image {
        width: 100%;
        position: relative;
        height: 14rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .team-card-image-social {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 1.25rem;

            .social-icon-container {
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 50%;
                background: #fff;
                display: flex;
                align-items: center;
                justify-content: center;

                .social-icon {
                    font-size: 1.5rem;
                }
            }
        }
    }

    .team-card-content {
        width: 100%;
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