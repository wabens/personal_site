import React, { Component } from 'react';

class Resume extends Component {


    render(){
        return (
            <section className='content-box' id='resume-section'>
                <h2>Resume</h2>
                <div className={'resume-div'}>
                    <object width={'100%'} height={'100%'} data={'../../../images/resume.pdf'}></object>
                </div>
            </section>
        )
    }
}

export default Resume