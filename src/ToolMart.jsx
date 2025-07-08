import React, { useState, useEffect } from 'react';
import { Search, MapPin, User, ShoppingCart, Menu, Phone, ChevronDown, X, ArrowRight, Tag } from 'lucide-react';

// --- SVG Icons for the new footer ---
// Using inline SVGs for icons to make the component self-contained and performant.
const MailIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const FacebookIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const TwitterIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M22.46,6.54a9.1,9.1,0,0,1-2.65.73,4.57,4.57,0,0,0,2-2.55,9.18,9.18,0,0,1-2.93,1.12,4.56,4.56,0,0,0-7.77,4.15,12.94,12.94,0,0,1-9.39-4.76,4.56,4.56,0,0,0,1.41,6.08,4.53,4.53,0,0,1-2.06-.57v.06a4.56,4.56,0,0,0,3.66,4.47,4.57,4.57,0,0,1-2.05.08,4.56,4.56,0,0,0,4.26,3.16,9.15,9.15,0,0,1-5.66,1.94,9.48,9.48,0,0,1-1.09-.07,12.89,12.89,0,0,0,7,2.06c8.38,0,12.95-6.94,12.95-12.95,0-.2,0-.4,0-.59A9.22,9.22,0,0,0,22.46,6.54Z"/>
    </svg>
);

const InstagramIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12,2.163c3.204,0,3.584.012,4.85.07,3.252.148,4.771,1.691,4.919,4.919.058,1.265.069,1.645.069,4.85s-.012,3.584-.07,4.85c-.148,3.227-1.669,4.771-4.919,4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85c.148-3.227,1.669-4.771,4.919-4.919C8.416,2.175,8.796,2.163,12,2.163M12,0C8.74,0,8.333.014,7.053.072,2.695.272.273,2.69.073,7.052.014,8.333,0,8.74,0,12s.014,3.667.072,4.947c.2,4.358,2.618,6.78,6.98,6.98C8.333,23.986,8.74,24,12,24s3.667-.014,4.947-.072c4.358-.2,6.78-2.618,6.98-6.98C23.986,15.667,24,15.26,24,12s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014,15.26,0,12,0Z"/>
        <path d="M12,5.838a6.162,6.162,0,1,0,6.162,6.162A6.162,6.162,0,0,0,12,5.838Zm0,10.323A4.162,4.162,0,1,1,16.162,12,4.162,4.162,0,0,1,12,16.162Z"/>
        <circle cx="18.406" cy="5.594" r="1.438"/>
    </svg>
);


