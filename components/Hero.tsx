"use client";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-start h-screen text-white"
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10 text-left max-w-2xl  ml-36">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Новото поколение никотин
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Дългосрочно насищане на никотини без тютюн и неприятна миризма.
        </p>
        <a
          href="#"
          className="inline-block bg-sky-400 text-white py-3 px-6 rounded hover:bg-red-700"
        >
          Разгледай
        </a>
      </div>
    </section>
  );
};

export default Hero;
