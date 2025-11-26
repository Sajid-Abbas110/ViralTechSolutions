import { Link } from "react-router-dom";
const PRIMARY_DARK = "#2c5e2b";
const ACCENT_LIGHT = "#98bc62";
const services = [
  {
    title: "The services of illustrations",
    description:
      "Give us your ideas or the aesthetic you have in mind, and we will use our creative pictures to make it a reality.",
  },
  {
    title: "UI/UX designs",
    description:
      "To make a lasting impression on your audience, our UX/UI design services give your clients a powerful, long-lasting impression.",
  },
  {
    title: "Prototype that interacts",
    description:
      "Make amazing prototypes with artistic precision and care to detail. With our help, view the design in stunning 3D clarity.",
  },
  {
    title: "Design of the Logo",
    description:
      "We create the face and first impression of your brand. Get a natural brand face instead of AI-generated logos.",
  },
  {
    title: "Design of Prints",
    description:
      "Obtain important, technically based designs that reflect the creativity and message of the brand or business.",
  },
  {
    title: "Motion Graphics",
    description:
      "Use captivating and interactive motion graphics to tell the story of your company and offerings.",
  },
  {
    title: "Design of the Logo",
    description:
      "Establish a unique yet simple identity that conveys the ideals of your company.",
  },
  {
    title: "Branding and Graphic Design",
    description:
      "Use original and educational material, such as visualizations, movies, and graphs, to strengthen your online presence and visual identity.",
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
          What Do We Give?
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-4">
          Let us turn your ideas into imaginative designs.
        </h2>
        <p className="text-gray-700 mb-6">
          In California, Florida, Texas, Dallas, and throughout the United
          States, we are here to provide excellent graphic designs that will
          identify your company, whether you're searching for a unique logo or
          an innovative graphic design for anything else.
        </p>
        <Link
              to={"/contact-us"}
              className="px-5 py-3 border bg-[#2c5e2b] hover:border-[#2c5e2b] rounded-full text-sm text-white hover:bg-[#ffff] hover:text-[#2c5e2b] transition"
            >
            Let’s Build Together
            </Link>
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
