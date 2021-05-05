import React, { Component } from 'react'
import './contact.scss'
import { Link } from 'react-router-dom'

class Contact extends Component{
    state={
        linkedIn:"linkedIn__wrapper",
        gmail:"gmail__wrapper",
        gitHub:"gitHub__wrapper"
    };

    handleLinkedIn=(event)=>{
        event.preventDefault();
        if(this.state.linkedIn==="linkedIn__wrapper"){
        this.setState({
            linkedIn:"linkedIn__hover"
        })}
        else {
            this.setState({
                linkedIn:"linkedIn__wrapper"
            })
        }
    }
    handleGmail=(event)=>{
        event.preventDefault();
        if(this.state.gmail==="gmail__wrapper"){
        this.setState({
            gmail:"gmail__hover"
        })}
        else {
            this.setState({
                gmail:"gmail__wrapper"
            })
        }
    }
    handleGitHub=(event)=>{
        event.preventDefault();
        if(this.state.gitHub==="gitHub__wrapper"){
        this.setState({
            gitHub:"gitHub__hover"
        })}
        else {
            this.setState({
                gitHub:"gitHub__wrapper"
            })
        }
    }
    render(){
        return(
            <div className="test">
            <ul className="return__wrapper">
             <div className="nav">
             <Link to="/" className="return__link">
                <li className="return__list">HOME
                    <span className="return__span"><span>HOME</span></span>
                    <span className="return__span"><span>HOME</span></span>
                </li>
             </Link>
             <Link to="/about" className="return__link">
                <li className="return__list">ABOUT
                    <span className="return__span"><span>ABOUT</span></span>
                    <span className="return__span"><span>ABOUT</span></span>
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
                <div className={this.state.linkedIn} onClick={this.handleLinkedIn}>
                    <img src="src/assets/images/LinkedIn-Logos/LI-Logo.png" className="linkedIn" />
                </div>
                <div className={this.state.gmail} onClick={this.handleGmail}>
                    <img src="src/assets/images/iconfinder_gmail_1220367.png" className="gmail"/>
                </div>
                <div className={this.state.gitHub} onClick={this.handleGitHub}>
                <img src="src/assets/images/GitHub-Logos/GitHub_Logo_White.png" className="gitHub"/> 
                </div>
             <div className="linkedIn__title--wrapper">
                <a className="contact_title" href="https://www.linkedin.com/in/michael-allan-480a961a1">https://www.linkedin.com/in/michael-allan-480a961a1</a>
                </div>
                <div className="gmail__title--wrapper">
                <h1 className="contact_title">michaelAllan96@gmail.com</h1>
                </div>
                <div className="gitHub__title--wrapper">
                <a href="https://github.com/MikeA96" className="contact_title">https://github.com/MikeA96</a>
            </div>
            </div>
        )
    }
}
export default Contact