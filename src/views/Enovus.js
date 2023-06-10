import React from 'react'

import Header from '../components/layout/Header';
import './styles.css';
import enovus_logo from './enovus_logo.png'

const Enovus = () => {
  return (
    <div className="main">
      <Header />
      <div className="objects">
        <ul className="box">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className='main-div'>
        <div id="box2">
          <div id="text">E-NOVUS '22</div>
        </div>
        <div id="box1">
          <div id="image">
            <img
              src={enovus_logo}
              
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Enovus;
