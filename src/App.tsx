import React from "react";
import Navigation from "./component/navigation/Navigation";
import "./App.scss";
import Banner from "./component/banner/Banner";
import Category from "./component/category/Category";
import Footer from "./component/footer/footer";
function App() {
  return (
    <div className="app">
      <Navigation />
      <Banner />
      <Category />
      <Footer/>
    </div>
  );
}

export default App;
