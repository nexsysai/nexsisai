import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import sun and moon icons

const ThemeToggleButton = ({darkMode,setDarkMode}) => {
  // State for tracking dark mode

  // Toggle theme mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Use effect to apply dark mode class to the body when dark mode is toggled
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300"
    >
      {/* Sun icon for light mode */}
      <FaSun
        className={`text-yellow-500 transition-transform duration-300 transform ${darkMode ? "scale-0" : "scale-100"}`}
        size={14}
      />
      {/* Moon icon for dark mode */}
      <FaMoon
        className={`text-blue-500 transition-transform duration-300 transform ${darkMode ? "scale-100" : "scale-0"}`}
        size={14}
      />
    </button>
  );
};

export default ThemeToggleButton;
