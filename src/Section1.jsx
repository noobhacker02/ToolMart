import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

/**
 * A reusable component for displaying a single product item in the main carousels.
 * It now includes product name, price, and a hover-to-show "Add to Cart" button.
 */
const CarouselItem = ({ product }) => (
    <div className="flex-shrink-0 w-48 group cursor-pointer" role="group" aria-label={product.name}>
        <div className="relative bg-gray-100 rounded-lg w-full h-48 flex items-center justify-center overflow-hidden transition-shadow duration-300 hover:shadow-lg">
            <img 
                src={product.imgSrc} 
                alt={product.alt} 
                className="w-full h-full object-contain p-2 transition-transform duration-300" 
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/200x200/e2e8f0/cccccc?text=Image+Not+Found'; }}
            />
            {/* Updated Button: Positioned to bottom-right and made smaller */}
            <button className="absolute bottom-2 right-2 bg-orange-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-orange-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500" aria-label="Add to cart">
                <ShoppingCart className="w-4 h-4" />
            </button>
        </div>
        <div className="mt-2 text-center">
            <p className="text-sm font-medium text-gray-800 truncate">{product.name}</p>
            <p className="text-md font-bold text-gray-900">{product.price}</p>
        </div>
    </div>
);

/**
 * A reusable component for the main horizontally scrolling product carousels.
 * Features auto-rotation, hover-to-pause, and navigation arrows with orange hover effect.
 */
const ProductCarousel = ({ title, products }) => {
    const carouselRef = useRef(null);
    const intervalRef = useRef(null);

    const scroll = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.clientWidth;
            carouselRef.current.scrollBy({ 
                left: direction === 'left' ? -scrollAmount : scrollAmount, 
                behavior: 'smooth' 
            });
        }
    };

    const startAutoScroll = React.useCallback(() => {
        stopAutoScroll();
        intervalRef.current = setInterval(() => {
            if (carouselRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
                if (scrollLeft + clientWidth >= scrollWidth - 1) {
                    carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scroll('right');
                }
            }
        }, 4000);
    }, []);

    const stopAutoScroll = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        startAutoScroll();
        return () => stopAutoScroll();
    }, [products, startAutoScroll]);


    return (
        <div 
            className="bg-white p-4 md:p-6 rounded-xl shadow-sm mb-8 group relative"
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
        >
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">
                    {title}
                </h3>
                <a href="#" className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors flex-shrink-0 ml-4">
                    See more
                </a>
            </div>
            <div className="relative">
                <div ref={carouselRef} className="flex overflow-x-auto space-x-4 md:space-x-6 pb-4 no-scrollbar" role="list">
                    {products.map((product, index) => (
                        <CarouselItem key={index} product={product} />
                    ))}
                </div>
                <button onClick={() => scroll('left')} className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-white/80 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 border-2 border-transparent hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500" aria-label="Scroll left">
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button onClick={() => scroll('right')} className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-white/80 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 border-2 border-transparent hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500" aria-label="Scroll right">
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
            </div>
        </div>
    );
};

/**
 * A component for the top grid of deal cards, now with image carousels inside.
 */
const DealCard = ({ card }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = (e) => {
        e.stopPropagation(); // Prevent card click when arrow is clicked
        setCurrentIndex((prevIndex) => (prevIndex + 1) % card.images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex - 1 + card.images.length) % card.images.length);
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
            <h4 className="font-bold text-lg text-gray-900 mb-2 h-14">{card.title}</h4>
            <div className="relative h-48 w-full bg-gray-100 rounded-lg mb-2 flex items-center justify-center overflow-hidden">
                <img src={card.images[currentIndex].imgSrc} alt={card.images[currentIndex].alt} className="w-full h-full object-contain p-2 transition-opacity duration-300"/>
                <button onClick={prevImage} className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/50 rounded-full w-8 h-8 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-transparent hover:border-orange-500 focus:outline-none" aria-label="Previous image">
                    <ChevronLeft className="w-5 h-5 text-gray-800" />
                </button>
                <button onClick={nextImage} className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/50 rounded-full w-8 h-8 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-transparent hover:border-orange-500 focus:outline-none" aria-label="Next image">
                    <ChevronRight className="w-5 h-5 text-gray-800" />
                </button>
            </div>
            <p className="text-sm text-gray-700 truncate">{card.productName}</p>
            <p className="text-sm font-bold text-orange-600">{card.price}</p>
        </div>
    );
};


/**
 * A new section to encourage user sign-in for personalized recommendations.
 */
