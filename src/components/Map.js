import React from 'react'
import './map.css'
import Location from '../assets/FBFLocation.png'


const Map = () => {
  return (
    <div>
      <img id="map" alt="google map of Forever Body Fitness with I-5 in view" src={Location}></img>
      <h2>Directions</h2>
      <div id="container">
        <div id="leftDirections">
          <h3>From North I-5</h3>
          <ul>
            <li>Take Exit 181B toward SR-524</li>
            <li>Continue onto Alderwood Mall Pkwy</li>
            <li>Turn Right onto 196th St SW</li>
            <li>Turn Left onto 21st Ave W</li>
            <li>Turn Right into parking lot</li>
          </ul>
        </div>
        <div id="rightDirections">
          <h3>From South I-5</h3>
          <ul>
            <li>Take Exit 181A toward 196th St SW</li>
            <li>Keep left at the fork to go toward East bound 196th St SW</li>
            <li>Merge onto 196th St SW</li>
            <li>Turn Left onto 21st Ave W</li>
            <li>Turn Right into parking lot</li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Map;
