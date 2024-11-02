"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left"
        >
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Новото поколение никотин
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-xl">
            Насладете се на разнообразние от плодови вкусове. Без тютюн и неприятна миризма.
          </p>
          <div className="flex gap-4">
            <Link
              href="/products"
              className="group inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-300"
            >
              Разгледай продуктите
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 rounded-full border border-gray-700 text-white font-semibold hover:bg-white/5 transition-all duration-300"
            >
              Научи повече
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10" />
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/videos/arasaka.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 to-blue-600/20 blur-3xl -z-10" />
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/40 via-black to-black -z-20" />
    </section>
  );
};

export default Hero;
