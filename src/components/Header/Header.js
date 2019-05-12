import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import ContactPhone from '@material-ui/icons/ContactPhone';
import Email from '@material-ui/icons/Email';

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
                    <div className={'header-line'}>
                        <p><ContactPhone/></p>
                        <p> 612-615-8252</p>
                    </div>
                    <div className={'header-line'}>
                        <p><Email/></p>
                        <p> waltkbenson@gmail.com</p>
                    </div>
                    
                </div>
            </section>
        )
    }
}

export default Header