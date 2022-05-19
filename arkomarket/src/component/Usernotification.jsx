import React from "react";
import "../scss/usernotification.scss";

const Usernotification = () => {
  return (
    <>
      <div className="user-notification-tab">
        <h5>Notifications</h5>
        <div classname="notification-container">
          <div className="notification-update">
            <div className="notification-update-Head">
              <div className="notification-update-details">
                <h5>Receive updates & Offers</h5>
              </div>
              <div className="notification-update-toggel">
                <div class="form-check form-switch">
                <p>Get notified for special offers, updates and more</p>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  <label class="form-check-label" for="flexSwitchCheckDefault">
                  
                  

                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="notification-recommendation">
            <div className="notification-update-recommendations">
              <h5>Recommendations</h5>
            </div>
            <div className="notification-recommendation-toggel">
              <div class="form-check form-switch">
              <p>Receive recommendations based on your activity</p>
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label class="form-check-label" for="flexSwitchCheckDefault">
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Usernotification;
