"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, Building } from "lucide-react";

const Contacts: React.FC = () => {
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
            Свържете се с{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">нас</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Имате въпроси? Не се колебайте да се свържете с нашия екип за поддръжка
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <form className="bg-gray-800 rounded-3xl p-8 shadow-2xl">
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-400 mb-2">
                  Вашият имейл
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="example@email.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-400 mb-2">
                  Тема
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Въведете тема"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  Съобщение
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Въведете вашето съобщение"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full"
              >
                Изпрати съобщение
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">Информация за контакт</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-sky-500 mr-4" />
                <div>
                  <p className="font-semibold">Работно време</p>
                  <p className="text-gray-400">Понеделник – Петък: 09:00 – 18:00</p>
                  <p className="text-gray-400">Събота – Неделя: Затворено</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-sky-500 mr-4" />
                <div>
                  <p className="font-semibold">Имейл</p>
                  <a href="mailto:support@iceberg.com" className="text-sky-400 hover:underline">
                    support@iceberg.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-sky-500 mr-4" />
                <div>
                  <p className="font-semibold">Телефон</p>
                  <a href="tel:+359888123456" className="text-sky-400 hover:underline">
                    +359 888 123 456
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Building className="w-6 h-6 text-sky-500 mr-4" />
                <div>
                  <p className="font-semibold">Адрес</p>
                  <p className="text-gray-400">ул. Примерна 123, София 1000, България</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
