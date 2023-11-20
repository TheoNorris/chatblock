"use client";

import React, { useEffect, useState } from "react";

function Typewriter() {
  const text = "CONNECT. CHAT. REPEAT";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = 100; // Adjust the typing speed here

    const typing = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typing, typingInterval);
      }
    };

    typing();
  }, []);

  return <p className="connect-p">{displayText}</p>;
}

export default Typewriter;
