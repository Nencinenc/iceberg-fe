import React from "react";

const Contacts: React.FC = () => {
  return (
    <div className="mx-auto max-w-screen-xl min-h-screen py-36 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-bold">Контакти</h2>
      </div>
      <div className="mx-auto mt-10 flex w-full max-w-screen-lg flex-col overflow-hidden rounded-xl md:flex-row">
        <form className="mx-auto w-full max-w-xl border-gray-200 px-10 py-8 md:px-8">
          <div className="mb-4">
            <label className="text mb-2 block font-medium">Your e-mail:</label>
            <input
              className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
              id="email"
              type="email"
            />
          </div>
          <div className="mb-4">
            <label className="text mb-2 block font-medium">Subject:</label>
            <input
              className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
              id="subject"
              type="subject"
            />
          </div>
          <div className="mb-4">
            <label className="text mb-2 block font-medium">Message:</label>
            <textarea
              className="h-52 w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
              id="message"
            ></textarea>
          </div>
          <div className="flex items-center">
            <div className="flex-1"></div>
            <button className="rounded-xl bg-blue-600 px-4 py-3 text-center font-bold  hover:bg-blue-700" type="submit">
              Send message
            </button>
          </div>
        </form>
        <div className="mt-10 bg-blue-600 px-10 py-8 text-gray-100 md:mt-0 md:ml-auto">
          <div className="">
            <p className="mb-4 font-medium border-b  pb-2">OFFICE HOURS</p>
            <p className="mb-4">Monday – Thursday: 08:00 – 16:00</p>
            <p className="mb-4">Friday: 08:00 - 15:00</p>
            <p className="mb-4">Weekend: Closed</p>
            <p className="mb-4">
              Email:
              <a href="#" className="font-semibold underline">
                support@apps.io
              </a>
            </p>
            <p className="mb-4">
              Phone:
              <a href="#" className="font-semibold underline">
                +46 (0) 10-32 32 322
              </a>
            </p>
            <hr className="my-2 h-0 border-t border-r-0 border-b-0 border-l-0 border-gray-300" />
            <p className="mb-4">Org.no: 63452-2832</p>
            <p className="mb-4">VAT no: 32353</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
