import { Link } from "react-router-dom";
const PRIMARY_DARK = "#2c5e2b";
const ACCENT_LIGHT = "#98bc62";
const services = [
  {
    title: "Flutter App Development",
    description:
      "Experience the flutter app development with us. We build high-performing and functioning flutter apps for you.",
  },
  {
    title: "Android App Development",
    description:
      "Reach a wider audience with our custom Android apps developer. We create new and unique apps. We believe the more different it is the better it is.",
  },
  {
    title: "Native Mobile App Development Services",
    description:
      "We have well-experienced native app developers who not only keep in mind the designs and modern features but also user accessibility.",
  },
  {
    title: "Ionic App Development",
    description:
      "Benefit from the power of different languages with our Ionic app developers. They develop apps that meet the unique business needs of each client.",
  },
  {
    title: "Wearable App Development",
    description:
      "Connect with the future through the wearable apps we develop. Our expertise in processing data from wearable devices ensures an enjoyable user experience.",
  },
  {
    title: "Universal Application Development",
    description:
      "Our universal apps ensure compatibility among different screens and devices. From iPhones to iPads, our apps deliver good functionality and user satisfaction.",
  },
  {
    title: "iOS App Development",
    description:
      "Our developers and designers stary updates about all the new IOS App development features to give you a better app experience with modern icons.",
  },
  {
    title: "Flutter App Development",
    description:
      "Optimize resource use and grow user experience with our mobile app prototyping services. Validate your app's UX and visual elements for a refined final product.",
  },
  {
    title: "HTML5 Mobile Applications development",
    description:
      "Grow your customer reach with our HTML5 mobile app services. Our development services ensure searchable content and positive user experiences.",
  },
  {
    title: "Sencha Mobile Application Development",
    description:
      "Experience the best of hybrid app development with Sencha. Our team works with JavaScript, HTML5, and CSS3 to deliver professional and well-developed apps.",
  },
  
  {
    title: "IoT Application Development services",
    description:
      "Benefit from the power of IoT with our custom app development. Communicate across departments and improve convenience with IoT apps.",
  },
  
  {
    title: "Enterprise Mobile Application Development",
    description:
      "Plan your business operations with custom enterprise apps. We develop apps that go well with your business goals.",
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
          Upgrade the App Development Experiences For Your Audience
        </h2>
        <p className="text-gray-700 mb-6">
          For more than a decade, we've held the rank of being one of the best
          award-winning mobile app development services providers. We deliver
          apps for multiple purposes using different platforms. Our app
          developers write software for mobile operating systems, such as Apple,
          Android, and Windows.
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
