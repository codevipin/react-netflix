import React, { useEffect, useState } from "react";
import "./Navigation.scss";
function Navigation() {
  const [isNavBlack, setBlackNav]: [boolean, Function] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      if (window.scrollY > 100) {
        setBlackNav(true);
      } else {
        setBlackNav(false);
      }
      return () => {
        window.removeEventListener("scroll", () => {});
      };
    });
  }, []);
  return (
    <nav className={`navigation ${isNavBlack && "nav-black"}`}>
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
