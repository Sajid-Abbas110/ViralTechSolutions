import React from 'react';

const WebDevelopmentSection: React.FC = () => {
  return (
    <section className="relative bg-[#2c5e2b] text-white justify-center items-center py-16 mt-10 px-4 sm:px-6 lg:px-8">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: 'url("/contact.jpg")', opacity: 0.5 }}></div>
      <div className="absolute inset-0 z-0 bg-linear-to-t from-black to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Column: Title */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10 text-center lg:text-left">
          <h1 className="text-xl mt-20 md:text-5xl font-medium text-[#ffff] leading-tight my-6">
            ViralTechSolutions <br/>offers Mobile App Development Services.
          </h1>
        </div>

        {/* Right Column: Description */}
        <div className="lg:w-1/2 text-center mt-20 lg:text-left">
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
            VitalTechSolutions offers professional mobile app development services that meet customer expectations. Our experienced team of developers prioritizes customer satisfaction and requirements.
          </p>
        </div>
      </div>

      {/* Bottom Section with image placeholder */}
      <div className="relative z-10 mt-10 max-w-7xl mx-auto">
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