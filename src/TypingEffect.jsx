import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const fullText = 'Welcome..';

  useEffect(() => {
    let isMounted = true;
    let currentIndex = 0;
    let timeoutId;

    const typeText = () => {
      if (!isMounted) return;
      if (currentIndex < fullText.length) {
        setText((prevText) => prevText + fullText[currentIndex]);
        currentIndex += 1;
        timeoutId = setTimeout(typeText, 100); // Ubah angka ini untuk mengatur kecepatan pengetikan
      }
    };

    typeText();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId); // Membersihkan timeout saat komponen di-unmount
    };
  }, []);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default TypingEffect;
