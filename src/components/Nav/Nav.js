import React, { Component } from 'react';
import './Nav.css';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import { Link, animateScroll as scroll } from "react-scroll";


class Nav extends Component {


    render(){
        return (
            <section className = "nav">
                <div className = "button-box">
                <Link
                    to = "about-section"
                    activeClass = "active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500} 
                >
                    <Button>About</Button>
                </Link>
                <Link
                    to = 'portfolio-section'
                    activeClass = "active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}  
                >
                    <Button>Projects</Button>
                </Link>
                <Link
                    to = 'resume-section'
                    activeClass = "active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}  
                >
                    <Button>Resume</Button>
                </Link>
                <Link
                    to = 'contact-section'
                    activeClass = "active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >
                    <Button>Contact</Button>
                </Link>
                </div>
            </section>
        )
    }
}

export default Nav