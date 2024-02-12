import React from 'react';
import './timeline.css' // Import your CSS file with timeline styles

function Timeline() {
  return (
    <ul className="timeline">
      {/* Item 1 */}
      <li>
        <div className="direction-r">
          <div className="flag-wrapper">
            <span className="hexa"></span>
            <span className="flag">Emergency Request Received</span>
            <span className="time-wrapper"><span className="time">0 min</span></span>
          </div>
          <div className="desc">We get emergency request from the user</div>
        </div>
      </li>

      {/* Item 2 */}
      <li>
        <div className="direction-l">
          <div className="flag-wrapper">
            <span className="hexa"></span>
            <span className="flag">Verify OTP & Get User's Location</span>
            <span className="time-wrapper"><span className="time">2 min</span></span>
          </div>
          <div className="desc text-start">While the user calls us , he has to verity an OTP , after that we receive the location of of the victim</div>
        </div>
      </li>

      {/* Item 3 */}
      <li>
        <div className="direction-r">
          <div className="flag-wrapper">
            <span className="hexa"></span>
            <span className="flag">Dispatch The Services</span>
            <span className="time-wrapper"><span className="time">3 min</span></span>
          </div>
          <div className="desc">After we verify the user's location and OTP then we quickly dispatch our ambulances and services to the spot </div>
        </div>
      </li>

      {/* Item 4 */}

      <li>
        <div className="direction-l">
          <div className="flag-wrapper">
            <span className="hexa"></span>
            <span className="flag">Victim Saved</span>
            <span className="time-wrapper"><span className="time">15 min</span></span>
          </div>
          <div className="desc">After the ambulance reaches the spot , the patient is safely brought to the hospital </div>
        </div>
      </li>

      {/* Add more hardcoded items as needed */}


    </ul>
  );
}

export default Timeline;
