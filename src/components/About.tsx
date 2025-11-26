interface AnimatedCounterProps {
  value: string; // "30+" / "150+" / "90%" etc.
  duration?: number; // optional animation duration
}

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2000,
}) => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [count, setCount] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const number = parseInt(value.replace(/[^0-9]/g, "")); // extract digits
  const suffix = value.replace(/[0-9]/g, ""); // extract "+", "%", etc.

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);

          let start = 0;
          const end = number;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              clearInterval(timer);
              setCount(end);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [hasStarted, duration, number]);

  return (
    <h3 ref={ref} className="text-4xl font-bold text-[#2c5e2b]">
      {count}
      {suffix}
    </h3>
  );
};
const stats = [
  { value: "30+", label: "Countries Served" },
  { value: "150+", label: "Active Clients" },
  { value: "90%", label: "Client Retention Ratio" },
  { value: "1200+", label: "Employees" },
];

export default function EnterpriseSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <div>
          <p className="text-lg text-[#2c5e2b] mb-2 font-medium">
            Empowering Enterprises
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-6">
            Conquer the world
            <br /> with us
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            We are dedicated to guiding you to navigate through the digital
            realm in order to grow your business from the introduction phase to
            the growth stage. Whether you're in the USA, Florida, Dallas,
            California, or Texas, we envision driving positive outcomes by
            allocating our expertise and tech solutions. Our detailed and
            strategic approach allows us to deliver a distinctive user
            experience. Let’s touch the horizons with digitalization.
          </p>
          <Link to={"/portfolio"}>
            <Link
              to={"/portfolio"}
              className="px-5 py-3 border bg-[#2c5e2b] hover:border-[#2c5e2b] rounded-full text-sm text-white hover:bg-[#ffff] hover:text-[#2c5e2b] transition"
            >
              Learn More
            </Link>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 gap-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute inset-y-0 left-1/2 w-px bg-[#98bc62] opacity-50"></div>

          {/* Horizontal Line */}
          <div className="absolute inset-x-0 top-1/2 h-px bg-[#98bc62] opacity-50"></div>

          {stats.map((item, index) => (
            <div key={index} className="text-center">
              <AnimatedCounter value={item.value} />
              <p className="text-gray-700 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PATTERN */}
      <div className="mt-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <img
            src="/bg-pattern.png"
            alt="pattern"
            className="w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
