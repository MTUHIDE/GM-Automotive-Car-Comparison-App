import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer>
        <div className='footer'>
            <div className='footer-content'>
                <div className='footer-logo'>
                    <img src='/gm-logo.png' alt='gm logo' style={{ width: '80px', height: '80px' }} />
                </div>
                <div className='footer-copyright'>@All rights reserved </div>

                <div className='footer-social-icons'>
                    <div className='footer-social-icon' >
                      <img src='/gmc-logo.png' alt='gm logo' />
                    </div>
                    <div className='footer-social-icon' >
                        <img src='/cadillac-logo.png' alt='cadillac logo' />
                    </div>
                    <div className='footer-social-icon' >
                        <img src='/chevy-logo.png' alt='chevy logo' style={{ width: '80px', height: '40px' }} />
                    </div>
                    <div className='footer-social-icon' >
                        <img src='/buick-logo.png' alt='gm logo' style={{ width: '80px', height: '40px' }}/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
