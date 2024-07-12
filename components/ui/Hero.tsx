"use client";
import React from "react";

const Hero: React.FC = () => {
  return (
   <section className="relative flex items-center justify-start h-screen text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source  src="/videos/landing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10 text-left max-w-2xl ml-36">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Новото поколение никотин
        </h1>
        <p className="text-lg md:text-xl">
          Дългосрочно насищане на никотини без тютюн и неприятна миризма.
        </p>
      </div>
    </section>
  );
};

export default Hero;
