import React from "react";
import AboutImg from "@/assets/about.png";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="flex min-h-screen ">
      <div className="relative my-auto mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
        <div className="mx-auto flex w-full max-w-xl lg:max-w-screen-xl">
          <div className="mb-16 lg:my-auto lg:max-w-lg">
            <div className="mb-6 max-w-xl">
              <h2 className="mb-6 max-w-lg text-3xl font-extrabold text-white sm:text-5xl sm:leading-snug">
                Открийте новото усещане с
                <span className="inline-block bg-sky-400 ml-2 px-2 font-bold text-white">
                  Iceberg
                </span>
                !
              </h2>
              <p className="text-base text-justify text-white md:text-lg">
                Насладете се на лесен и приятен начин да задоволите никотиновите
                си нужди. Свежи аромати, които не оставят следи от неприятни
                миризми. Прилагаме най-съвременните производствени технологии.
              </p>
            </div>
            <div className="flex items-center">
              <a
                href="/"
                className="bg-sky-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-sky-400 px-8 font-medium tracking-wide text-white shadow-lg shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring"
              >
                Къде може да ни намерите?
              </a>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full space-x-3 md:justify-end">
          <div className="w-full flex-col space-y-3 rounded-xl py-4 lg:flex">
            <div className="h-full overflow-hidden rounded-xl">
              <Image
                className="mx-auto h-full w-full object-cover"
                src={AboutImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
