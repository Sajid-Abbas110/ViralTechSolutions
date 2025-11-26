import { Link } from "react-router-dom";
const PRIMARY_DARK = "#2c5e2b";
const ACCENT_LIGHT = "#98bc62";
const services = [
  {
    title: "Custom Web Development",
    description:
      "Get a custom website with the most advanced features you want in your website.",
  },
  {
    title: "WordPress Development",
    description:
      "Use programming languages like JavaScript, CSS, and HTML to create a high-performance website for your business.",
  },
  {
    title: "Website Maintenance",
    description:
      "Create a better and positive user experience by maintaining and testing it on a regular basis.",
  },
  {
    title: "Ecommerce Development",
    description:
      "A well-planned strategic ecommerce website is all you need to attract the audience and make them interact.",
  },
  {
    title: "AI/ML Solutions",
    description:
      "We assist businesses in transforming data into useful insights by integrating advanced ML solutions, generative AI, analytics, and connected intelligence.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full h-screen flex">
      <div
        className="w-1/2 bg-white flex flex-col justify-center items-start p-12"
        style={{ color: PRIMARY_DARK }}
      >
        <p
          className="text-sm uppercase tracking-wide mb-2"
          style={{ color: ACCENT_LIGHT }}
        >
          What We Offer?
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-4">
          Websites That Help You Achieve Your Business Goals
        </h2>
        <p className="text-gray-700 mb-6">
          Our web development agency in the USA (Florida, Dallas, California and
          Texas)develops industry-leading websites. Our pro-developers
          specialize in various web development service in USA and exceed the
          customer's expectations.
        </p>
        <button className="px-5 py-2 border border-[#2c5e2b] rounded-full text-sm text-[#98bc62] hover:bg-[#2c5e2b] hover:text-[white] transition">
          Let's Build Together
        </button>
      </div>
      <div className="w-1/2 overflow-y-scroll p-12 border-l border-gray-200">
        {services.map((service, index) => (
          <div key={index} className="mb-20 last:mb-0">
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: PRIMARY_DARK }}
            >
              {service.title}
            </h3>
            <p className="text-gray-700">{service.description}</p>
            <br />
            <Link
              to="/contact"
              className="px-5 py-2 my-10 border border-[#2c5e2b] text-[#2c5e2a] rounded-full text-sm hover:bg-[#ffff] hover:text-[balck] transition"
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
