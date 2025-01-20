import React, { useState, useEffect } from 'react';

const CursorSnack = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    // Listen for mouse movement events
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
    className="snack fixed top-0 left-0"
    style={{
      transform: `translate(${cursorPosition.x - 30}px, ${cursorPosition.y - 30}px)`,
      transition: 'transform 0.1s ease-out',
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      className="text-red-500"
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  </div>
  
  );
};

export default CursorSnack;
