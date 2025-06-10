import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const colors = ["red", "yellow", "green"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      {colors.map((color, index) => (
        <div
          key={color}
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            backgroundColor: color,
            opacity: currentIndex === index ? 1 : 0.3,
            border: "2px solid black",
          }}
        ></div>
      ))}
    </div>
  );
};

export default TrafficLight;
