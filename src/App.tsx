import React from "react";
import Navigation from "./component/navigation/Navigation";
import "./App.scss";
import Banner from "./component/banner/Banner";
import ContentList from "./component/content-list/ContentList";
function App() {
  return (
    <div className="app">
      <Navigation />
      <Banner />
      <ContentList />
    </div>
  );
}

export default App;
