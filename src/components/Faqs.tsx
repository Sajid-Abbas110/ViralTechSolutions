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
    question: "Can I use the same license to run NSDroid on both my phone and tablet?",
    answer: "Yes, you can use the same license to run NSDroid on both my phone and tablet by inserting the license key along with your user ID and password that was emailed to you.",
  },
  {
    id: 2,
    question: "What technologies and platforms do we specialize in?",
    answer: "ViralTechSolutions' expertise ranges in various technologies, including but not limited to Adobe Creative Cloud, Photoshop, Adobe XD, Illustrator PHP, JAVA, .NET, and Python. We customize the technology stack to meet the specific requirements of your project.",
  },
  {
    id: 3,
    question: "What is a classifier in machine learning as a service?",
    answer: "A classifier is an algorithm, in other words, the rules used by machines to classify data. Whereas, a classification model, on the other hand, is the end result of your classifier's machine learning. The model is trained using the classifier, so that the model, ultimately, classifies data.",
  },
  {
    id: 4,
    question: "Do you provide ongoing maintenance and support app development?",
    answer: "Yes, we offer ongoing maintenance and support services for apps we develop, which include bug fixes, updates, and regular performance optimization.",
  },
  {
    id: 5,
    question: "Is visual design crucial for SEO and search engine rankings?",
    answer: "Visual design boosts click-through rates, user engagement, and organic traffic to websites, eventually bridging a link with the SEO strategies and raising search engine rankings to connect with your audience.",
  },
  {
    id: 6,
    question: "How do you ensure data security for client projects?",
    answer: "We adhere to industry-leading security protocols, including end-to-end encryption, regular security audits, and strict access controls. All client data is treated with the highest level of confidentiality and stored on secure, private cloud infrastructure.",
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
            Frequently Asked Questions
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-6">
            Empower your knowledge with us
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