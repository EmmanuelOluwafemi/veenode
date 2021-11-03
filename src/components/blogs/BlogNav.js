import React from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai';


const BlogNav = () => {
    return (
        <BlogNavStyle>
                    <ul className ="blogList">
                        <li className="blogListItem">All</li>
                        <li className="blogListItem">Marketing</li>
                        <li className="blogListItem">Technology</li>
                        <li className="blogListItem">Blockchain</li>
                    </ul>
                    <div className="searchIcon">
                    <AiOutlineSearch/>                    
                    </div>
        </BlogNavStyle>
    )

}
export default BlogNav

const BlogNavStyle = styled.div`
          
        display: flex;
        justify-content: space-between;
        width: 75%;
        margin-left: 16%;
        margin-bottom: 113px;

    .blogList{
        list-style-type: none;
        display: flex;
        color: #000000;
        font-weight: 600;
        font-size: 20px;
    }
    .blogListItem{
        margin-right: 32px;
        cursor: pointer;
    }
    .searchIcon{
        font-size: 25px;
    }   
`