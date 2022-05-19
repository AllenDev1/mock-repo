import React from 'react'
import "../scss/usernotification.scss";
import Toggle from "./toggle";


const Usernotification = () => {
  return (
    <>
    <div className="user-notification-tab">
      <h5>Notifications</h5>
    <div classname="notification-container">
      <div className="notification-update">
      <div className="notification-update-Head">
        <div className="notification-update-details">
          <h5>gvdchjb</h5>
          <p>hjdwmns</p>
        </div>
        <div className="notification-update-toggel">
          <Toggle/>
        </div>

      </div>
      
    

      </div>
    
    <div className="notification-recomm">
    <div className="notification-update-recommendations">
          <h5>gvdchjb</h5>
          <p>hjdwmns</p>
        </div>
        <div className="notification-recommendation-toggel">
        <Toggle/>
       
        </div>

    </div>
    </div>
    </div>
    
    </>
  )
}

export default Usernotification;