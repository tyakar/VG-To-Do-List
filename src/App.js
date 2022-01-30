import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "./assets/layout.css";
import Footer from "./Layout/Footer";
import React from "react";
import Header from "./Layout/Header";
import Content from "./Layout/Content";
import Counter from "./Samples/Counter";
import Counter2 from "./Samples/Counter2";
function App() {


  return (
    <div>
        <Header/>
        <Content/>
        <Footer/>
        {/*<Counter/>*/}
        {/*<Counter2/>*/}
    </div>
  );
}

export default App;
