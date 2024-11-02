"use client";

import React from "react";
import { motion } from "framer-motion";
import MapView from "@/components/locations/MapView";

const Locations = () => {
  return (
    <div className="min-h-screen text-white py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Нашите{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">локации</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Открийте къде можете да намерите нашите продукти в цялата страна
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <MapView />
        </motion.div>
      </div>
    </div>
  );
};

export default Locations;
