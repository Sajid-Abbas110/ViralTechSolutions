import React from "react";

const WebDevelopmentSection: React.FC = () => {
  return (
    <section className="relative bg-[#2c5e2b] text-white justify-center items-center py-16 mt-10 px-4 sm:px-6 lg:px-8">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/contact.jpg")', opacity: 0.5 }}
      ></div>
      <div className="absolute inset-0 z-0 bg-linear-to-t from-black to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Column: Title */}
        <div className="lg:w-1/2 my-10 lg:mb-0 lg:pr-10 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Welcome To <span className="text-[#98bc62]">Our Portfolio</span>
          </h1>
        </div>

        {/* Right Column: Description */}
        <div className="lg:w-1/2 text-center lg:mt-20 lg:text-left">
          <p className="text-lg text-gray-200 max-w-xl mb-8">
            We build beautiful, engaging experiences that drive real business
            results by combining refined aesthetics, seamless usability, and
            data-driven strategies to accelerate your business growth.
          </p>
        </div>
      </div>

      {/* Bottom Section with image placeholder */}
      <div className="relative z-10 mt-20 max-w-7xl mx-auto">
        {/* Replace 'your-bottom-image-url.jpg' with your actual image URL */}
        <img
          src="/pattern-talk.png"
          alt="Abstract web development illustration"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default WebDevelopmentSection;
