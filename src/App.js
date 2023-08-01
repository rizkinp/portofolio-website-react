import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Portofolio from './components/Portofolio/Portofolio';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import FormKontak from "./FormKontak";

import Preloader from "./Preloader";


function App() {
  const animationDuration = 2000; // Durasi animasi (dalam milidetik)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, animationDuration);

    return () => clearTimeout(preloaderTimeout);
  }, []);

  return (
    <div className={`App ${isLoading ? "loading" : "loaded"}`}>
      {isLoading ? <Preloader /> : (
        <>
          <Navbar/>
          <Header/>
          {/* <Portofolio/> */}
          <About/>
          <Services/>
          {/* <Kontak/> */}
          <FormKontak/>
          <Footer/>
        </>
      )}
    </div>
  );
}

export default App;
