"use client";
import React from "react";

const VideoCTA: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center h-96 bg-blue-50  text-blue-900 ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10 text-center">
        {/* <button className="mt-4 rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-2 font-medium text-white transition hover:translate-y-1">
          Click Me
        </button> */}
      </div>
    </section>
  );
};

export default VideoCTA;
