import React from 'react'
import styled from 'styled-components'

const data = [
    {
        title: "Title",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac lacinia senectus nunc egestas sit mauris at. Praesent sollicitudin sit vel, duis nisi. Purus facilisi amet augue porta malesuada sollicitudin tempus in tortor. Nec odio pellentesque augue adipiscing morbi. Magna eros."
    },
    {
        title: "Title",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac lacinia senectus nunc egestas sit mauris at. Praesent sollicitudin sit vel, duis nisi. Purus facilisi amet augue porta malesuada sollicitudin tempus in tortor. Nec odio pellentesque augue adipiscing morbi. Magna eros."
    },
    {
        title: "Title",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac lacinia senectus nunc egestas sit mauris at. Praesent sollicitudin sit vel, duis nisi. Purus facilisi amet augue porta malesuada sollicitudin tempus in tortor. Nec odio pellentesque augue adipiscing morbi. Magna eros."
    },
    {
        title: "Title",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac lacinia senectus nunc egestas sit mauris at. Praesent sollicitudin sit vel, duis nisi. Purus facilisi amet augue porta malesuada sollicitudin tempus in tortor. Nec odio pellentesque augue adipiscing morbi. Magna eros."
    }
]

const SingleValue = ({title, text}) => {
    return(
        <SingleValueStyle>
            <div className="img-box">
            <img src="https://via.placeholder.com/170x154" alt=" values"/>
            </div>
            <div className="value-details">
            <p className="values-title">{title}</p>
            <p className="values-text">{text}</p>
            </div>
        </SingleValueStyle>
    )
}

const ValueSection = () => {
    return (
        <ValueSectStyle>
         <div className="ourVals">
             <p>Our Values</p>
         </div>
         <div className="content">
            <div className="value-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra feugiat risus est fringilla. Ultricies massa iaculis facilisis tristique ante amet, turpis. Sed ullamcorper maecenas nibh tortor. In libero sit est neque. Commodo dolor.
            </div>
            <div className="value-box">
            {
                data.map((value, index) => (
                    <SingleValue key={index} {...value} />
                ))
            }
            </div>
         </div>
        </ValueSectStyle>
    )
}


const SingleValueStyle = styled.div`
     width: 380px; 
    height: 638px;
    background: #00111D;
    color: #fff;
    padding: 10% 10%;

    .values-title{
        font-size: 32px;
        font-weight: 600;
        line-height: 46.46px;
        margin-top: 20px;
    }

    .values-text{
        font-size: 20px;
        line-height: 29.04px;
        font-weight: 400;
        font-style: normal;
        margin-top: 20px;
    }

`


export default ValueSection;

 const ValueSectStyle = styled.section`
     width: 100%;
    height: 1602px;
    background: #011F32;
    padding: 0 5%;
    padding-top: 5%;
    color: #fff;
    display: flex;
    flex-direction: column;

    @media (max-width: 672px) {
            height: fit-content;
        }
    @media (min-width:672px) and (max-width: 1074px) {
            height: fit-content;
        }    

.ourVals{
        font-weight: 600;
        font-size: 40px;
        line-height: 58.0px;
    }
    .content{
        display: flex;
        flex-direction: row;
        min-width: 100%;
        padding-top: 30px;
        justify-content: space-between;
        @media (max-width: 672px) {
            flex-direction: column;
        }
    }
    .value-text{
        width: 280px;
        min-width: 280px;
        max-width: 280px;
        height: 280px;
        font-weight: 600;
        font-size:20px;
        line-height: 29.04px;    
    }
    .value-box{
        display: grid;
        grid-template-columns: repeat(2, minmax(15rem, 1fr));
        grid-gap: 2rem;
 
        @media (max-width: 672px) {
            flex-direction: column;
            grid-template-columns:  repeat(1, 1fr);

        }
        @media (min-width:672px) and (max-width: 1074px) {
            grid-template-columns:  repeat(1, 1fr);
        }
    }
`

   



    
