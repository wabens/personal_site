import React, { Component } from 'react';


class Footer extends Component {


    render(){
        return (
            <section className = 'footer' id='contact-section'>
            <div className={`footer-line`}>    
                <h4>Contact</h4>
                    <p className={'small-p'}> 612-615-8252</p>
                    <p className={'small-p'}>waltkbenson@gmail.com</p>
            </div>
            <div className={`footer-line`}>  
                <h4>Made with</h4>
                <p className={'small-p'}>React</p>
                <p className={'small-p'}>React-scroll</p>
                <p className={'small-p'}>Material-UI</p>
            </div>  
            </section>
        )
    }
}

export default Footer