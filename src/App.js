import React from "react";
import './commonResource/css/styles.css'
import "./commonResource/css/bootstrap.css";

import Header from './commonResource/Header/Header';
import Mainall from "./commonResource/main body/mainall";
import Footer from "./commonResource/Footer";

 function App() {
  return (
    <div>
      <Header />
      <Mainall />
      <Footer/>
    </div>
  );
}

export default App;