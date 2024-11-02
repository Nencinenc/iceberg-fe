"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AboutImg from "@/assets/about.png";

const About: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Открийте новото усещане с{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">ICEBERG</span>!
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Ние от ICEBERG предлагаме най-високо качество никотинови паучове. Прилагаме най-съвременните производствени
            технологии, за да успеете лесно да задоволите никотиновите си нужди.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200"
          >
            Научете повече
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <Image
            src={AboutImg}
            alt="About ICEBERG"
            className="rounded-lg shadow-2xl"
            width={600}
            height={400}
            objectFit="cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
