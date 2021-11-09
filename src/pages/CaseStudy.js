import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Hero from '../components/home/Hero'
import Footer from '../components/Footer'
import Introduction from '../components/caseStudy/Introduction'
import VisualContent from '../components/caseStudy/VisualContent'
import OutroContent from '../components/caseStudy/OutroContent'
import NextCaseStudy from '../components/caseStudy/NextCaseStudy'

const CaseStudy = () => {
    return (
        <StyledCase>
            <Header />
            <Hero 
                height="290px"
                title="Lorem ipsum dolor sit amet"
                subTitle="Proffessional services"
            />
            <Introduction/>
            <VisualContent />
            <OutroContent />
            <NextCaseStudy/>
            <Footer/>
        </StyledCase>
    )
}

export default CaseStudy

const StyledCase = styled.div `
    width: 100%;

    
`