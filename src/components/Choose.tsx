export default function CoreServicesSection() {
  return (
    <section className="w-full bg-white py-16 items-center ">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm text-[#2c5e2b] font-semibold mb-2">
          Why Choose Us?
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-6">
          Build Your Ideas Into Reality With Our Development Team
        </h2>

        <p className="text-gray-600  max-w-7xl">
          Our team of mobile app developers is passionate about creating the
          most advanced and accessible apps. We aim to help you succeed in
          boosting your audience by giving you the most enjoyable and positive
          application experience.
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
