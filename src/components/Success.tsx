import { Link } from "react-router-dom";

// Theme Colors
const PRIMARY_DARK = "#2c5e2b";   // Dark Green
const ACCENT_LIGHT = "#98bc62";   // Light Green

const CallToActionSection: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-36 bg-gray-50 overflow-hidden">

      {/* Soft Green Glow Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div
          className="absolute w-[700px] h-[700px] rounded-full blur-3xl"
          style={{
            background: ACCENT_LIGHT,
            top: "-200px",
            left: "-150px",
          }}
        ></div>

        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: PRIMARY_DARK,
            bottom: "-200px",
            right: "-150px",
            opacity: 0.4,
          }}
        ></div>
      </div>

      {/* Background dotted pattern */}
      <div
        className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(#777 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
        }}
      ></div>

      {/* Top-left geometric shape */}
      <div className="absolute top-12 left-12 lg:top-20 lg:left-20 z-10 w-28 h-28 sm:w-36 sm:h-36 opacity-50 rotate-45 bg-[#98bc62]/20 backdrop-blur-md border border-[#2c5e2b]/10 rounded-xl"></div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-6">

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#2c5e2b]">
          Your <span className="text-[#98bc62]">success</span>
          <br />
          <span className="text-[#98bc62]">starts now</span>
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Grow your business with digital transformation that actually works.
          No noise, no pretending — just real results.
        </p>

        {/* Green CTA Button */}

        <Link to={'/contact-us'}>
        <button className="px-5 py-3 border mt-4 bg-[#2c5e2b] hover:border-[#2c5e2b] rounded-full text-sm text-[white] hover:bg-[#ffff] hover:text-[#2c5e2b] transition">
            Join Us
          </button>
          </Link>
      </div>

      {/* Bottom-right 4-color square block (converted to your theme) */}
      <div className="absolute bottom-12 right-12 lg:bottom-20 lg:right-20 z-10 w-20 h-20 sm:w-28 sm:h-28 opacity-70 flex flex-wrap rotate-12">
        <div className="w-1/2 h-1/2" style={{ backgroundColor: PRIMARY_DARK }}></div>
        <div className="w-1/2 h-1/2" style={{ backgroundColor: ACCENT_LIGHT }}></div>
        <div className="w-1/2 h-1/2 bg-[#d8e8c6]"></div>
        <div className="w-1/2 h-1/2 bg-[#4d7c3c]"></div>
      </div>
    </section>
  );
};

export default CallToActionSection;
