import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';

class Header extends Component {


    render(){
        return (
            <section className={'landing-page'}>
                <div className='avatar-box'>
                    < Avatar src = {'../../../images/your_face.jpg'} className={'avatar'}/>
                </div>
                <div className='landing-info'>
                    <h1>Walter Benson</h1>
                    <p>Web Developer building applications in React and Node</p>
                </div>
            </section>
        )
    }
}

export default Header