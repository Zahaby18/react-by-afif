import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { homeSection } from "../data/HomeSection"
import { coursesSection } from "../data/CoursesSection"
import { tutorsSection, tutorsList } from "../data/TutorsSection"
import { partnersSection,partnersList } from "../data/PartnersSection"
import Tutors from "../components/Tutors"
import Partners from "../components/Partners"
import Contact from "../components/Contact"
import { contactSection } from "../data/ContactSection"

import parser from 'html-react-parser'
import '../styles/Home.css'

function Home() {
  return (
    <>
        <Navbar/>
        <div className="wrapper">
            <section id="home">
                <img src={homeSection.image}/>
                <div className="kolom">
                    {parser(homeSection.content)}
                </div>
            </section>

            <section id="courses">
                <div className="kolom">
                    {parser(coursesSection.content)}
                </div>
                <img src={coursesSection.image}/>
            </section>

            <section id="tutors">
                <div className="tengah">
                    <div className="kolom">
                        {parser(tutorsSection.content)}
                    </div>
                    <Tutors tutorsList={tutorsList}/>
                </div>
            </section>

            <section id="partners">
                <div className="tengah">
                    <div className="kolom">
                    {parser(partnersSection.content)}
                    </div>
                    <Partners partnersList={partnersList}/>
                </div>
            </section>


        </div>
        <Contact contactSection={contactSection}/>
        <Footer/>
    </>
  )
}

export default Home