const RecommendationsSection = () => (
    <section className="my-8">
        <div className="text-center bg-white border border-gray-200 rounded-xl shadow-sm py-8 px-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">See personalized recommendations</h3>
            <button className="bg-orange-500 text-white font-bold py-2 px-12 rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow hover:shadow-md">
                Sign in
            </button>
            <p className="text-sm mt-3">
                New customer? <a href="#" className="text-orange-500 hover:underline">Start here.</a>
            </p>
        </div>
    </section>
);

/**
 * A component to showcase top brands with their logos and available discounts.
 */
const BrandShowcase = () => {
    // Sample data for brands. Replace with your actual brand data.
    const brands = [
  { name: "BOSCH", discount: "Up to 70% OFF", logo: "https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg" },
  { name: "DEWALT", discount: "Up to 65% OFF", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/DeWalt_Logo.svg/500px-DeWalt_Logo.svg.png" },
  { name: "MAKITA", discount: "Flat 10% OFF", logo: "https://1000logos.net/wp-content/uploads/2017/12/Makita-logo.png" },
  { name: "STANLEY", discount: "Up to 75% OFF", logo: "https://1000logos.net/wp-content/uploads/2020/08/Stanley-Logo.png" },
  { name: "HILTI", discount: "Up to 58% OFF", logo: "https://1000logos.net/wp-content/uploads/2020/08/Hilti-Logo.png" }
];
    return (
        <section className="bg-white py-12 rounded-2xl shadow-sm mb-12">
            <div className="container mx-auto px-4">
                <h3 className="text-center text-2xl font-bold text-gray-800 mb-8">Shop by Top Brands</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {brands.map((brand, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg p-4 text-center hover:bg-gray-100 transition-all duration-300 flex flex-col items-center justify-center transform hover:scale-105 cursor-pointer">
                            <div className="flex justify-center items-center mb-3 h-12">
                                <img src={brand.logo} alt={`${brand.name} logo`} className="max-h-full max-w-full object-contain"/>
                            </div>
                            <div className="text-xs text-orange-600 font-semibold">{brand.discount}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


/**
 * The main component for the page, now named Section1.
 */
const Section1 = () => {
    // State for mounting animation
    const [isMounted, setIsMounted] = React.useState(false);

    // Data for the card grid section with multiple images
    const dealCards = [
        {
            title: "Starting ₹499 | Essential Hand Tools",
            productName: "Various Hand Tool Sets",
            price: "From ₹499.00",
            images: [
                { imgSrc: "https://www.tradetoolgiveaways.co.uk/wp-content/uploads/2023/09/IMG_1777-scaled.jpeg", alt: "Screwdriver and Plier Set" },
                { imgSrc: "https://media.diy.com/is/image/Kingfisher/magnusson-8-piece-orange-yellow-tool-set-scs13~3663602818854_01i?$MOB_PREV$&$width=600&$height=600", alt: "Wrench and Hammer Set" },
                { imgSrc: "https://5.imimg.com/data5/ANDROID/Default/2022/5/BX/NK/LM/1102370/product-jpeg.jpg", alt: "Full Tool Kit" }
            ]
        },
        {
            title: "Heavy-Duty Power Tools",
            productName: "Cordless Drills & Drivers",
            price: "From ₹4,999.00",
            images: [
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBFuzJSSEsPbpkwqOvlkvunpjSYhAlzgAh-g&s", alt: "Cordless Impact Drill" },
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQssdF11KF2iH1m-WN8Q0QSBKrxBdVGsaxQaA&s", alt: "Drill in action" },
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIORJIzfwkjP3rbCj22T7iJQGywTgcdpdgYw&s", alt: "Drill with battery pack" }
            ]
        },
        {
            title: "Up to 65% off | Safety Gear",
            productName: "Helmets, Gloves & Goggles",
            price: "From ₹799.00",
            images: [
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZSctowtOC97Nr3Ktjfo4_wivXZ-Zfrtnww&s", alt: "Industrial Safety Helmet and Goggles" },
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRMADJZTtgYZ9mDQZ39-icHvRDmSiuUpfYQ&s", alt: "Full safety kit" },
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EqYQ0X6-lGHndlgMwI5RiTQzrhC5NaYjRe5RjeuHgZuQF-MeCs58uZZedScPb7vfLXg&usqp=CAU", alt: "Safety Gloves" }
            ]
        },
        {
            title: "Customers' Most-Loved Tools",
            productName: "Precision Measuring Tools",
            price: "From ₹1,299.00",
            images: [
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Y6nLGWInjg8UfFhDyr_fX1ZMvuOVYNqnx0SZZZr8jIiY6WnyRMjBTZU1XGPciytT6Uk&usqp=CAU", alt: "Digital Vernier Caliper" },
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjZ_hhE9tohHcXsVQI0eLdna_B4rB3omeYw&s", alt: "Using a caliper" },
                { imgSrc: "https://www.creeklinehouse.com/wp-content/uploads/2024/04/Tape-Measure-01-Web.jpg", alt: "Measuring Tape" }
            ]
        }
    ];


const powerTools = [
  {name: 'Angle Grinder', price: '₹3,499', imgSrc: 'https://cdn.moglix.com/p/x8zS7FCsXO4EE-medium.jpg', alt: 'Angle Grinder' },
  {name: 'Jigsaw', price: '₹2,899', imgSrc: 'https://cdn.moglix.com/p/Q2CcKGlPyKq5M-medium.jpg', alt: 'Jigsaw' },
  {name: 'Cordless Drill', price: '₹4,999', imgSrc: 'https://cdn.moglix.com/p/Px9Y2XQ46dNET-medium.jpg', alt: 'Cordless Drill' },
  {name: 'Circular Saw', price: '₹5,299', imgSrc: 'https://cdn.moglix.com/p/5JzjecrP8bwsk-medium.jpg', alt: 'Circular Saw' },
  {name: 'Orbital Sander', price: '₹2,199', imgSrc: 'https://cdn.moglix.com/p/s3RGc05M9lIWk-medium.jpg', alt: 'Orbital Sander' },
  {name: 'Heat Gun', price: '₹1,499', imgSrc: 'https://cdn.moglix.com/p/YoKaerA5TdiDD-medium.jpg', alt: 'Heat Gun' },
  {name: 'Angle Grinder', price: '₹3,499', imgSrc: 'https://cdn.moglix.com/p/5ru67bycKhD5D-medium.jpg', alt: 'Impact Driver' },
  {name: 'Cordless Drill', price: '₹4,999', imgSrc: 'https://cdn.moglix.com/p/V0cJhAMhs5l5G-medium.jpg', alt: 'Wrench Set' },
  {name: 'Heat Gun', price: '₹1,499', imgSrc: 'https://cdn.moglix.com/p/JrcAywcFZlGww-medium.jpg', alt: 'Pliers' }
];

    const bathroomTaps = [
        { name: 'Pillar Cock Tap', price: '₹1,299', imgSrc: 'https://cdn.moglix.com/p/PVYlftuK1vQNK-medium.jpg', alt: 'Welding Machine' },
        { name: 'Wall Mounted Sink Tap', price: '₹1,899', imgSrc: 'https://cdn.moglix.com/p/CcHchPNHn7fwB-medium.jpg', alt: 'Safety Helmet' },
        { name: 'Long Body Bib Tap', price: '₹999', imgSrc: 'https://cdn.moglix.com/p/fq7DClc9zEmlR-medium.jpg', alt: 'Safety Gloves' },
        { name: 'Basin Mixer', price: '₹3,499',imgSrc: 'https://cdn.moglix.com/p/x5b9xh6z3tLrm-medium.jpg', alt: 'Cutting Discs' },
        {  name: 'Angle Valve', price: '₹799', imgSrc: 'https://cdn.moglix.com/p/hnODoGjJJy3ZE-medium.jpg', alt: 'Digital Caliper' },
        { name: 'Swan Neck Tap', price: '₹2,199',imgSrc: 'https://cdn.moglix.com/p/IpaBGe2ubkWVm-medium.jpg', alt: 'Screwdriver Set' },
        { name: 'Basin Mixer', price: '₹3,499',imgSrc: 'https://cdn.moglix.com/p/oIhhycWfjeM2p-medium.jpg', alt: 'Welding Machine' },
        { name: 'Basin Mixer', price: '₹3,499',imgSrc: 'https://cdn.moglix.com/p/fq7DClc9zEmlR-medium.jpg', alt: 'Safety Helmet' },
 ];

    // Effect to handle component mount animation
    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <style>{`
                /* Custom utility to hide scrollbars */
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
            <main className={`container mx-auto px-4 py-8 transition-opacity duration-700 ease-in-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
                
                {/* New Grid Section with Image Carousels in Cards */}
                <section className="mb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {dealCards.map((card, index) => (
                            <DealCard key={index} card={card} />
                        ))}
                    </div>
                </section>

                {/* Product Carousel Sections */}
                <ProductCarousel title="Top Picks in Power Tools" products={powerTools} />
                <ProductCarousel title="Bathroom Taps and Faucets" products={bathroomTaps} />

                {/* Brand Showcase Section */}
                <BrandShowcase />

                {/* Recommendations Sign-in Section */}
                <RecommendationsSection />

            </main>
        </div>
    );
};

export default Section1;
