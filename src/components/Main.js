import React from 'react';
import "./Main.scss";
import Exterior from '../assets/Exterior.JPG'
import InBody from '../assets/InBodyCropped.jpg'
import KaydenRopes from '../assets/KaydenRopes.jpg';

const Main = () => {
  return (
    <div id="main">
      <img className="Facility" id="exterior" alt="front of building with Forever Body Fitness sign above the entrance" src={Exterior}></img>
      <div className='Container'>
        <img className="LeftImage" id="InBody" alt="InBody scanner" src={InBody}></img>
          <div className="descriptionRight">
            <h4>InBody Scanner</h4>
            <p>InBody Scanner to help assess body fat percentage/lean muscle mass. Can tell you which limb has what percentage of your body weight and muscle mass as well as your core!</p>
          </div>
      </div>
      <div className='ContainerRight'>
        <div className="descriptionLeft">
          <h4>Battle Ropes</h4>
          <p>Random Description of Battle ropes</p>
        </div>
        <img className="RightImage" id="InBody" alt="Kayden in altitude mask using ropes" src={KaydenRopes}></img>
      </div>
    </div>
  )
}
export default Main;