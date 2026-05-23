import { motion } from 'motion/react';
import { ShoppingCart, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.4 } }
};

const flavors = [
  { 
    id: 1, 
    name: "Berry Blast", 
    tagline: "Blackberry Beat",
    desc: "Unleash the wild with intense, dark blackberry notes and a fierce edge. Loaded with antioxidants and raw attitude.",
    price: 34.99,
    pack: "12-Pack",
    color: "bg-[#8B5CF6]",
    borderColor: "border-[#1C192E]",
    buttonColor: "bg-[#BEE36B]",
    image: "/images/fizzora_can_mockup_1779203306875.png",
    rotation: "-rotate-2"
  },
  { 
    id: 2, 
    name: "Mango Craze", 
    tagline: "Tropical Madness",
    desc: "A sunglasses-wearing punch of pure tangerine and juicy mango vibes. Sweet, tangy, and ready to party.",
    price: 34.99,
    pack: "12-Pack",
    color: "bg-[#FF9100]",
    borderColor: "border-[#1C192E]",
    buttonColor: "bg-[#F4DF4F]",
    image: "/images/mango_can_1779203871104.png",
    rotation: "rotate-2"
  },
  { 
    id: 3, 
    name: "Electric Blue", 
    tagline: "Neon Lemonade",
    desc: "A lightning bolt to your system. Tart citrus with a shocking finish. Formulated to keep you entirely dialed in.",
    price: 34.99,
    pack: "12-Pack",
    color: "bg-[#06B6D4]",
    borderColor: "border-[#1C192E]",
    buttonColor: "bg-[#BEE36B]",
    image: "/images/electric_can_1779203889119.png",
    rotation: "-rotate-1"
  }
];

