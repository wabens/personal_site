import React, { Component } from 'react';
import './Nav.css';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import { Link, animateScroll as scroll } from "react-scroll";


class Nav extends Component {


    render(){
        let offset = 10;
        return (
            <section className = "nav">
                <div className = "button-box">
                <Link
                    to = "about-section"
                    activeClass = "active"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration= {500} 
                >
                    <Button size='large'><h3>About</h3></Button>
                </Link>
                <Link
                    to = 'portfolio-section'
                    activeClass = "active"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration= {500}  
                >
                    <Button size='large'><h3>Projects</h3></Button>
                </Link>
                <Link
                    to = 'resume-section'
                    activeClass = "active"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration= {500}  
                >
                    <Button size='large'><h3>Resume</h3></Button>
                </Link>
                <Link
                    to = 'contact-section'
                    activeClass = "active"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration= {500}
                >
                    <Button size='large'><h3>Contact</h3></Button>
                </Link>
                </div>
            </section>
        )
    }
}

export default Nav