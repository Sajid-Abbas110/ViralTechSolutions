import { Link } from "react-router-dom";

export default function OurTeam() {
  const team = [
    {
      name: "Wafa Ayesha",
      role: "Founder & Chief Executive Officer",
      img: "/ceo.jpg",
      isCEO: true,
    },
    {
      name: "Hamza Ahmed Saeed Arain",
      role: "Chief Financial Officer",
      img: "/hamza.jpg",
    },
    {
      name: "Winah Shahid",
      role: "Vice President",
      img: "/winah.jpg",
    },
    {
      name: "Neha Khan Ghori",
      role: "Brand Manager",
      img: "/neha.jpg",
    },
    {
      name: "Zain Ali",
      role: "Brand Coordinator",
      img: "/zain.jpg",
    },
    {
      name: "Ahmed Saeed",
      role: "Head Of Production",
      img: "/ahmed.jpg",
    },
    {
      name: "Syed Muhammad Bilal Haider",
      role: "Brand Strategist",
      img: "/bilal.jpg",
    },
  ];

  // Separate the CEO from the rest of the team
  const ceo = team.find(member => member.isCEO);
  const coreTeam = team.filter(member => !member.isCEO);

  // Define primary and accent colors for the light theme
  const primaryColor = "#2c5e2b"; // Dark Green (for text/main elements)
  const accentColor = "#98bc62";  // Light Green (for accents/highlights)
  const lightBg = "white";

  return (
    <main className={`min-h-screen w-full bg-[${lightBg}] text-[${primaryColor}] overflow-hidden`}>
      {/* HERO SECTION */}
      <section className="w-full pt-28 px-10 text-center relative">
        <h1 className={`text-5xl sm:text-6xl font-extrabold my-6 text-[${primaryColor}]`}>Meet Our Visionaries</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          A group of passionate professionals dedicated to building stunning digital experiences that inspire, engage, and deliver meaningful business results.
        </p>

        {/* Floating shapes - Adjusted opacity/color for light background */}
        <div className={`absolute top-10 left-10 w-20 h-20 bg-[${accentColor}]/30 rounded-full blur-xl animate-pulse`}></div>
        <div className={`absolute bottom-10 right-10 w-24 h-24 bg-[${accentColor}]/40 rounded-full blur-xl animate-ping`}></div>
      </section>

      {/* --- */}

      {/* CEO SECTION (Prominent, Dedicated Card) */}
      {ceo && (
        <section className="py-20 px-10">
          <h2 className={`text-4xl font-bold text-center text-[${primaryColor}] mb-12`}>The Leadership</h2>
          <div className={`max-w-4xl mx-auto flex flex-col lg:flex-row items-center bg-gray-50 rounded-3xl p-10 shadow-xl shadow-gray-200 border-t-4 border-[${accentColor}] transition-all duration-500 hover:shadow-2xl hover:shadow-[${accentColor}]/20`}>
            
            {/* Image on the left */}
            <div className="shrink-0 w-full lg:w-1/3 mb-6 lg:mb-0 lg:mr-10">
              <div className={`rounded-full overflow-hidden w-48 h-48 mx-auto lg:w-full lg:h-auto lg:rounded-2xl shadow-lg border-4 border-gray-100 group-hover:border-[${accentColor}] transition`}>
                <img src={ceo.img} alt={ceo.name} className="w-full h-full object-cover object-top" />
              </div>
            </div>
            
            {/* Info on the right */}
            <div className="text-center lg:text-left w-full lg:w-2/3">
              <span className={`text-sm font-semibold uppercase tracking-widest text-[${accentColor}] mb-2 block`}>{ceo.role}</span>
              <h3 className={`text-4xl font-extrabold text-[${primaryColor}] mb-4`}>{ceo.name}</h3>
              <p className="text-gray-600 mb-6 italic">
                "Our mission is simple: to create digital products that don't just meet expectations, but redefine them. Every line of code is a step toward a better user experience."
              </p>
              
              {/* Social Icons */}
              <div className={`flex justify-center lg:justify-start gap-4 text-[${primaryColor}] text-2xl`}>
                <a href="#" aria-label={`${ceo.name}'s LinkedIn`} className={`hover:text-[${accentColor}] transition`}><i className="ri-linkedin-fill"></i></a>
                <a href="#" aria-label={`${ceo.name}'s Twitter`} className={`hover:text-[${accentColor}] transition`}><i className="ri-twitter-fill"></i></a>
                <a href="#" aria-label={`${ceo.name}'s Facebook`} className={`hover:text-[${accentColor}] transition`}><i className="ri-facebook-circle-fill"></i></a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- */}

      {/* CORE TEAM GRID SECTION */}
      <section className="py-20 px-10">
        <h2 className={`text-4xl font-bold text-center text-[${primaryColor}] mb-16`}>Meet the Core Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {coreTeam.map((member, index) => (
            <div
              key={index}
              className={`group bg-white p-8 rounded-3xl border border-gray-200 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:border-[${accentColor}] hover:shadow-xl hover:shadow-[${accentColor}]/20`}
            >
              {/* Image */}
              <div className="rounded-2xl overflow-hidden mb-6 shadow-md group-hover:shadow-lg group-hover:shadow-gray-300 transition duration-500">
                <img src={member.img} alt={member.name} className="w-full h-64 object-cover object-top transform group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Info */}
              <h3 className={`text-2xl font-bold text-[${primaryColor}] group-hover:text-[${accentColor}] transition`}>{member.name}</h3>
              <p className={`text-gray-500 text-sm font-medium mt-1 uppercase tracking-wider`}>{member.role}</p>

              {/* Social Icons */}
              <div className={`flex gap-4 mt-5 text-gray-400 text-xl`}>
                <a href="#" aria-label={`${member.name}'s LinkedIn`} className={`hover:text-[${primaryColor}] transition`}><i className="ri-linkedin-fill"></i></a>
                <a href="#" aria-label={`${member.name}'s Twitter`} className={`hover:text-[${primaryColor}] transition`}><i className="ri-twitter-fill"></i></a>
                <a href="#" aria-label={`${member.name}'s Facebook`} className={`hover:text-[${primaryColor}] transition`}><i className="ri-facebook-circle-fill"></i></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- */}

      {/* CALL TO ACTION SECTION */}
      <section className={`py-28 px-10 text-center bg-gray-50 relative`}>
        <h2 className={`text-4xl font-extrabold mb-4 text-[${primaryColor}]`}>Want to Shape the Future With Us?</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-10">
          We're always looking for talented individuals to join our growing family. Let's build something extraordinary together.
        </p>

        <Link
              to={"/contact-us"}
              className="px-5 py-3 border bg-[#2c5e2b] hover:border-[#2c5e2b] rounded-full text-sm text-white hover:bg-[#ffff] hover:text-[#2c5e2b] transition"
            >
              Join Our Team
            </Link>

        {/* background shapes */}
        <div className={`absolute left-0 bottom-0 w-40 h-40 bg-[${accentColor}]/20 blur-2xl`}></div>
        <div className={`absolute right-0 top-0 w-32 h-32 bg-[${accentColor}]/30 blur-2xl`}></div>
      </section>
    </main>
  );
}