// Component for individual cards used in the grid
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-1 ${className}`}>
    {children}
  </div>
);
    
const ToolMart = () => {
  const [isPromoBarVisible, setIsPromoBarVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- Data for the page ---

const heroSlides = [
  {
    title: "Built to Last. Priced to Move.",
    subtitle: "Get heavy-duty performance without the heavy-duty price tag. Up to 40% off.",
    buttonText: "Explore Deals",
    img: "https://www.manufacturingtodayindia.com/cloud/2022/03/15/kHbwzTeY-Cutting-tools-1200x675.jpg"
  },
  {
    title: "Precision Tools for Perfect Results.",
    subtitle: "The finest measurement and calibration tools for professionals who demand accuracy.",
    buttonText: "Discover Precision",
    img: "https://cdn.prod.website-files.com/65afd8dc16873da38e2b5ecb/66017a7584c560cb855478a4_2022_08_AdobeStock_191934574-1.jpeg"
  },
  {
    title: "Your Workshop's Next Upgrade.",
    subtitle: "From hobbyists to master craftsmen, find the perfect tools to complete your setup.",
    buttonText: "Shop New Arrivals",
    img: "https://www.careersatkaak.com/wp-content/uploads/2024/04/Frezen_2-2000x1334.jpg"
  }
];

const brands = [
  { name: "BOSCH", discount: "Up to 70% OFF", logo: "https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg" },
  { name: "DEWALT", discount: "Up to 65% OFF", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/DeWalt_Logo.svg/500px-DeWalt_Logo.svg.png" },
  { name: "MAKITA", discount: "Flat 10% OFF", logo: "https://1000logos.net/wp-content/uploads/2017/12/Makita-logo.png" },
  { name: "STANLEY", discount: "Up to 75% OFF", logo: "https://1000logos.net/wp-content/uploads/2020/08/Stanley-Logo.png" },
  { name: "HILTI", discount: "Up to 58% OFF", logo: "https://1000logos.net/wp-content/uploads/2020/08/Hilti-Logo.png" }
];

const toolCards = [
  {
    title: "Power Tools Starting at ₹999",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxntzAtR-fXtl682FX8s2aCa2rmdNSaDaVw&s",
    description: "Professional grade power tools",
    link: "Shop Now"
  },
  {
    title: "Industrial Equipment",
    items: [
      { name: "Welding", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EqYQ0X6-lGHndlgMwI5RiTQzrhC5NaYjRe5RjeuHgZuQF-MeCs58uZZedScPb7vfLXg&usqp=CAU" },
      { name: "Cutting", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRMADJZTtgYZ9mDQZ39-icHvRDmSiuUpfYQ&s" },
      { name: "Measuring", image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
      { name: "Safety Gear", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZSctowtOC97Nr3Ktjfo4_wivXZ-Zfrtnww&s" }
    ],
    link: "Explore all"
  },
  {
    title: "Up to 75% off | Hand Tools",
    items: [
      { name: "Wrenches", image: "https://webstore.ansi.org/Images/DLP/fasteners/Wrenches.webp" },
      { name: "Hammers", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJo-0-ddcrZGPqGbpE_H_nZ1xBe5yGUPPNug&s" },
      { name: "Pliers", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwCmHAU_GZMIHfk3RX9zJ5OwFkOnZDi7ODhmUWVD1hOHHJfykLsEpWUxsOV8ferGUnClw&usqp=CAU" },
      { name: "Tool Sets", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTunT13hV52kL7KDlk_OJZFzys0xar0WKOfwg&s" }
    ],
    link: "See all offers"
  },
  {
    title: "Automotive Tools",
    image: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Tools for every vehicle",
    link: "View Collection"
  },
  {
    title: "Workshop Storage Solutions",
    items: [
      { name: "Welding", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EqYQ0X6-lGHndlgMwI5RiTQzrhC5NaYjRe5RjeuHgZuQF-MeCs58uZZedScPb7vfLXg&usqp=CAU" },
      { name: "Cutting", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRMADJZTtgYZ9mDQZ39-icHvRDmSiuUpfYQ&s" },
      { name: "Measuring", image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
      { name: "Safety Gear", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZSctowtOC97Nr3Ktjfo4_wivXZ-Zfrtnww&s" }
    ],
    link: "Explore all"
  },
  {
    title: "Workshop Storage Solutions",
    image: "https://www.bhg.com/thmb/bMOOjyzzvNHDEa0DNjgWBuodBTE=/2000x0/filters:no_upscale():strip_icc()/organized-garage-bins-paint-strips-3CKIk-xWK53B6sOjGjz5f--2000-c24c1b0d5e9c43edadb38ec109fefde1.jpg",
    description: "Keep your tools organized and ready",
    link: "Shop Storage"
  },
  {
    title: "Sanding & Grinding",
    items: [
      { name: "Orbital Sanders", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvo40pUSFrVFQ8dtXx0iJHdh7X0QnaD5VeTw&s" },
      { name: "Angle Grinders", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6m1MOEP4jHs1tD8ZYCC3fzf4Swqn3bMB0A&s" },
      { name: "Sandpaper Packs", image: "https://cimg3.ibsrv.net/cimg/www.doityourself.com/660x300_85-1/827/Assorted-Sandpaper-119827.jpg" },
      { name: "Safety Gear", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZSctowtOC97Nr3Ktjfo4_wivXZ-Zfrtnww&s" }
    ],
    link: "Browse Supplies"
  },
  {
    title: "Workshop Layouts & Accessories",
    image: "https://blogcdn.axminstertools.com/wp-content/uploads/2017/08/garage-workshop-chisels-663x442.jpg",
    description: "Inspiration for your space",
    link: "Design Ideas"
  }
];


  // --- Effects ---

  useEffect(() => {
    setIsMounted(true);
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <style>{`
        html { scroll-behavior: smooth; }
        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      
      
      {/* Main Content */}
      <main className={`container mx-auto px-4 pt-8 transition-opacity duration-700 ease-in-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero Section */}
        <section className="mb-12 h-96 relative overflow-hidden rounded-2xl shadow-lg">
            {heroSlides.map((slide, index) => (
                <div 
                    key={index}
                    className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out"
                    style={{ opacity: currentSlide === index ? 1 : 0 }}
                >
                    <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center p-8 md:p-16">
                        <div className="md:w-1/2 text-white">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight transition-all duration-500 transform" style={{transform: currentSlide === index ? 'translateY(0)' : 'translateY(20px)', opacity: currentSlide === index ? 1 : 0, transitionDelay: '200ms' }}>{slide.title}</h1>
                            <p className="text-md md:text-lg mb-8 transition-all duration-500 transform" style={{transform: currentSlide === index ? 'translateY(0)' : 'translateY(20px)', opacity: currentSlide === index ? 1 : 0, transitionDelay: '400ms' }}>{slide.subtitle}</p>
                            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center" style={{opacity: currentSlide === index ? 1 : 0, transitionDelay: '600ms'}}>
                                {slide.buttonText} <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {heroSlides.map((_, index) => (
                    <button 
                        key={index} 
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'} transition-all duration-300`}
                    ></button>
                ))}
            </div>
        </section>
        
        {/* Product Cards Section */}
        <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Deals You Can't Miss</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {toolCards.map((card, index) => (
                <Card key={index} className={`transition-all duration-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${index * 100}ms`}}>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 h-16">{card.title}</h3>
                    
                    {card.items ? (
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {card.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="text-center group">
                            <div className="w-full h-24 rounded-lg mb-2 overflow-hidden bg-gray-100">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                            </div>
                            <p className="text-xs text-gray-600 font-semibold">{item.name}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="mb-4">
                        <div className="w-full h-48 rounded-lg mb-2 overflow-hidden group bg-gray-100">
                          <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                        </div>
                      </div>
                    )}
                    
                    <a href="#" className="text-orange-500 hover:text-orange-600 font-semibold text-sm flex items-center group">
                      {card.link} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"/>
                    </a>
                  </div>
                </Card>
              ))}
            </div>
        </section>

        
      </main>

    <br></br>            
    </div>
  );
};

export default ToolMart;
