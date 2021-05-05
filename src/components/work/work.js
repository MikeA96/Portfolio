import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './work.scss'


class Work extends Component{
    state={
        header:"work__heading--wrapper"
    }
    hideBlurb=()=>{
        this.setState({
            header:  "work__heading--hide"
            })
    }
    render(){
        return(
            <div className="work">
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
             <Link to="/contact" className="return__link">
                <li className="return__list">CONTACT
                    <span className="return__span"><span>CONTACT</span></span>
                    <span className="return__span"><span>CONTACT</span></span>
                </li>
             </Link>
             </div>
             </ul>
            <div className={this.state.header}>
                <h1 className="work__heading">FirstEdition</h1>
                <h3 className="work__sub-heading">A Website for People to Post Their Creative Work, recieve likes, comments, as well as meaningful Edits (If not loaded yet, just refresh the page)</h3>
                <h4 onClick={this.hideBlurb}>Click to hide blurb</h4>
            </div>
            <div className="iframe__wrapper">
            <   iframe src="https://mikesfirstedition.herokuapp.com/" height="100%" width="100%" title="FirstEdition" frameBorder="0" overflow="scroll" z-index="1" title="A Website for People to Post Their Creative Work, recieve likes, comments, as well as meaningful Edits" /*</div>position="absolute"*/></iframe>
            </div>
        </div>
        )
    }
}
export default Work