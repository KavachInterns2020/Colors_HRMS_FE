import React from 'react'
import styled from "styled-components"
const Header = () => {
    return (
        <div>
            <MainContainer>
                <h1>Welcome to Colors HRMS</h1></MainContainer>
            
        </div>
    )
}

export default Header
const MainContainer=styled.header`
h1{
    transform:translate(-50%,-50%);
    color:#fff;
    font-weight:900;
    position:absolute;
    top:25%;
    left:50%;
}`;