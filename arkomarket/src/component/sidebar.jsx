import React from "react";
import $ from "jquery";
const Sidebar = () => {
  $("#myTab a").on("click", function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
  $(function () {
    $("#myTab li:last-child a").tab("show");
    $('#someTab').tab('show')
  });
 
  return (
    <>
      <div>
        {/* Nav tabs */}
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="messages-tab"
              data-toggle="tab"
              href="#messages"
              role="tab"
              aria-controls="messages"
              aria-selected="false"
            >
              Messages
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="settings-tab"
              data-toggle="tab"
              href="#settings"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Settings
            </a>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content">
          <div
            className="tab-pane active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            ...
          </div>
          <div
            className="tab-pane"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            ...
          </div>
          <div
            className="tab-pane"
            id="messages"
            role="tabpanel"
            aria-labelledby="messages-tab"
          >
            ...
          </div>
          <div
            className="tab-pane"
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            apple
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
