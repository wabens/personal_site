import React, { Component } from 'react';
import './Nav.css';

import Button from '@material-ui/core/Button';


class Nav extends Component {


    render(){
        return (
            <section className = "nav">
                <div className = "button-box">
                    <Button>About</Button>
                    <Button>Projects</Button>
                    <Button>Resume</Button>
                    <Button>Contact</Button>
                </div>
            </section>
        )
    }
}

export default Nav