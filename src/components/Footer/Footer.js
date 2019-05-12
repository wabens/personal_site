import React, { Component } from 'react';
import ContactPhone from '@material-ui/icons/ContactPhone';
import Email from '@material-ui/icons/Email';


class Footer extends Component {


    render(){
        return (
            <section className = 'footer' id='contact-section'>
                <h4>Contact</h4>
                <div className={`footer-line`}>
                    <p className={'small-p'}><ContactPhone/></p>
                    <p className={'small-p'}> 612-615-8252</p>
                </div>
                <div className={`footer-line`}>
                    <p className={'small-p'}><Email/></p>
                    <p className={'small-p'}>waltkbenson@gmail.com</p>
                </div>
            </section>
        )
    }
}

export default Footer