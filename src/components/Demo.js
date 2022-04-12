import React from 'react'

import './Demo.css'

function Demo() {
  return (
    <div className='demo' id='demo'>
        <div className='container'>
            <div className='col-1'>
                <p>More Than 100 Financial Planners,</p>
                    <p>One Philosophy</p>
                    <p>Every single one of our financial advisors receives rigorous training according to John Doe’s philosophy based on academic research (including that of a Nobel laureate in Economics) and Behavioral Finance.</p>
                    <button className='button'>Get your free financial analysis</button>
            </div>
            <div className='col-2'>
               <iframe width="560" height="320" src="https://www.youtube.com/embed/vY3rMOZX7o4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
  )
}

export default Demo