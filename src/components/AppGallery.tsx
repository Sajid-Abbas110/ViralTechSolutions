
export default function ProjectsSection() {
  return (
    <section className="w-full bg-white px-6 my-5 md:px-12 lg:px-20">
     
      <div className="max-w-4xl justify-self-center -ml-56">
        <p className="text-sm font-semibold text-[#2C5E2B] uppercase tracking-wide">
          Our Projects
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-6">
          Our Featured Projects
        </h2>
        <p className="text-gray-600 mt-3">
          Below are some of our feature web development projects that will highlight the expertise and professionalism of the services we provide. It also includes timely delivery and well-organized work.


        </p>
      </div>

      
      <div className="relative  mt-14 flex flex-4 md:grid-cols-2 gap-5 justify-self-center">
        
        <div className="relative transition-transform duration-300 hover:ease-in hover:scale-[1.05]">
          <img
            src="pro1.jpg"
            alt="Mobile App"
            className="rounded-xl shadow-lg"
          />
          <div className="absolute -bottom-8 left-8 bg-white shadow-xl rounded-xl p-5 w-64">
            <h3 className="font-semibold text-lg text-gray-900">Mobile App</h3>
            <p className="text-gray-600 text-sm mt-2">
              Our mobile application is designed to be compatible with mobile devices
              such as tablets, phones or watches.
            </p>
          </div>
        </div>

        {/* Web App */}
        <div className="relative flex justify-end transition-transform duration-300 hover:ease-in hover:scale-[1.05]">
          <img
            src="/pro4.jpg"
            alt="Web App"
            className="rounded-xl shadow-lg"
          />
          <div className="absolute -bottom-8 left-8 bg-white shadow-xl rounded-xl p-5 w-64">
            <h3 className="font-semibold text-lg text-gray-900">Web App</h3>
            <p className="text-gray-600 text-sm mt-2">
              Our team helps clients build their presence through web apps to connect
              with targeted and potential customers.
            </p>
          </div>
        </div>

        
        <div className="relative transition-transform duration-300 hover:ease-in hover:scale-[1.05]">
          <img
            src="/pro2.1.jpg"
            alt="E-Commerce Store"
            className="rounded-xl shadow-lg"
          />
          <div className="absolute -bottom-8 left-8 bg-white shadow-xl rounded-xl p-5 w-64">
            <h3 className="font-semibold text-lg text-gray-900">E-Commerce Store</h3>
            <p className="text-gray-600 text-sm mt-2">
              Developed 100+ e-commerce stores with fast implementation of styling,
              optimized UI.
            </p>
          </div>
        </div>

       
        <div className="relative flex justify-end transition-transform duration-300 hover:ease-in hover:scale-[1.05]">
          <img
            src="/pro2.jpg"
            alt="CRM"
            className="rounded-xl shadow-lg"
          />
          <div className="absolute -bottom-8 left-8 bg-white shadow-xl rounded-xl p-5 w-64">
            <h3 className="font-semibold text-lg text-gray-900">CRM</h3>
            <p className="text-gray-600 text-sm mt-2">
              We have implemented over 200 CRM solutions to streamline operations,
              enhance service efficiency.
            </p>
          </div>
        </div>
      </div>

      
      <div className="text-center mt-20">
        <button className="px-5 py-2 border-2 border-[#2c5e2b] rounded-full text-sm text-[#98bc62] hover:bg-[#2c5e2b] hover:text-[white] transition">
              VIEW ALL CASE STUDIES
            </button>
      </div>
    </section>
  );
}