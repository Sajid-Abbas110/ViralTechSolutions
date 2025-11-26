

export default function CoreServicesSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <p className="text-sm text-[#2c5e2b] font-semibold mb-2">
          Our Core Services
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-6">
          Integrate innovation at the core of your business
        </h2>

        <p className="text-gray-600  max-w-3xl">
          We believe in transforming the journey of businesses through the strategic integration of our services.

Our approach focuses on seamless transitions and sustained growth, ensuring every step of the transformation is supported.

This commitment delivers measurable results, moving your business from where it is today to where it needs to be tomorrow.
        </p>

        {/* IMAGE SECTION */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          
          {/* Browser Window Mockup */}
          <div>
            
           

            
            <img
              src="/new-ai-desk.jpg"
              alt="service mockup"
              className="w-full rounded-b-xl"
            />
          </div>

          {/* Phone Mockup */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div>
              <img
                src="/new-ai-mob.jpg"
                alt="mobile preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
