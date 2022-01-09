import React from 'react'
import IntroSection from '../components/about/IntroSection'
import Testimonial from '../components/about/Testimonial'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/home/Hero'
import Service from '../components/services/Service'

const Services = () => {
    return (
        <>
            <Header />
            <Hero 
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                subTitle="our services"
                content= {` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et convallis lacus, eget suspendisse. A varius mattis laoreet enim viverra ligula eget. Volutpat et, nec dui luctus aliquam tortor.`
            }
            height= '700px'
            />   
            <IntroSection />
            <Service />
            <Faq />
            <Testimonial />
            <Footer />
        </>
    )
}

export default Services
