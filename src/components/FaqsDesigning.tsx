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
    question: "Can you design a unique logo for my company?",
    answer:
      "Yes, we have a group of experts with over 15 years of experience designing logos. They serve clients in Texas, Florida, and California, and each logo they design is unique, imaginative, and important.",
  },
  {
    id: 2,
    question: "What impact does graphic design have on a brand's internet visibility?",
    answer:
      "A memorable brand image is largely influenced by graphic design. You stand out from the competitors and draw in customers with an imaginative graphic design.",
  },
  {
    id: 3,
    question: "What kinds of services do you provide for graphic design?",
    answer:
      "In areas like the USA, Dallas, Texas, Florida, and California, Intersys provides UI/UX design, prototyping, logo designs, illustrations, content production, motion graphics, and more.",
  },
  {
    id: 4,
    question: "How Can I Begin Using Your Services for Graphic Design?",
    answer:
      "You can use our service form or get in touch with us directly to begin using our Graphic Design Solutions website. Then we'll come over to you and start the process.",
  },
  {
    id: 5,
    question: "How can the standard of graphic design services be guaranteed?",
    answer:
      "For more than ten years, we have been providing high-quality industry services. We maintain communication with our clients throughout the entire process, which increases their satisfaction with the quality and outcomes they may expect.",
  },
  {
    id: 6,
    question: "If the client has an idea of their own, do you collaborate with them?",
    answer:
      "Indeed, we do! We make sure our clients are receiving what they desire. We pay attention to our clients' ideas and use our imagination to deliver what they desire.",
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
            Commonly Asked Questions: Clear up any confusion!
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
