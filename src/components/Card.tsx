import React, { useState } from 'react';

// --- Data Structure for Portfolio Items ---
type CategoryType = 'logos' | 'websites' | 'video' | 'stationery' | 'illustration' | 'mobile_apps';

interface PortfolioItem {
  id: string;
  category: CategoryType;
  imageUrl: string;
  altText: string;
}

interface Category { // Added interface to strongly type the categories array
  label: string;
  value: CategoryType;
}

// Replaced all external image URLs with reliable placeholders
const allPortfolioItems: PortfolioItem[] = [
  // Logos
  { id: 'logo1', category: 'logos', imageUrl: '/l1.jpg', altText: 'Minimalist black logo on white background' },
  { id: 'logo2', category: 'logos', imageUrl: '/l2.jpg', altText: 'Green abstract logo design' },
  { id: 'logo3', category: 'logos', imageUrl: '/l3.jpg', altText: 'Red framed text logo' },
  { id: 'logo4', category: 'logos', imageUrl: '/l4.jpg', altText: 'Red HUUUGE logo on black' },
  { id: 'logo5', category: 'logos', imageUrl: '/l5.jpg', altText: 'Neon green text logo emotions' },
  { id: 'logo6', category: 'logos', imageUrl: '/l6.jpg', altText: 'White script logo on black' },
  { id: 'logo7', category: 'logos', imageUrl: '/l7.jpg', altText: 'Simple geometric logo' },
  { id: 'logo8', category: 'logos', imageUrl: '/l8.jpg', altText: 'Brand logo on a dark background' },
   { id: 'logo9', category: 'logos', imageUrl: '/l9.jpg', altText: 'Red framed text logo' },


  // Websites
  { id: 'web1', category: 'websites', imageUrl: '/l9.jpg', altText: 'Website homepage on a laptop' },
  { id: 'web2', category: 'websites', imageUrl: '/l8.jpg', altText: 'Website design showcasing services' },
  { id: 'web3', category: 'websites', imageUrl: '/l5.jpg', altText: 'Clean modern website layout' },
  // Video
  { id: 'vid1', category: 'video', imageUrl: '/l2.jpg', altText: 'Video editing timeline' },
  { id: 'vid2', category: 'video', imageUrl: '/l2.jpg', altText: 'Filming a commercial video' },
   { id: 'vid3', category: 'video', imageUrl: '/l2.jpg', altText: 'Filming a commercial video' },
  // Stationery
  { id: 'stat1', category: 'stationery', imageUrl: '/l6.jpg', altText: 'Branded stationery on a desk' },
  { id: 'stat2', category: 'stationery', imageUrl: '/l4.jpg', altText: 'Elegant business card design' },
  { id: 'stat3', category: 'stationery', imageUrl: '/l4.jpg', altText: 'Elegant business card design' },
  // Illustration
  { id: 'ill1', category: 'illustration', imageUrl: '/l9.jpg', altText: 'Digital illustration artwork' },
  { id: 'ill2', category: 'illustration', imageUrl: '/l1.jpg', altText: 'Abstract vector illustration' },
  { id: 'ill3', category: 'illustration', imageUrl: '/l1.jpg', altText: 'Abstract vector illustration' },
  // Mobile Apps
  { id: 'app1', category: 'mobile_apps', imageUrl: '/l3.jpg', altText: 'Mobile app interface on smartphone' },
  { id: 'app2', category: 'mobile_apps', imageUrl: '/l9.jpg', altText: 'User using a mobile app' },
  { id: 'app3', category: 'mobile_apps', imageUrl: '/l9.jpg', altText: 'User using a mobile app' },
];

const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('logos');
  const [itemsToShow, setItemsToShow] = useState(6); // Initial number of items to show

  // FIX: Explicitly typed the categories array using the Category interface
  const categories: Category[] = [
    { label: 'Logos', value: 'logos' },
    { label: 'Websites', value: 'websites' },
    { label: 'Video', value: 'video' },
    { label: 'Stationery', value: 'stationery' },
    { label: 'Illustration', value: 'illustration' },
    { label: 'Mobile Apps', value: 'mobile_apps' },
  ];

  const filteredItems = allPortfolioItems.filter(item => item.category === activeCategory);
  const displayedItems = filteredItems.slice(0, itemsToShow);

  const handleCategoryClick = (category: CategoryType) => {
    setActiveCategory(category);
    setItemsToShow(6); // Reset items to show when category changes
  };

  const handleLoadMore = () => {
    setItemsToShow(prev => prev + 6); // Load 6 more items
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center md:text-left mb-12">
          <p className="text-lg text-[#98bc62] font-semibold mb-2">Our Recent Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c5e2b] leading-tight mb-4">
            Solutions That Make the Future Better!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto md:mx-0 text-lg">
            With the support of thousands of clients and satisfied brands worldwide, you can place your trust in us. Don't let your brand showcase the traditional approach, but design a trending digital presence.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center md:justify-center gap-4 mb-12 border-b border-gray-200 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategoryClick(cat.value)}
              className={`
                px-6 py-2 rounded-full text-lg font-medium transition-all duration-300
                ${activeCategory === cat.value
                  ? 'bg-[#2c5e2b] text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-[#2c5e2b]'
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.length > 0 ? (
            displayedItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9 sm:aspect-h-10">
                <img
                  src={item.imageUrl}
                  alt={item.altText}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                {/* Custom Modal Placeholder (to avoid using alert()) */}
                <div className="absolute inset-0 bg-[#2c5e2b] bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                     // Note: Replaced alert() with a console log for compliance, you should implement a full modal component.
                     onClick={() => console.log(`Viewing project details for: ${item.altText}`)}
                >
                  <p className="text-white text-xl font-bold px-4 text-center">View Project: {item.category.toUpperCase()}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="lg:col-span-3 text-center text-gray-500 text-xl py-10">
              No items found for this category.
            </div>
          )}
        </div>

        {/* Load More Button */}
        {filteredItems.length > itemsToShow && (
          <div className="text-center mt-16">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 border-2 rounded-full text-lg text-[#2b3d0f] hover:bg-[#2c5e2b] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Load More
            </button>
          </div>
        )}

        {/* Loading Spinner Placeholder */}
        {filteredItems.length > itemsToShow && (
            <div className="flex justify-center items-center mt-8">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-emerald-600"></div>
            </div>
        )}

      </div>
    </section>
  );
};

// Wrapper App component to render the Portfolio Section
const App: React.FC = () => (
  <div className=" bg-white font-inter">
    <PortfolioSection />
  </div>
);

export default App;