import React, { useEffect, useState } from "react";
import "./Preloader.css";

const languages = ["Halo", "Bonjour", "Hola", "你好", "مرحبا"];
const animationDuration = 200; // Durasi animasi (dalam milidetik)

const Preloader = () => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    let interval;

    const animateLanguages = () => {
      setCurrentLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
    };

    // Membuat animasi berulang setiap animationDuration
    const startAnimation = () => {
      animateLanguages();
      interval = setInterval(animateLanguages, animationDuration);
    };

    // Memulai animasi saat komponen dimount
    startAnimation();

    // Hentikan animasi setelah 5 detik (atau sesuai dengan durasi animasi total)
    setTimeout(() => {
      clearInterval(interval);
    }, languages.length * animationDuration);

    return () => clearInterval(interval); // Membersihkan interval saat komponen unmount
  }, []);

  return (
    <div className="preloader">
      <h1>{languages[currentLanguageIndex]}</h1>
    </div>
  );
};

export default Preloader;
