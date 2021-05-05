import React, { Component } from 'react'
import './about.scss'
import {Link} from 'react-router-dom'

class About extends Component{
    render(){
        return(
            <div className="about">
                 <ul className="return__wrapper">
             <div className="nav">
             <Link to="/" className="return__link">
                <li className="return__list">HOME
                    <span className="return__span"><span>HOME</span></span>
                    <span className="return__span"><span>HOME</span></span>
                </li>
             </Link>
             <Link to="/contact" className="return__link">
                <li className="return__list">CONTACT
                    <span className="return__span"><span>CONTACT</span></span>
                    <span className="return__span"><span>CONTACT</span></span>
                </li>
             </Link>
             <Link to="/work" className="return__link">
                <li className="return__list">WORK
                    <span className="return__span"><span>WORK</span></span>
                    <span className="return__span"><span>WORK</span></span>
                </li>
             </Link>
             </div>
             </ul>
            <div className="about__heading">
                <h1  className="about__title">Michael Allan</h1>
                <h3 className="about__sub-title">Web Developer</h3>
            </div>
            <div className="about__description">
                I was first introduced to the field of
                web development by a friend and was instantly hooked! I have been seeking
                a career I am truly engaged in and this is the right fit for me. I am confident 
                my problem solving skills and tenacity will be an asset in a Web Developer position.
            </div>
            <div className="about__layout">
            <div className="about__experience--wrapper">
            <h3 className="about__experience">Experience</h3>
                <div className="experience__wrapper">
                    <h4 className="experience__title">Research Assistant | Explorer Research </h4> 
                    <p className="experience__sub-title">May 2017 - March 2020, Mississauga ON :</p>
                    <ul className="experience__list">
                        <li className="experience__item">
                            Assisted in data colection, and in-store research with a focus on biometric technology.
                        </li>
                        <li className="experience__item">
                            Travelled within and outside Canada to conduct sruveys in-store.
                        </li>
                        <li className="experience__item">
                            Organized the warehouse and constructed shelving in Mississauga and Montreal to mimic in-store settings for surveys. 
                        </li>
                        
                    </ul>
                </div>
                <div className="experience__wrapper">
                <h4 className="experience__title"> Labourer  |  DC Electrical Contractors</h4>
                    <p className="experience__sub-title">  November 2018 -June 2019,  Mississauga, ON</p>
                    <ul className="experience__list">
                        <li className="experience__item">
                        Helped other Apprentices and Journeyman Electricians in their daily duties.
                        </li>
                        <li className="experience__item">
                            Ran wiring throughout houses and commercial sites.
                        </li>
                        <li className="experience__item">
                        Installed plugs, fans, and overhead fixtures as well as made supply runs and cleaned. 
                        </li>
                    </ul>
                </div>
                <div className="experience__wrapper">
                <h4 className="experience__title">Program Director  | Arrowhead Camp</h4>
                    <p className="experience__sub-title">  Summer 2013-2016, Dwight, ON</p>
                    <ul className="experience__list">
                        <li className="experience__item">
                        Organized and supervised all events that took place at camp during non-activity time, as well as all all-day events.
                        </li>
                        <li className="experience__item">
                        Supervised, planned and implemented the biking and nature program.
                        </li>
                        <li className="experience__item">
                        Taught children how to mountain bike which entailed riding on trails, teaching proper form, and teaching children how to bike. 
                        </li>
                    </ul>
                </div>
                </div>
                
                
                <div className="about__education">
                <h3 className="about__education--title">Education</h3>
                <div className="about__education--wrapper">
                    <h4 className="education__title">Brainstation | Diploma, Web Development</h4>
                    <p className="education__sub-title">SEP - DEC  2020, ONTARIO, CA</p>
                    <h4 className="education__title">Queen’s University |   Bachelor of Arts in Philosophy</h4>
                    <p className="education__sub-title"> 2014 - 2018,  KINGSTON, ON</p>
                    <h4 className="education__title">Ursula Franklin Academy   |  High-School Diploma</h4>
                    <p className="education__sub-title">2010 -   2014, ONTARIO, CA</p>
                    </div>
                </div>
                </div>
                <div className="about__skills">
                    <h3 className="skills__title">Skills</h3>
                    <p className="skills__sub-title">HTML5, CSS, JavaScript, React, DOM API’s, Node.js, Express.js, JWT, SQL, MongoDB</p>
                </div>
           </div>
        )
    }
}
export default About