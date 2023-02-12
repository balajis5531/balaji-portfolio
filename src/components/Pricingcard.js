import './pricingcard.css';

import React from 'react'

import { Link } from 'react-router-dom';

const pricingcard = () => {
  return (
    <div className='pricing'>
      <div className='card-container'>
        <div className='card'>
          <h3>- basic -</h3>
          <span className='bar'></span>
          <p className='btc'>$100</p>
          <p>- 3 days -</p>
          <p>- 3 pages -</p>
          <p>- 3 feature -</p>
          <p>- resposive -</p>
          <Link to="/Contact" className='btn'>
            Purchase now
          </Link>

        </div>
        <div className='card'>
          <h3>- basic -</h3>
          <span className='bar'></span>
          <p className='btc'>$100</p>
          <p>- 3 days -</p>
          <p>- 3 pages -</p>
          <p>- 3 feature -</p>
          <p>- resposive -</p>
          <Link to="/Contact" className='btn'>
            Purchase now
          </Link>

        </div>
        <div className='card'>
          <h3>- basic -</h3>
          <span className='bar'></span>
          <p className='btc'>$100</p>
          <p>- 3 days -</p>
          <p>- 3 pages -</p>
          <p>- 3 feature -</p>
          <p>- resposive -</p>
          <Link to="/Contact" className='btn'>
            Purchase now
          </Link>

        </div>
      </div>
    </div>
  )
}

export default pricingcard