import { Link } from "react-router-dom";
const PRIMARY_DARK = "#2c5e2b";
const ACCENT_LIGHT = "#98bc62";
const services = [
  {
    title: "Desktop software development",
    description:
      "We create desktop application development services that stand out based on client preferences.",
  },
  {
    title: "Cloud computing development",
    description:
      "Get applications built in the cloud environment. We build, test and run software in the cloud, offering you the best.",
  },
  {
    title: "Web-based software development",
    description:
      "Web-based software establishes a strong and prominent presence for your website. Our expert services help you get that presence.",
  },
  {
    title: "Custom Software Development",
    description:
      "Create strategies to boost user satisfaction, productivity, client interaction and brand identity with us.",
  },
  {
    title: "E-commerce App Development",
    description:
      "Create enjoyable online experiences for your audience and convert them into your long-term customers.",
  },
  {
    title: "Digital Health App Development",
    description:
      "Upgrade your applications with new health app features such as online routine medical checkups and more.",
  },
  {
    title: "EdTech Solutions",
    description:
      "Make a stronger connection through communication with the larger groups through our education technology software.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row">
      <div
        className="w-full md:w-1/2 bg-white flex flex-col justify-center items-start p-6 md:p-12"
        style={{ color: PRIMARY_DARK }}
      >
        <p
          className="text-xs md:text-sm uppercase tracking-wide mb-2"
          style={{ color: ACCENT_LIGHT }}
        >
          Services we offer
        </p>
        <h2 className="text-2xl md:text-4xl font-semibold leading-snug mb-4">
         An Award Winning Software Development Service In USA
        </h2>
        <p className="text-gray-700 mb-6 text-sm md:text-base">
          We listen to your goals and build your dream software.
        </p>
        <Link
              to={"/contact-us"}
              className="px-5 py-3 border bg-[#2c5e2b] hover:border-[#2c5e2b] rounded-full text-sm text-white hover:bg-[#ffff] hover:text-[#2c5e2b] transition"
            >
            Let’s Build Together
            </Link>
      </div>
      <div className=" w-full md:w-1/2 
        p-6 md:p-12 
        border-t md:border-t-0 md:border-l border-gray-200
        md:h-screen 
        md:overflow-y-scroll    /* ENABLE SCROLL ONLY ON DESKTOP */
        ">
        {services.map((service, index) => (
          <div key={index} className="mb-20 last:mb-0">
            <h3
              className="text-lg md:text-xl font-bold mb-2"
              style={{ color: PRIMARY_DARK }}
            >
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm md:text-base">{service.description}</p>
            <br />
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
