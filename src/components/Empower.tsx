import { Link } from "react-router-dom";

const PRIMARY_DARK = "#2c5e2b";
const ACCENT_LIGHT = "#98bc62";

const services = [
  {
    title: "Visual Designs",
    description:
      "Our visual designs transcend the confined boundaries of aesthetics, weaving narratives through the language of visuals while embracing functionality.",
  },
  {
    title: "Web Design & Development",
    description:
      "We help in designing and developing high-performing, digitally transformative, and user-friendly websites to fuel the growth of your enterprise.",
  },
  {
    title: "App Development",
    description:
      "We help enterprises around the globe in developing functional and user-friendly apps, providing guidance from idea to concept to ongoing support.",
  },
  {
    title: "Software Development",
    description:
      "We help the enterprise strategize new ideas and accelerate the value by providing custom software development solutions, product engineering, and QA testing.",
  },
  {
    title: "AI/ML Solutions",
    description:
      "We assist businesses in transforming data into useful insights by integrating advanced ML solutions, generative AI, analytics, and connected intelligence.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row">
      
      {/* LEFT SIDE */}
      <div
        className="w-full md:w-1/2 bg-white flex flex-col justify-center items-start p-6 md:p-12"
        style={{ color: PRIMARY_DARK }}
      >
        <p
          className="text-xs md:text-sm uppercase tracking-wide mb-2"
          style={{ color: ACCENT_LIGHT }}
        >
          Our Services
        </p>

        <h2 className="text-2xl md:text-4xl font-semibold leading-snug mb-4">
          Empowering our partners to embrace the forefront of innovation
        </h2>

        <p className="text-gray-700 mb-6 text-sm md:text-base">
          Together, with our modern solutions, let’s reimagine the processes
          propelling business towards unparalleled success.
        </p>

        <Link
              to={"/contact-us"}
              className="px-5 py-3 border bg-[#2c5e2b] hover:border-[#2c5e2b] rounded-full text-sm text-white hover:bg-[#ffff] hover:text-[#2c5e2b] transition"
            >
            Let’s Build Together
            </Link>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="
        w-full md:w-1/2 
        p-6 md:p-12 
        border-t md:border-t-0 md:border-l border-gray-200
        md:h-screen 
        md:overflow-y-scroll    /* ENABLE SCROLL ONLY ON DESKTOP */
        "
      >
        {services.map((service, index) => (
          <div key={index} className="mb-16 last:mb-0">
            <h3
              className="text-lg md:text-xl font-bold mb-2"
              style={{ color: PRIMARY_DARK }}
            >
              {service.title}
            </h3>

            <p className="text-gray-700 text-sm md:text-base">{service.description}</p>

            <Link
              to="/contact"
              className="inline-block mt-4 px-5 py-2 border bg-[#2c5e2b] hover:border-[#2c5e2b] rounded-full text-sm text-white hover:bg-[#ffff] hover:text-[#2c5e2b] transition"
            >
              Get Started Today
            </Link>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ServicesSection;
