import React from "react";
import AboutImg from "@/assets/about.png";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex gap-10 flex-wrap items-center justify-center p-4">
            <div className="mb-6 max-w-xl">
              <h2 className="mb-6 max-w-lg text-3xl font-extrabold text-white sm:text-5xl sm:leading-snug">
                Открийте новото усещане с
                <span className="inline-block bg-sky-400 ml-2 px-2 font-bold text-white">
                  Iceberg
                </span>
                !
              </h2>
              <p className="text-white text-lg">
                Насладете се на лесен и приятен начин да задоволите никотиновите
                си нужди. Свежи аромати, които не оставят следи от неприятни
                миризми. Прилагаме най-съвременните производствени технологии.
              </p>
            </div>
                <Image
                className="h-full sm:w-1/3 w-full object-cover"
                src={AboutImg}
                alt=""
              />
    </div>
  );
};

export default About;
