import React from 'react';

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
    question: "How long does the software development process take?",
    answer: "It depends on each project and the client's requirments. It can take from 2-3 weeks or more. First, analyse the project, and once you are directed to the team, you will get to know the actual time.",
  },
  {
    id: 2,
    question: "Should I know about technology so I can work with you?",
    answer: "We are here to provide you with our software and digital marketing services. Even if you don’t know much about technology, it is ok! Our team will guide you all about it and explain the detailed instructions to you on how things work.",
  },
  {
    id: 3,
    question: "Do you guarantee the quality of your service?",
    answer: "We guarantee the quality of the services we provide as we have more than a decade of experience in our field, and we are one of the leading digital marketing platforms of the year; we do not compromise on quality.",
  },
  {
    id: 4,
    question: "What is it like to work with one of your teams?",
    answer: "Our customers usually state that ‘working with your team is more comforting and easy to deal with things typa experience’. We create a strong communication bond with our customers and work closely with them.",
  },
  {
    id: 5,
    question: "Why use software development services in the USA (Florida, California, Dallas, and Texas)?",
    answer: "They offer skilled developers, advanced tech, and custom solutions for high-quality, secure, and scalable software, with local expertise and faster delivery.",
  },
  {
    id: 6,
    question: "How will you communicate and do the meetings with me?",
    answer: "We communicate with you through Skype, messages and direct calls. If anything needs to be discussed in a detailed meeting, we will start the visual meeting mutually and discuss things with you.",
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
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <path d="M12 17h.01"/>
    <circle cx="12" cy="12" r="10"/>
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
        <p className="text-gray-600 leading-relaxed">
          {item.answer}
        </p>
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
            Frequently Asked Questions: Your FAQs Roadmap Awaits!
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-6">
            Below are the most asked questions related to our services.
          </h1>
        </header>

        {/* FAQ Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-12">
          
          {/* Column 1 (Left side items: 1, 3, 5) */}
          <div className="space-y-10">
            {col1.map(item => (
              <FAQCard key={item.id} item={item} />
            ))}
          </div>

          {/* Column 2 (Right side items: 2, 4, 6) */}
          <div className="space-y-10">
            {col2.map(item => (
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