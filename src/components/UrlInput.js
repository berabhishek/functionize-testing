// components/UrlInput.js
"use client";
import { useState } from 'react';
import { toast } from 'react-toastify';

const UrlInput = () => {
  const [url, setUrl] = useState('');

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    let formattedUrl = url.trim();
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      formattedUrl = 'https://' + formattedUrl;
    }
    const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (urlPattern.test(formattedUrl)) {
      window.open(formattedUrl, '_blank');
    } else {
      toast.error("Invalid URL format", {
        position: "bottom-right",
      });
    }
  };

  return (
    <form onSubmit={handleUrlSubmit} className="mb-4">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-500"
      />
    </form>
  );
};

export default UrlInput;