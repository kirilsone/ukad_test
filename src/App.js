import React from "react";
import './App.css';
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";

const App = () => {
  return (
      <div className={'appWrap'}>
          <Header/>
           <div id={'main'}>
              <Products/>
               <Home/>
           </div>
          <Footer/>
      </div>
  );
}

export default App;

