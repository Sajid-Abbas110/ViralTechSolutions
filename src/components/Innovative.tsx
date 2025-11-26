import { Link } from "react-router-dom";

const Innovative = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 px-4 sm:px-6 lg:px-12 py-12">
      {/* Text Column */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-6">
          Build the enterprise in
          <br /> the digital world
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6 md:mb-8">
          Let’s work together and break the glass of boundaries with innovative
          solutions. We create seamless digital experiences that drive
          transformation and growth. Our mission is to empower businesses with
          strategies and technology that make a real impact.
        </p>
        <div className="flex justify-center md:justify-start">
          <Link to={"/contact-us"}>
            <button className="px-5 py-2 border-2 border-[#2c5e2b] rounded-full text-sm text-[#98bc62] hover:bg-[#2c5e2b] hover:text-[white] transition">
              Let’s Build Together
            </button>
          </Link>
        </div>
      </div>

      {/* Image Column */}
      <div className="md:w-1/2">
        <img
          src="/image.jpg"
          alt="Thrive Illustration"
          className="w-full rounded shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Innovative;
