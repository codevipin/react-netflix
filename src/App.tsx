import React from "react";
import Navigation from "./component/navigation/Navigation";
import "./App.scss";
import Banner from "./component/banner/Banner";
function App() {
  return (
    <div className="app">
      <Navigation />
      <Banner />
    </div>
  );
}

export default App;
