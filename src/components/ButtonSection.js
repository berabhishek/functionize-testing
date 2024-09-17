// components/ButtonSection.js
"use client";
import { useState } from 'react';
import { toast } from 'react-toastify';

const ButtonSection = ({ onUpdateTitle, onOpenUrl }) => {
  const [buttonColor, setButtonColor] = useState('bg-blue-500');

  const handleShowSnack = () => {
    toast("Hey toast!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleChangeColor = () => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-500'];
    const currentIndex = colors.indexOf(buttonColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setButtonColor(colors[nextIndex]);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <button
        onClick={handleShowSnack}
        className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
      >
        Show Snacker
      </button>
      {/* <button
        onClick={handleChangeColor}
        className={`${buttonColor} hover:opacity-80 text-white font-bold py-2 px-4 rounded`}
      >
        Change Color
      </button> */}
      <button
        onClick={onUpdateTitle}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Update Title
      </button>
      <button
        onClick={onOpenUrl}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
      >
        Open URL
      </button>
    </div>
  );
};

export default ButtonSection;