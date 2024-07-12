"use client";
import React from "react";

const VideoCTA: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-blue-50 text-blue-900 ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black opacity-10" />
    </section>
  );
};

export default VideoCTA;
