import React from 'react'
import styled from 'styled-components'

const data = [
    {
        image: "https://via.placeholder.com/280x328"
    },
    {
        image: "https://via.placeholder.com/280x328"
    },
    {
        image: "https://via.placeholder.com/280x328"
    },
    {
        image: "https://via.placeholder.com/280x328"
    },
    {
        image: "https://via.placeholder.com/280x328"
    },
    {
        image: "https://via.placeholder.com/280x328"
    },
    {
        image: "https://via.placeholder.com/280x328"
    },
    {
        image: "https://via.placeholder.com/280x328"
    }
]

const SingleTeamImage = ({image}) => {
    return(
        <SingleTeamImageStyle>
            <div className="img-box">
            <img src={image} alt="team-members" />
            </div>
        </SingleTeamImageStyle>
    )
}

const TeamSection = () => {
    return (
        <TeamSectStyle>
            <div className="ourTeam">
                <p>Our Team</p>
            </div>        
            <div className="teamImages">
            {
                data.map((teamImages, index) => (
                    <SingleTeamImage key={index} {...teamImages} />
                ))
            }
            </div>
        </TeamSectStyle>
    )
}

export default TeamSection;

const SingleTeamImageStyle = styled.div`
    width: 280px;
    height: 328px;
    background-color: #C4C4C4;

`

const TeamSectStyle = styled.section`
    width: 100%;
    padding: 0 5%;
    padding-top: 5%;

    .ourTeam{
        justify-self: center;
        text-align: center;
        font-size: 40px;
        font-weight: 700;
        line-height: 58.07px;
    }

    .teamImages{
        margin-top: 46px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
        grid-gap: 2rem;
        padding: 0 60px;
         @media (max-width:  500px) {
            grid-template-columns: repeat(1, 1fr);
            padding: 0 60px;
        } 
    }

`