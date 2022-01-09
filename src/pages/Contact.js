import React from 'react'
import ContactInfo from '../components/ContactInfo'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/home/Hero'

const Contact = () => {
    return (
        <>
            <Header />
            <Hero 
                title="NEW PROJECT ON THE HORIZON? LET'S PARTNER UP"
                subTitle="CONTACT US"
                content= {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et convallis lacus, eget suspendisse. A varius mattis laoreet enim viverra ligula eget. Volutpat et, nec dui luctus aliquam tortor.`}
                height= '700px'
            />
            <ContactInfo />
            <Footer />
        </>
    )
}

export default Contact
