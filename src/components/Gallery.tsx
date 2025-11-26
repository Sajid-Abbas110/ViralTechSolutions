import { Link } from "react-router-dom";

export default function ProjectsSection() {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-12 lg:px-20">
      
      {/* HEADER SECTION: Centered and Responsive */}
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold text-[#2C5E2B] uppercase tracking-wide">
          Our Projects
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-4">
          Delve Into Our Pioneering Projects
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore our projects to see firsthand the innovative solutions we
          deliver for every challenge. Get to know how our meticulous execution
          and commitment to quality make a lasting impression across the entire
          industry. We invite you to witness the difference that strategic
          thinking and proven results can make for your success.
        </p>
      </div>

      {/* PROJECTS GRID */}
      {/* Adjusted grid to ensure max width and centered alignment */}
      <div className="relative mt-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-5">
        
        {/* Project 1: Mobile App */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
          <img
            src="pro1.jpg"
            alt="Mobile App"
            className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition duration-500"
          />
          {/* Card repositioned to sit inside the container, responsive for all screens */}
          <div className="bg-white shadow-xl rounded-b-xl p-10 w-2/3 absolute bottom-0 left-0 transform translate-y-0 transition-all duration-300 md:group-hover:-translate-y-2">
            <h3 className="font-semibold text-xl text-gray-900">Mobile App</h3>
            <p className="text-gray-600 text-sm mt-1">
              Our mobile application is designed to be compatible with mobile
              devices such as tablets, phones or watches.
            </p>
          </div>
        </div>

        {/* Project 2: Web App */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
          <img 
            src="/pro4.jpg" 
            alt="Web App" 
            className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition duration-500" 
          />
          <div className="bg-white shadow-xl rounded-b-xl p-10 w-2/3 absolute bottom-0 left-0 transform translate-y-0 transition-all duration-300 md:group-hover:-translate-y-2">
            <h3 className="font-semibold text-xl text-gray-900">Web App</h3>
            <p className="text-gray-600 text-sm mt-1">
              Our team helps clients build their presence through web apps to
              connect with targeted and potential customers.
            </p>
          </div>
        </div>

        {/* Project 3: E-Commerce Store */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
          <img
            src="/pro2.1.jpg"
            alt="E-Commerce Store"
            className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition duration-500"
          />
          <div className="bg-white shadow-xl rounded-b-xl p-10 w-2/3 absolute bottom-0 left-0 transform translate-y-0 transition-all duration-300 md:group-hover:-translate-y-2">
            <h3 className="font-semibold text-xl text-gray-900">
              E-Commerce Store
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Developed 100+ e-commerce stores with fast implementation of
              styling, optimized UI and smooth user experience.
            </p>
          </div>
        </div>

        {/* Project 4: CRM */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
          <img 
            src="/pro2.jpg" 
            alt="CRM" 
            className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition duration-500" 
          />
          <div className="bg-white shadow-xl rounded-b-xl p-10 w-2/3 absolute bottom-0 left-0 transform translate-y-0 transition-all duration-300 md:group-hover:-translate-y-2">
            <h3 className="font-semibold text-xl text-gray-900">CRM</h3>
            <p className="text-gray-600 text-sm mt-1">
              We have implemented over 200 CRM solutions to streamline
              operations, enhance service efficiency, and manage customer
              interactions.
            </p>
          </div>
        </div>
        
      </div>

      {/* View All Button */}
      <div className="text-center mt-20">
        <Link to={"/portfolio"}>
          <button className="px-7 py-3 font-medium border-2 border-[#2c5e2b] rounded-full text-sm text-[#2c5e2b] hover:bg-[#2c5e2b] hover:text-white transition shadow-md hover:shadow-lg">
            View All Projects
          </button>
        </Link>
      </div>
    </section>
  );
}