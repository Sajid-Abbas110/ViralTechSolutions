import { type FC, useRef, useState } from "react";
import {
  RefreshCw,
  Zap,
  Award,
  Target,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useSwipeable } from "react-swipeable";

interface Card {
  icon: LucideIcon;
  accent: string;
  title: string;
  description: string;
  bgColor: string;
  darkText: boolean;
}

const cardsData: Card[] = [
  {
    icon: RefreshCw,
    accent: "text-emerald-500",
    title: "Redefine Innovation",
    description:
      "Innovation is not merely a buzzword for us; it's integrated into our core values. We challenge the status quo while disregarding to settle for the ordinary. We aim to push the boundaries to create opportunities within the digital realm for your enterprise.",
    bgColor: "bg-white",
    darkText: false,
  },
  {
    icon: Zap,
    accent: "text-pink-400",
    title: "Legacy of Impact",
    description:
      "Beyond our software solutions, our legacy is built on tangible impact and results-driven outcomes. We believe in being the architects of optimizing solutions for your enterprise in order to thrive in the digital age.",
    bgColor: `bg-white`,
    darkText: false,
  },
  {
    icon: Award,
    accent: "text-sky-400",
    title: "Effective Solutions",
    description:
      "We don't just innovate for the change, but we innovate to help you achieve your purpose. Our cloud solutions are crafted with a keen understanding of your objectives to meet the current needs of the industry while anticipating the challenges of the future.",
    bgColor: "bg-white",
    darkText: false,
  },
  {
    icon: Target,
    accent: "text-orange-400",
    title: "Strategic Alignment",
    description:
      "Every project starts with a deep dive into your business strategy. We ensure our technology roadmap aligns perfectly with your long-term vision, delivering solutions that are not just cutting-edge but strategically sound.",
    bgColor: `bg-white`,
    darkText: false,
  },
  {
    icon: TrendingUp,
    accent: "text-yellow-400",
    title: "Scalable Growth",
    description:
      "Our architecture is built for the future. We design systems that scale effortlessly with your business growth, ensuring performance and stability whether you have ten users or ten million. Future-proof your infrastructure with us.",
    bgColor: `bg-white`,
    darkText: false,
  },
  {
    icon: Users,
    accent: "text-indigo-400",
    title: "Collaborative Partnership",
    description:
      "We view our clients as true partners. Our agile methodologies prioritize transparent communication and continuous feedback, guaranteeing that the final product is exactly what you envisioned and more.",
    bgColor: `bg-white`,
    darkText: false,
  },
];

interface FeatureCardProps {
  card: Card;
}

const FeatureCard: FC<FeatureCardProps> = ({ card }) => {
  const { icon: Icon, accent, title, description, bgColor, darkText } = card;
  const textColor = darkText ? "text-gray-300" : "text-gray-700";
  const titleColor = darkText ? "text-white" : "text-gray-900";
  const iconBg = darkText ? `bg-gray-700/50` : "bg-gray-100";

  return (
    <div
      className={`p-8 rounded-xl shadow-lg h-full transition-all duration-300 ${bgColor} ${
        darkText ? "shadow-2xl shadow-black/40" : "hover:shadow-xl"
      }`}
    >
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-3xl ${accent} ${iconBg} ring-2 ring-opacity-50 ring-current`}
      >
        <Icon size={24} strokeWidth={2.5} />
      </div>
      <h3 className={`text-xl font-semibold mb-3 ${titleColor}`}>{title}</h3>
      <p className={`text-sm leading-relaxed ${textColor}`}>{description}</p>
    </div>
  );
};

const App: FC = () => {
  const allSixCards: Card[] = cardsData;
  const carouselContent: Card[] = [...allSixCards, ...allSixCards]; // Duplicate for infinite scroll
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: containerRef.current.offsetWidth / 2, behavior: "smooth" });
      }
    },
    onSwipedRight: () => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: -containerRef.current.offsetWidth / 2, behavior: "smooth" });
      }
    },
    trackMouse: true,
  });

  const carouselStyles = `
    @keyframes scroll-left {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }

    .animate-scroll {
      animation: ${isPaused ? "none" : "scroll-left 45s linear infinite"};
      width: 200%;
    }

    @media (min-width: 1024px) {
      .card-item { width: calc(100% / 6); }
    }

    @media (max-width: 1023px) and (min-width: 640px) {
      .card-item { width: calc(100% / 4); }
    }

    @media (max-width: 639px) {
      .card-item { width: calc(100% / 2); }
      .animate-scroll { animation-duration: 70s; }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: carouselStyles }} />
      <div className="min-h-screen bg-gray-50 font-sans py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-6">
              More Than Just Innovators
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl">
              Empowering our clients with contemporary software solutions that convert enterprises into industry leaders.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our 6 Pillars of Continuous Innovation
            </h2>
            <div
              {...handlers}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              ref={containerRef}
              className="relative overflow-hidden py-4 cursor-grab"
            >
              <div className="flex animate-scroll">
                {carouselContent.map((card, index) => (
                  <div key={`carousel-${index}`} className="shrink-0 card-item p-4">
                    <FeatureCard card={card} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
