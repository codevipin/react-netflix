import React from "react";
import Navigation from "./component/navigation/Navigation";
import "./App.scss";
import Banner from "./component/banner/Banner";
import Category from "./component/category/Category";
function App() {
  return (
    <div className="app">
      <Navigation />
      <Banner />
      <Category />
    </div>
  );
}

export default App;
