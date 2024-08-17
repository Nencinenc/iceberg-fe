import React from "react";
import AboutImg from "@/assets/about.png";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex gap-10 flex-wrap items-center justify-center p-4">
      <div className="mb-6 max-w-xl">
        <h2 className="mb-6 max-w-lg text-3xl font-extrabold  sm:text-5xl sm:leading-snug">
          Открийте новото усещане с<span className="inline-block bg-sky-400 ml-2 px-2 font-bold ">ICEBERG</span>!
        </h2>
        <p className="text-lg">
          Ние от ICEBERG предлагаме най-високо качество никотинови паучове. Прилагаме най-съвременните производствени
          технологии, за да успеете лесно да задоволите никотиновите си нужди.
        </p>
      </div>
      <Image className="h-full sm:w-1/3 w-full object-cover" src={AboutImg} alt="" />
    </div>
  );
};

export default About;
