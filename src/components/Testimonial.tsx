import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

const PRIMARY_DARK = "#2c5e2b";
const ACCENT_LIGHT = "#98bc62";
const CTA_BLUE = "#1D70FF";

const currentTestimonial = {
  quote:
    "The team provided unparalleled expertise in cloud-native solutions. Their dedication to integrity and innovation helped us scale faster than we ever imagined. The service was world-class, delivering measurable results instantly.",
  clientName: "Anthony R. Sulliman",
  clientTitle: "CEO, TechNova Corp.",
  rating: 5,
  logoText: "TechNova Corp.",
  logoColor: ACCENT_LIGHT,
  clientImageUrl: "https://placehold.co/100x100/A0AEC0/000000?text=AS",
};

// Render Stars
const RatingStars: React.FC<{ count: number }> = ({ count }) => (
  <div className="flex space-x-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={18}
        className="drop-shadow"
        fill={i < count ? ACCENT_LIGHT : "none"}
        stroke={ACCENT_LIGHT}
      />
    ))}
  </div>
);

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      
      {/* Background Pattern Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute w-[800px] h-[800px] rounded-full blur-3xl"
          style={{
            background: ACCENT_LIGHT,
            top: "-200px",
            right: "-200px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12">
          <div>
            <p
              className="text-4xl italic"
              style={{
                color: ACCENT_LIGHT,
                fontFamily: "cursive",
              }}
            >
              Testimonials
            </p>
            <h2
              className="text-4xl font-extrabold tracking-tight"
              style={{ color: PRIMARY_DARK }}
            >
              We build trust.
            </h2>
          </div>
          <div className="flex gap-3 mt-6 lg:mt-0">
            <button className="p-3 rounded-full shadow-md bg-white hover:bg-gray-100 transition">
              <ArrowLeft size={22} strokeWidth={2} />
            </button>
            <button className="p-3 rounded-full shadow-md bg-white hover:bg-gray-100 transition">
              <ArrowRight size={22} strokeWidth={2} />
            </button>
          </div>
        </div>
        <div className="rounded-3xl bg-white shadow-2xl border border-gray-100 backdrop-blur-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            
            <div className="lg:col-span-2 p-10 lg:p-16 flex flex-col justify-between">
              
              <div>
                <Quote
                  size={52}
                  className="text-gray-300 -scale-x-100 mb-6 drop-shadow"
                />

                <p className="text-2xl leading-relaxed italic font-medium text-gray-800">
                  “{currentTestimonial.quote}”
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-200">
                <h3
                  className="text-2xl font-bold"
                  style={{ color: CTA_BLUE }}
                >
                  {currentTestimonial.clientName}
                </h3>
                <p className="text-gray-500 mb-4">{currentTestimonial.clientTitle}</p>

                <div className="flex items-center gap-6">
                  <RatingStars count={currentTestimonial.rating} />

                  <div className="flex gap-3">
                    <span className="px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded-full shadow">
                      Top Rated 2024
                    </span>

                    <span
                      className="px-3 py-1 text-xs font-semibold text-white rounded-full shadow"
                      style={{ backgroundColor: ACCENT_LIGHT }}
                    >
                      {currentTestimonial.logoText}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center p-10 bg-gray-100">
              <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white">
                <img
                src="./hamza.jpg"
                
                //   src={currentTestimonial.clientImageUrl}
                //   alt={currentTestimonial.clientName}
                  className="w-full h-full object-cover]"
                />
                <div
                  className="absolute inset-0 rounded-full opacity-10"
                  style={{ backgroundColor: PRIMARY_DARK }}
                ></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
