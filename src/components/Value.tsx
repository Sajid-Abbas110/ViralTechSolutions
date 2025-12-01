import { ToolCase, Cable, Heart, Shield } from "lucide-react";
import { Link } from "react-router-dom";

// Color Theme
const PRIMARY_DARK = "#2c5e2b";
const ACCENT_LIGHT = "#98bc62";

// --- Types ---
interface ValueCardData {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: string;
}

const valueCards: ValueCardData[] = [
  {
    icon: ToolCase,
    title: "Value Critical Thinking",
    description:
      "We believe in teamwork and think of all the possibilities regarding the client project together, whether it is for planning a strategy or finalizing the project.",
    color: "#34D399",
  },
  {
    icon: Cable,
    title: "Quality We Deliver",
    description:
      "We deliver professional and quality work. Our dedicated and experienced team never compromises on the quality of the work. Tell us your idea, and we deliver quality work!",
    color: "#D1B44E",
  },
  {
    icon: Shield,
    title: "Transparent Communication",
    description:
      "We maintain strong communication with our team and with our customers. Transparent communication leads to well-coordinated and quality work exceeding customer expectations.",
    color: "#9333EA",
  },
  {
    icon: Heart,
    title: "Our People",
    description:
      "We are a family and a dedicated team that aims to explore and create new software and strategies of our style and help other entrepreneurs grow as well.",
    color: ACCENT_LIGHT,
  },
];

// --- Card Component ---
const ValueCard: React.FC<ValueCardData> = ({
  icon: Icon,
  title,
  description,
  color,
}) => (
  <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.01] transition duration-300 border border-gray-100 flex flex-col h-full">
    <div className="flex items-center justify-start">
      <div
        className="p-3 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: color + "20" }}
      >
        <Icon className="size-7" style={{ color }} />
      </div>
    </div>

    <h3 className="mt-4 text-xl font-bold" style={{ color: PRIMARY_DARK }}>
      {title}
    </h3>

    <p className="mt-2 text-gray-700 text-sm leading-relaxed grow">
      {description}
    </p>
  </div>
);

// --- Main Section ---
const FeatureSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* CHANGED: Switched to lg:grid-cols-2 for 50/50 split and kept lg:items-center for vertical alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-center">
          {/* LEFT: CARDS */}
          {/* CHANGED: Switched to lg:col-span-1 */}
          <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {valueCards.map((card, index) => (
              <ValueCard key={index} {...card} />
            ))}
          </div>

          {/* RIGHT CONTENT */}
          {/* CHANGED: Switched to lg:col-span-1 */}
          <div className="lg:col-span-1 flex flex-col justify-center">
            <p className="text-sm font-semibold text-[#2C5E2B] uppercase tracking-wide mb-2">
              Improve Your Operations with
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-6">
              Our Experienced <br /> Team
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8 max-w-[600px]">
              Delivering innovative software solutions that solve complex
              business challenges, providing measurable ROI (Return on
              Investment) for our clients.
            </p>

            {/* CTA BUTTON */}
            <Link
              to={"/contact-us"}
              className="px-5 py-3 border text-center max-w-40 justify-items-center bg-[#2c5e2b] hover:border-[#2c5e2b] rounded-full text-sm text-white hover:bg-[#ffff] hover:text-[#2c5e2b] transition"
            >
              View Portfolio
            </Link>

            {/* RESPONSIVE PATTERN */}
            <div className="mt-16 w-full">
              <img
                src="/bg-pattern.png"
                alt="pattern"
                className="w-full h-auto object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => (
  <div className=" bg-white font-inter">
    <FeatureSection />
  </div>
);

export default App;
