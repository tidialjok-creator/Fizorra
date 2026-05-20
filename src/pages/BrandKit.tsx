import { motion } from 'motion/react';
import { Palette, Type, ImageIcon, LayoutTemplate, ShieldCheck, Zap, Target, Sparkles } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function BrandKit() {
  return (
    <div className="pt-20 pb-24 px-[5%] bg-[#EDE4D3] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-[#1C192E] font-black tracking-wider uppercase text-sm mb-4 inline-block px-4 py-2 border-2 border-[#1C192E] bg-[#F4DF4F] shadow-[4px_4px_0px_#1C192E] rounded-full">Official Documentation</span>
          <h1 className="text-5xl md:text-7xl font-display font-black text-[#1C192E] mb-6 uppercase">
            Brand <span className="text-[#BEE36B] drop-shadow-[4px_4px_0px_#1C192E]">Kit</span>
          </h1>
          <p className="text-[#1C192E]/80 font-bold text-xl">
            The visual and conceptual foundation of Fizzora. A guide to our energetic, wild, and playful brand.
          </p>
        </motion.div>

        {/* Brand Core */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Target className="text-[#1C192E]" size={32} />
            <h2 className="text-3xl font-display font-black text-[#1C192E] uppercase">Brand Core</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Electric Energy", desc: "No jitters. Just smooth, focused, natural energy." },
              { icon: Sparkles, title: "Wild Flavors", desc: "Intense, bold, and unapologetic berries and citrus." },
              { icon: ShieldCheck, title: "Clean Ingreds", desc: "No junk. Vitamin packed with real antioxidant extracts." },
              { icon: LayoutTemplate, title: "Attitude", desc: "A fierce edge with a playful, quirky wink." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-3xl border-4 border-[#1C192E] shadow-[8px_8px_0px_#BEE36B] hover:-translate-y-2 transition-transform"
              >
                <div className="w-16 h-16 bg-[#F4DF4F] rounded-2xl flex items-center justify-center mb-6 border-4 border-[#1C192E]">
                  <item.icon size={32} className="text-[#1C192E]" />
                </div>
                <h3 className="font-display font-black text-xl mb-2 text-[#1C192E] uppercase">{item.title}</h3>
                <p className="text-[#1C192E]/80 font-bold text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Palette className="text-[#1C192E]" size={32} />
            <h2 className="text-3xl font-display font-black text-[#1C192E] uppercase">Color Palette</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Cream Base", hex: "#EDE4D3", class: "bg-[#EDE4D3]", text: "text-[#1C192E]" },
              { name: "Navy Ink", hex: "#1C192E", class: "bg-[#1C192E]", text: "text-[#EDE4D3]" },
              { name: "Electric Lime", hex: "#BEE36B", class: "bg-[#BEE36B]", text: "text-[#1C192E]" },
              { name: "Zap Yellow", hex: "#F4DF4F", class: "bg-[#F4DF4F]", text: "text-[#1C192E]" }
            ].map((color, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group"
              >
                <div className={`h-40 rounded-3xl ${color.class} border-4 border-[#1C192E] shadow-[8px_8px_0px_#1C192E] mb-4 transition-transform group-hover:-translate-y-2 flex items-end p-4`} >
                  <span className={`font-black tracking-widest ${color.text}`}>{color.hex}</span>
                </div>
                <h4 className="font-display font-black text-[#1C192E] text-xl uppercase">{color.name}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Type className="text-[#1C192E]" size={32} />
            <h2 className="text-3xl font-display font-black text-[#1C192E] uppercase">Typography</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#BEE36B] p-8 rounded-3xl border-4 border-[#1C192E] shadow-[8px_8px_0px_#1C192E]"
            >
              <div className="flex justify-between items-end border-2 border-[#1C192E] rounded-xl p-4 mb-6 bg-white">
                <div>
                  <p className="text-sm font-bold text-[#1C192E]/60 mb-1">Display Typeface</p>
                  <h3 className="text-3xl font-display font-black text-[#1C192E]">Fredoka</h3>
                </div>
                <div className="text-5xl font-display font-black text-[#1C192E]">Aa</div>
              </div>
              <p className="text-4xl font-display font-black text-[#1C192E] mb-4 uppercase leading-none">Chunky & Fun.</p>
              <p className="text-[#1C192E]/80 font-bold max-w-sm mb-6">Used for bold headlines, flavor names, and making a loud statement. Conveys our cartoony, energetic vibe.</p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#F4DF4F] p-8 rounded-3xl border-4 border-[#1C192E] shadow-[8px_8px_0px_#1C192E]"
            >
              <div className="flex justify-between items-end border-2 border-[#1C192E] rounded-xl p-4 mb-6 bg-white">
                <div>
                  <p className="text-sm font-bold text-[#1C192E]/60 mb-1">Primary Typeface</p>
                  <h3 className="text-3xl font-bold text-[#1C192E]">Inter</h3>
                </div>
                <div className="text-5xl font-bold text-[#1C192E]">Aa</div>
              </div>
              <p className="text-3xl font-black text-[#1C192E] mb-4">Clean & legibile.</p>
              <p className="text-[#1C192E]/80 font-bold max-w-sm mb-6">Used for ingredients, paragraphs, and fine print. Keeps the chaos grounded with high readability.</p>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
