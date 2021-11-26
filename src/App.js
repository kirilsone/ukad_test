import React from "react";
import './App.css';
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
      <div className={'appWrap'}>
          <Header/>
           <div id={'main'}>
               <Routes>
                   <Route path='/home' component={Home}/>
                   <Route path='/products' component={Products}/>
               </Routes>
           </div>
          <Footer/>
      </div>
  </BrowserRouter>)
}

export default App;

