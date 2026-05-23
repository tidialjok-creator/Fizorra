import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Zap, Target, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const heroFlavors = [
  {
    titleFirst: "Berry",
    titleSecond: "Loops",
    desc: "Unleash the wild with Blackberry Beat. Dark, intense, and full of attitude.",
    color: "bg-[#8B5CF6]",
    badge: "YOUR DAILY DOSE OF BERRY BLISS!",
    image: "/images/fizzora_can_mockup_1779203306875.png"
  },
  {
    titleFirst: "Mango",
    titleSecond: "Craze",
    desc: "A sunglasses-wearing punch of pure tangerine and juicy mango vibes.",
    color: "bg-[#FF9100]",
    badge: "TROPICAL MADNESS IN A CAN!",
    image: "/images/mango_can_1779203871104.png"
  },
  {
    titleFirst: "Electric",
    titleSecond: "Blue",
    desc: "A lightning bolt to your system. Formulated to keep you entirely dialed in.",
    color: "bg-[#06B6D4]",
    badge: "100% PURE RAW VOLTAGE!",
    image: "/images/electric_can_1779203889119.png"
  }
];

export default function Landing() {
  const [flavorIdx, setFlavorIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlavorIdx((prev) => (prev + 1) % heroFlavors.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const currentFlavor = heroFlavors[flavorIdx];

  return (
    <div className="w-full bg-[#EDE4D3] overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-[5%] py-16 md:py-24 lg:py-32 flex items-center min-h-[90vh]">
        {/* Abstract squiggles */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="#1C192E" strokeWidth="8" d="M10,100 Q50,0 90,100 T190,100" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 w-48 h-48 opacity-20 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="#BEE36B" strokeWidth="12" d="M10,100 Q80,180 150,50" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1, delay: 0.2 }}
            className="relative flex justify-center mt-12 lg:mt-0 lg:order-1 order-2"
          >
            <div className={`relative w-full max-w-[340px] aspect-[4/5] ${currentFlavor.color} border-4 border-[#1C192E] rounded-[3rem] shadow-[12px_12px_0px_#1C192E] flex items-center justify-center p-0 group transition-colors duration-500 z-10 overflow-hidden`}>
               {/* Fixed masking inside to crop content without clipping the image which overflows */}
               <div className="absolute inset-x-0 inset-y-0 overflow-hidden rounded-[2.5rem]">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-white/20 rounded-full blur-3xl z-0 pointer-events-none" />
               </div>
               
               <AnimatePresence initial={false}>
                 <motion.img 
                   key={currentFlavor.image}
                   initial={{ x: '100%' }}
                   animate={{ x: 0 }}
                   exit={{ x: '-100%' }}
                   transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                   whileHover={{ scale: 1.05 }}
                   src={currentFlavor.image} 
                   alt={currentFlavor.titleFirst} 
                   className="w-full h-full object-cover z-10 drop-shadow-2xl absolute top-0 left-0 cursor-pointer"
                 />
               </AnimatePresence>
            </div>
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-10 left-4 md:-left-4 lg:-left-12 bg-[#F4DF4F] p-5 rounded-3xl border-4 border-[#1C192E] shadow-[8px_8px_0px_#1C192E] max-w-[240px] rotate-[-5deg] z-20"
            >
              <AnimatePresence mode="wait">
                <motion.h3 
                  key={currentFlavor.badge}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="font-display font-black text-[#1C192E] text-xl leading-none mb-1 transform -rotate-2"
                >
                  {currentFlavor.badge}
                </motion.h3>
              </AnimatePresence>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-xl lg:order-2 order-1"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#1C192E] bg-[#BEE36B] mb-6 shadow-[4px_4px_0px_#1C192E]">
              <Zap size={18} className="text-[#1C192E] fill-[#1C192E]" />
              <span className="text-sm font-bold text-[#1C192E] uppercase tracking-wider">New Flavor Drop</span>
            </motion.div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFlavor.titleFirst}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] text-[#1C192E] mb-6 uppercase">
                  {currentFlavor.titleFirst} <br />
                  <span className="text-[#F4DF4F] drop-shadow-[4px_4px_0px_#1C192E]">{currentFlavor.titleSecond}</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-[#1C192E]/80 font-bold mb-10 leading-relaxed max-w-md h-24">
                  {currentFlavor.desc}
                </p>
              </motion.div>
            </AnimatePresence>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <Link to="/products" className="px-8 py-4 bg-[#1C192E] text-[#BEE36B] border-2 border-[#1C192E] rounded-full font-black text-xl hover:bg-[#F4DF4F] hover:text-[#1C192E] shadow-[6px_6px_0px_#BEE36B] hover:shadow-[6px_6px_0px_#1C192E] hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide">
                Grab a Can
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-[5%] bg-[#1C192E] border-y-8 border-[#1C192E] relative overflow-hidden">
        {/* Wavy top divider inside */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
            <svg className="relative block h-[50px] w-[calc(100%+1.3px)]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#EDE4D3"></path>
            </svg>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center pt-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-display font-black mb-6 text-[#BEE36B] uppercase leading-none">Berry <br/> Power</h2>
            <p className="text-[#EDE4D3] text-xl md:text-2xl font-bold leading-relaxed max-w-lg mx-auto md:mx-0">
              Just like a sleek panther prowling through the night. It's the berry flavor with a fierce edge. Packed with powerful antioxidants that support brain function and heart health.
            </p>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-6">
             <div className="bg-[#BEE36B] p-8 rounded-[2rem] border-4 border-[#1C192E] shadow-[8px_8px_0px_#EDE4D3] transform -rotate-3 hover:rotate-0 transition-transform">
               <Flame size={48} className="text-[#1C192E] mb-4" />
               <h3 className="font-display font-black text-2xl text-[#1C192E] uppercase">Fierce Edge</h3>
               <p className="font-bold text-[#1C192E]/80 mt-2">Zero sugar, full attitude.</p>
             </div>
             <div className="bg-[#F4DF4F] p-8 rounded-[2rem] border-4 border-[#1C192E] shadow-[8px_8px_0px_#EDE4D3] transform rotate-3 mt-8 hover:rotate-0 transition-transform">
               <Target size={48} className="text-[#1C192E] mb-4" />
               <h3 className="font-display font-black text-2xl text-[#1C192E] uppercase">Focus Up</h3>
               <p className="font-bold text-[#1C192E]/80 mt-2">Natural energy from Amla Berry.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Nutrition & Ingredients */}
      <section className="py-24 px-[5%] bg-[#EDE4D3] relative">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 w-full relative">
            <div className="bg-[#F4DF4F] border-4 border-[#1C192E] rounded-[3rem] p-10 shadow-[16px_16px_0px_#1C192E]">
              <h2 className="font-display font-black text-4xl text-[#1C192E] uppercase mb-6">Ingredients</h2>
              <p className="text-xl font-bold text-[#1C192E] leading-relaxed mb-10">
                Carbonated Water, Blackberry Juice, Natural Flavors, Citric Acid, Antioxidant (Vitamin C), Organic Amla Berry Extract.
              </p>
              
              <div className="bg-white border-4 border-[#1C192E] rounded-2xl p-6">
                <h3 className="font-display font-black text-3xl text-[#1C192E] uppercase border-b-4 border-[#1C192E] pb-2 mb-4">Nutrition Facts</h3>
                <div className="flex justify-between items-end border-b-2 border-[#1C192E] pb-2 mb-2 font-bold text-[#1C192E]">
                  <span>Serving Size</span>
                  <span>1 Can (355ml)</span>
                </div>
                <div className="flex justify-between items-end border-b-4 border-[#1C192E] pb-2 mb-4 font-black text-[#1C192E] text-2xl">
                  <span>Calories</span>
                  <span>35</span>
                </div>
                
                <ul className="space-y-2 font-bold text-[#1C192E]/80 text-sm">
                  <li className="flex justify-between"><span>Total Fat</span> <span>0g</span></li>
                  <li className="flex justify-between"><span>Sodium</span> <span>15mg</span></li>
                  <li className="flex justify-between"><span>Total Carbohydrate</span> <span>6.5g</span></li>
                  <li className="flex justify-between pl-4 text-sm"><span>Includes 0.5g Added Sugars</span> <span></span></li>
                  <li className="flex justify-between"><span>Protein</span> <span>&lt;1g</span></li>
                </ul>
              </div>
            </div>
            
            {/* Wavy squiggle decoration */}
            <div className="absolute -right-8 -bottom-8 w-24 h-48 hidden md:block">
               <svg viewBox="0 0 50 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" stroke="#1C192E" strokeWidth="6" d="M25,0 Q50,25 25,50 T25,100 T25,150 T25,200" />
               </svg>
            </div>
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6 text-[#1C192E] uppercase leading-none">Fun Fact</h2>
            <p className="text-[#1C192E]/80 text-xl font-bold mb-10 max-w-lg">
              Blackberries are known for their deep color, packed with antioxidants that support brain function and heart health. So yes, drinking this makes you a genius.
            </p>
            
            <Link to="/products" className="inline-flex items-center gap-4 px-8 py-4 bg-[#BEE36B] text-[#1C192E] border-4 border-[#1C192E] rounded-full font-black text-xl hover:bg-[#1C192E] hover:text-[#BEE36B] shadow-[8px_8px_0px_#1C192E] hover:shadow-[4px_4px_0px_#F4DF4F] hover:translate-y-1 hover:translate-x-1 transition-all duration-300 uppercase tracking-wide">
              Explore Flavors <ArrowRight size={24} />
            </Link>
          </div>
          
        </div>
      </section>

    </div>
  );
}
