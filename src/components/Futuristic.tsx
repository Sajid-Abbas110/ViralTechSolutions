import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-start mt-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/contact.jpg')" }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-8 md:px-12 max-w-3xl">
        <h1
          className="
            text-3xl 
            sm:text-4xl 
            md:text-5xl 
            lg:text-6xl 
            font-extrabold 
            text-white 
            leading-snug
            mb-6
          "
        >
          Revolutionizing Your Digital Experience with Our{" "}
          <span className="text-[#98bc62]">Digital & Software Services</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-xl">
          Unveil the future with our expertise. We are dedicated to laying
          your brand's foundation to lead in the digital space.
        </p>

        <Link
          to="/contact-us"
          className="
            px-6 py-3 
            border border-[#2c5e2b] 
            rounded-full 
            bg-white 
            text-sm 
            sm:text-base
            text-[#2c5e2b] 
            hover:bg-[#2c5e2b] 
            hover:text-white 
            transition
          "
        >
          Let's Start Together
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
