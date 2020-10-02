import React from 'react'
import './footer.scss';
import { ReactComponent as Piclog } from './fot.svg';

const Footer = () => {
    return (
        <div className='foter' id='footer' >

            <div className='touch' >
                <h2 className='touchtext' >Don’t be a stranger</h2>
                <h3 className='touchtext2' >just say hello.</h3>
                <p style={{ width: '100%' }} >Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <p  >Need help?</p>
                <span className="far fa-envelope"  >{'   '}sanglm2207@gmail.com</span>



                <p className='mt2'  >Feel like talking ?</p>

                <span className="fab fa-whatsapp "  >{'   '}  0762121242</span>
                <p className='mt2'  > Want to Hire me?</p>
                <span className="fab fa-twitter"     >{' https://twitter.com/'}sanglm2207</span>

                <span className="fab fa-facebook"     >{' https://www.facebook.com/'}sanglm2207</span>


                <div className='row' >
                    <p >Made with<span role="img" aria-label="heart">❤️ </span> by Sang</p>
                </div>
            </div>

            < Piclog className='picl' />

        </div>
    )
}

export default Footer;
