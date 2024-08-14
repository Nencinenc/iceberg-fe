import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex gap-10 items-center justify-center sm:flex-row flex-col sm:mt-0 mt-28 p-4">
      <div className="mb-6 max-w-xl">
        <h2 className="mb-6 font-extrabold text-5xl">Новото поколение никотин</h2>
        <p className="text-lg">Насладете се на разнообразние от плодови вкусове. Без тютюн и неприятна миризма.</p>
      </div>
      <video autoPlay loop muted className="sm:w-1/2 w-full object-cover rounded-md">
        <source src="/videos/landing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;
