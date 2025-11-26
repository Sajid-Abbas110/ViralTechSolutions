export default function CoreServicesSection() {
  return (
    <section className="w-full bg-white py-16 items-center ">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm text-[#2c5e2b] font-semibold mb-2">
          Your Dream
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-6">
          Build Your Dream Application With Us
        </h2>

        <p className="text-gray-600  max-w-7xl">
          Our team has experience developing various web applications based on
          each client's unique needs, from simple to complex websites. Our
          developers are programming gurus. Our developers customize your
          website the way you want
        </p>

        <div className="flex flex-col lg:flex-row pt-20 items-center">
          <div>
            <img
              src="/bg-pattern.png"
              alt="service mockup"
              className="w-full rounded-b-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
