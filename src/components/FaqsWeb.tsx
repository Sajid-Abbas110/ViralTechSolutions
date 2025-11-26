import React from "react";

// Define the structure for an FAQ item
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// Data mirroring the content in the provided image
const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: "What types of websites does ViralTechSolutions build?",
    answer:
      "We develop every type of website. It includes business websites, e-commerce websites, websites for portfolios, blogs and corporate websites.",
  },
  {
    id: 2,
    question: "How long does it take for you to develop a website?",
    answer:
      "Every client comes with a different style and requirements. The website’s development time depends on that. You let our clients know at the start how much time it will take to build their website.",
  },
  {
    id: 3,
    question: "Does Intesys provide web maintenance services?",
    answer:
      "Yes, we offer website maintenance and support services. We make sure your websites stay updated and secure forever.",
  },
  {
    id: 4,
    question: "What are all the everyday things that come with website development services?",
    answer:
      "There are many things. Some of the main things are Ecommerce functionality, Website call tracking, responsive design, Website security, Marketing Automation, Mobile app development and Design Functionality.",
  },
  {
    id: 5,
    question: "What do web development services or companies do?",
    answer:
      "Web development services or companies develop and improve client websites. They help clients create responsive and well-functioning websites.",
  },
  {
    id: 6,
    question: "What is the average pricing of web development services in USA (Florida, Dallas, California and Texas?",
    answer:
      "The pricing depends on different factors as well as the requirements. Our team discusses the project with the clients and then lets them know the pricing further.",
  },
];

// Inline SVG icon component for the question mark inside a box/circle
const QuestionIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-indigo-600 shrink-0"
  >
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

// Component for a single FAQ item
const FAQCard: React.FC<{ item: FAQItem }> = ({ item }) => {
  return (
    <div className="flex space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300">
      <div className="pt-1">
        <QuestionIcon />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {item.question}
        </h3>
        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
};

// Main App component
const App: React.FC = () => {
  // Split data into two columns for the large screen layout
  const col1 = FAQ_DATA.filter((_, index) => index % 2 === 0); // 0, 2, 4
  const col2 = FAQ_DATA.filter((_, index) => index % 2 !== 0); // 1, 3, 5

  return (
    <div className="min-h-screen bg-gray-50 font-sans p-4 sm:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-12 sm:mb-16">
          <p className="text-sm text-[#2c5e2b] font-semibold mb-2">
            Frequently Asked Questions
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-6">
            Your Web Development Questions Answered-FAQs
          </h1>
        </header>

        {/* FAQ Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-12">
          {/* Column 1 (Left side items: 1, 3, 5) */}
          <div className="space-y-10">
            {col1.map((item) => (
              <FAQCard key={item.id} item={item} />
            ))}
          </div>

          {/* Column 2 (Right side items: 2, 4, 6) */}
          <div className="space-y-10">
            {col2.map((item) => (
              <FAQCard key={item.id} item={item} />
            ))}

            {/* Added a subtle light background to simulate the image's overall look for the right column */}
            <div className="absolute inset-0 bg-yellow-50/10 -z-10 rounded-xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
