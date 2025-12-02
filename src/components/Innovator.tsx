import type { FC } from "react";

import {
  RefreshCw,
  Zap,
  Award,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: RefreshCw,
    title: "Redefine Innovation",
    accent: "from-emerald-400/40 to-emerald-600/30",
    description:
      "We push boundaries with fearless creativity—crafting future-ready solutions through bold digital innovation.",
  },
  {
    icon: Zap,
    title: "Legacy of Impact",
    accent: "from-pink-400/40 to-pink-600/30",
    description:
      "Every product is built to create long-lasting real-world impact—measurable, meaningful, and transformative.",
  },
  {
    icon: Award,
    title: "Effective Solutions",
    accent: "from-sky-400/40 to-sky-600/30",
    description:
      "Smart engineering meets purposeful design, delivering efficient solutions tailored for your growth.",
  },
  {
    icon: Target,
    title: "Strategic Alignment",
    accent: "from-orange-400/40 to-orange-600/30",
    description:
      "We design with your long-term vision in mind—ensuring strategic precision in every step of development.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    accent: "from-yellow-400/40 to-yellow-600/30",
    description:
      "Future-proof architecture built to handle anything—from 10 users to 10 million.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    accent: "from-indigo-400/40 to-indigo-600/30",
    description:
      "We operate like a true partner—transparent, agile, and aligned to your business goals.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

import { type Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1], // <-- replace string with cubic-bezier array
    },
  },
};


const StunningSection: FC = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-linear-to-br from-[#e8f4ec] via-[#fdfdfd] to-[#d7e8da] overflow-hidden">

      {/* Background glow orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-300/20 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#2c5e2b] drop-shadow-sm">
          Excellence Engineered With Purpose
        </h1>

        <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Explore the six foundational principles that drive our premium
          quality, innovation, and long-term digital success.
        </p>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Icon Circle */}
              <div
                className={`w-16 h-16 rounded-2xl bg-linear-to-br ${item.accent} flex items-center justify-center shadow-inner`}
              >
                <item.icon size={30} className="text-gray-900" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StunningSection;
