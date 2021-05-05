import React,{ Component } from 'react';
import { Link } from 'react-router-dom'
import './home.scss'
//put iframe of website on site

class Home extends Component{

    render(){
        const { history }=this.props
        return(
            <>
            <div className="home__wrapper">
            <h1 className="home__header">MICHAEL ALLAN</h1>
            </div>
            <div className="home__lightning--wrapper">
            <iframe src="src/assets/images/giphy.gif" width="480" height="480" frameBorder="0" className="home__lightning" scrolling="no"  ></iframe>
            <iframe src="src/assets/images/giphy.gif" width="480" height="480" frameBorder="0" className="home__lightning" scrolling="no" ></iframe>
            </div>
            <ul className="home__list--wrapper">
                <Link to='/about' className="home__link">
                <li className="home__list">
                    ABOUT
                    <span className="home__span"><span>ABOUT</span></span>
                    <span className="home__span"><span>ABOUT</span></span>
                    </li>
                    </Link>
                    <Link to='/work' className="home__link">
                <li className="home__list" >
                    WORK
                    <span className="home__span"><span>WORK</span></span>
                    <span className="home__span"><span>WORK</span></span>
                    </li>
                    </Link>
                    <Link to="/contact" className="home__link">
                <li className="home__list"  > 
                    CONTACT 
                    <span className="home__span"><span>CONTACT</span></span>
                    <span className="home__span"><span>CONTACT</span></span>
                    </li>
                    </Link>
            </ul>
            </>
        )
    }
}
export default Home