export default function Products() {
  return (
    <div className="pt-20 pb-24 bg-[#EDE4D3] min-h-screen overflow-hidden">
      
      {/* Marquee Header */}
      <div className="w-full border-y-8 border-[#1C192E] bg-[#F4DF4F] overflow-hidden py-4 mb-16 rotate-1 scale-110 shadow-[0_8px_0px_#1C192E]">
         <motion.div 
           animate={{ x: [0, -1000] }} 
           transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
           className="flex whitespace-nowrap items-center gap-8"
         >
           {[...Array(10)].map((_, i) => (
             <div key={i} className="flex items-center gap-8">
               <span className="font-display font-black text-4xl text-[#1C192E] uppercase">Pick Your Poison</span>
               <Star className="fill-[#1C192E] text-[#1C192E]" size={24} />
               <span className="font-display font-black text-4xl text-[#1C192E] uppercase">Maximum Flavor</span>
               <Zap className="fill-[#1C192E] text-[#1C192E]" size={24} />
             </div>
           ))}
         </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-[5%]">
        
        <div className="text-center md:text-left mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
           <div>
             <h1 className="text-6xl md:text-8xl font-display font-black text-[#1C192E] uppercase leading-[0.9] mb-4">
               The <br/><span className="text-[#BEE36B] drop-shadow-[4px_4px_0px_#1C192E]">Lineup</span>
             </h1>
             <p className="text-[#1C192E]/80 text-xl font-bold max-w-md">
               Zero sugar. Natural energy. Flavors that punch you in the mouth (in a good way).
             </p>
           </div>
           
           <div className="flex bg-white border-4 border-[#1C192E] rounded-full p-2 shadow-[4px_4px_0px_#1C192E]">
              <button className="px-6 py-2 bg-[#1C192E] text-[#BEE36B] rounded-full font-black uppercase text-sm">All</button>
              <button className="px-6 py-2 text-[#1C192E] hover:bg-[#F4DF4F] rounded-full font-black uppercase text-sm transition-colors">Best Sellers</button>
              <button className="px-6 py-2 text-[#1C192E] hover:bg-[#F4DF4F] rounded-full font-black uppercase text-sm transition-colors">Variety Packs</button>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {flavors.map((flavor, index) => (
            <motion.div 
              key={flavor.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className={`group relative flex flex-col ${flavor.color} border-4 ${flavor.borderColor} rounded-[3rem] p-6 shadow-[12px_12px_0px_#1C192E] transform ${flavor.rotation} hover:rotate-0 transition-transform duration-300`}
            >
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-white border-4 border-[#1C192E] rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-[4px_4px_0px_#1C192E] z-20 transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                 <span className="font-display font-black text-[#1C192E] text-xl leading-none">${flavor.price}</span>
                 <span className="text-xs font-bold text-[#1C192E] uppercase">{flavor.pack}</span>
              </div>

              {/* Can Image Container */}
              <div className="relative h-[350px] w-full flex items-center justify-center mb-6 bg-white/20 rounded-[2rem] border-4 border-[#1C192E]/10 overflow-hidden">
                <img 
                    src={flavor.image} 
                    alt={flavor.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 z-10 relative" 
                />
                
                {/* Abstract background burst element inside can container */}
                <div className="absolute inset-0 flex items-center justify-center opacity-50 z-0">
                  <svg viewBox="0 0 200 200" className="w-[150%] h-[150%] animate-spin-slow">
                     <path fill="white" d="M100 0L115 85L200 100L115 115L100 200L85 115L0 100L85 85Z" />
                  </svg>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col">
                  <div className="inline-block bg-[#1C192E] text-white font-bold uppercase text-xs px-3 py-1 rounded-full w-max mb-3 border-2 border-white/20">
                     {flavor.tagline}
                  </div>
                  
                  <h3 className="text-4xl font-display font-black text-[#1C192E] mb-3 uppercase leading-none drop-shadow-[2px_2px_0px_white]">
                    {flavor.name}
                  </h3>
                  
                  <p className="font-bold text-[#1C192E]/90 text-sm mb-8 flex-1">
                     {flavor.desc}
                  </p>
                  
                  <Link to="/checkout" className={`w-full py-4 ${flavor.buttonColor} text-[#1C192E] border-4 border-[#1C192E] rounded-full font-black text-xl flex items-center justify-center gap-3 shadow-[4px_4px_0px_#1C192E] hover:shadow-[0px_0px_0px_#1C192E] hover:translate-y-1 hover:translate-x-1 transition-all uppercase tracking-wide`}>
                      Add to Cart <ShoppingCart strokeWidth={3} size={20} />
                  </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Variety Pack Banner */}
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-20 bg-[#1C192E] border-4 border-[#BEE36B] rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[12px_12px_0px_#BEE36B]"
        >
           <div className="flex-1 text-center md:text-left">
              <span className="bg-[#BEE36B] text-[#1C192E] font-black uppercase px-3 py-1 rounded-full text-sm inline-block mb-4 border-2 border-[#1C192E] shadow-[2px_2px_0px_#1C192E]">Can't Decide?</span>
              <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase mb-4">The Ultimate <br/> Variety Pack</h2>
              <p className="text-[#EDE4D3]/70 font-bold max-w-md mx-auto md:mx-0">
                Get 4 cans of each flavor. Berry Blast, Mango Craze, and Electric Blue all in one wild box.
              </p>
           </div>
           
           <div className="bg-[#F4DF4F] border-4 border-[#1C192E] rounded-[2rem] p-8 shrink-0 text-center shadow-[6px_6px_0px_#1C192E] transform rotate-2">
              <div className="text-[#1C192E] font-black text-5xl font-display mb-2">$39.99</div>
              <div className="text-[#1C192E]/80 font-bold text-sm uppercase mb-6">12-Pack (4 of each)</div>
              <Link to="/checkout" className="inline-block px-8 py-3 bg-[#1C192E] text-[#BEE36B] rounded-full font-black uppercase border-2 border-[#1C192E] hover:bg-[#BEE36B] hover:text-[#1C192E] hover:shadow-[4px_4px_0px_#1C192E] transition-all -translate-y-1">
                 Snag a Box
              </Link>
           </div>
        </motion.div>

      </div>
    </div>
  );
}

