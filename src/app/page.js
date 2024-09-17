// pages/index.js
"use client";
import { useState } from 'react';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '@/components/Navbar';
import Carousel from '@/components/Carousel';
import ButtonSection from '@/components/ButtonSection';
import UrlInput from '@/components/UrlInput';

export default function Home() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [showUrlInput, setShowUrlInput] = useState(false);

  const titles = ["First Text", "Second Text", "Third Text"];

  const handleUpdateTitle = () => {
    setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    document.title = titles[titleIndex];
  };

  const handleOpenUrl = () => {
    setShowUrlInput(!showUrlInput);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{titles[titleIndex]}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <Carousel />
        <ButtonSection onUpdateTitle={handleUpdateTitle} onOpenUrl={handleOpenUrl} />
        {showUrlInput && <UrlInput />}
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          &copy; 2024 My Next.js App
        </div>
      </footer>

      <ToastContainer />
    </div>
  );
}