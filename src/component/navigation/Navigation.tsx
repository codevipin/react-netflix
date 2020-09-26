import React from "react";
import "./Navigation.scss";
function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-content">
        <img
          alt="netflix logo"
          className="nav-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        />
        <img
          className="avatar-logo"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="profile avatar"
        />
      </div>
    </nav>
  );
}

export default Navigation;
