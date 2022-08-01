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
                <h5>Comments</h5>
              </div>
              <div className="notification-update-toggel">
                <div class="form-check form-switch">
                  <p>Get updates if anybody comments on your ad.</p>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    class="form-check-label"
                    for="flexSwitchCheckDefault"
                  ></label>
                </div>
              </div>
            </div>
          </div>

          <div className="notification-recommendation">
            <div className="notification-update-recommendations">
              <h5>Views </h5>
            </div>
            <div className="notification-recommendation-toggel">
              <div class="form-check form-switch">
                <p>Receive updates on every 1000 views on your ad.</p>
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  class="form-check-label"
                  for="flexSwitchCheckDefault"
                ></label>
              </div>
            </div>
          </div>

          <div className="Expiry-recommendation">
            <div className="expiry-update-recommendations">
              <h5>Expire</h5>
            </div>
            <div className="expiry-recommendation-toggel">
              <div class="form-check form-switch">
                <p>Get updates when your ad about to expire.</p>
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  class="form-check-label"
                  for="flexSwitchCheckDefault"
                ></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Usernotification;
