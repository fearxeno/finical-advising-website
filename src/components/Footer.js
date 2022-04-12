import React from 'react'

import './Footer.css'

function Footer() {
  return (
    <div className='footer' id='footer'>
             <nav className='navbar'>
           
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/'>Testimonials</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/'>Demo</a>
                    </li>

                </ul>
            </nav>
            <div className='bottom'>
                    
                    <p>2022 Execute, Inc. All rights reserved</p>
                </div>
    </div>
  )
}

export default Footer