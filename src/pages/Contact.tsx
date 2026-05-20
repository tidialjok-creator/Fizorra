import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Zap } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.4 } }
};

export default function Contact() {
  return (
    <div className="pt-20 pb-24 px-[5%] bg-[#EDE4D3] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#1C192E] font-black tracking-wider uppercase text-sm mb-4 inline-block px-4 py-2 border-2 border-[#1C192E] bg-[#BEE36B] shadow-[4px_4px_0px_#1C192E] rounded-full">Hit Us Up</span>
          <h1 className="text-5xl md:text-7xl font-display font-black text-[#1C192E] mb-6 uppercase">
            Buy <span className="text-[#F4DF4F] drop-shadow-[4px_4px_0px_#1C192E]">Now</span>
          </h1>
          <p className="text-[#1C192E]/80 font-bold text-xl">
            Want to stock Fizzora? Got a question? Or just want to tell us how amplified you feel? Drop us a line.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-[#BEE36B] p-8 rounded-[3rem] border-4 border-[#1C192E] shadow-[8px_8px_0px_#1C192E] transform -rotate-2">
              <h3 className="text-3xl font-display font-black mb-6 text-[#1C192E] uppercase">The Details</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 bg-white p-4 rounded-2xl border-2 border-[#1C192E]">
                  <div className="w-12 h-12 bg-[#F4DF4F] rounded-xl border-2 border-[#1C192E] flex shrink-0 items-center justify-center text-[#1C192E]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-black text-[#1C192E] uppercase">Holler</p>
                    <p className="text-[#1C192E]/80 font-bold">1-800-FIZZORA</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 bg-white p-4 rounded-2xl border-2 border-[#1C192E]">
                  <div className="w-12 h-12 bg-[#F4DF4F] rounded-xl border-2 border-[#1C192E] flex shrink-0 items-center justify-center text-[#1C192E]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-black text-[#1C192E] uppercase">Email</p>
                    <p className="text-[#1C192E]/80 font-bold text-sm">buzz@fizzora.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 bg-white p-4 rounded-2xl border-2 border-[#1C192E]">
                  <div className="w-12 h-12 bg-[#F4DF4F] rounded-xl border-2 border-[#1C192E] flex shrink-0 items-center justify-center text-[#1C192E]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-black text-[#1C192E] uppercase">HQ</p>
                    <p className="text-[#1C192E]/80 font-bold text-sm">404 Energy Blvd<br/>Los Angeles, CA 90021</p>
                  </div>
                </li>
                 <li className="flex items-start gap-4 bg-white p-4 rounded-2xl border-2 border-[#1C192E]">
                  <div className="w-12 h-12 bg-[#F4DF4F] rounded-xl border-2 border-[#1C192E] flex shrink-0 items-center justify-center text-[#1C192E]">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-black text-[#1C192E] uppercase">Hours</p>
                    <p className="text-[#1C192E]/80 font-bold text-sm">We never sleep. (But officially 9-5 PST)</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border-4 border-[#1C192E] shadow-[12px_12px_0px_#1C192E] relative">
              
              {/* Decorative element */}
              <div className="absolute -top-6 -right-6 bg-[#F4DF4F] border-4 border-[#1C192E] p-4 rounded-full shadow-[4px_4px_0px_#1C192E] transform rotate-12">
                 <Zap size={32} className="text-[#1C192E]" fill="#1C192E" />
              </div>

              <h3 className="text-4xl font-display font-black mb-8 text-[#1C192E] uppercase">Drop A Line</h3>
              
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-black text-[#1C192E] uppercase mb-2">First Name</label>
                    <input type="text" className="w-full bg-[#EDE4D3]/30 border-4 border-[#1C192E]/10 rounded-2xl px-4 py-3 font-bold focus:outline-none focus:border-[#F4DF4F] focus:bg-white transition-all text-[#1C192E]" placeholder="Electric" />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-[#1C192E] uppercase mb-2">Last Name</label>
                    <input type="text" className="w-full bg-[#EDE4D3]/30 border-4 border-[#1C192E]/10 rounded-2xl px-4 py-3 font-bold focus:outline-none focus:border-[#F4DF4F] focus:bg-white transition-all text-[#1C192E]" placeholder="Larry" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-black text-[#1C192E] uppercase mb-2">Email Address</label>
                  <input type="email" className="w-full bg-[#EDE4D3]/30 border-4 border-[#1C192E]/10 rounded-2xl px-4 py-3 font-bold focus:outline-none focus:border-[#F4DF4F] focus:bg-white transition-all text-[#1C192E]" placeholder="larry@zap.com" />
                </div>
                <div>
                  <label className="block text-sm font-black text-[#1C192E] uppercase mb-2">What's Up?</label>
                  <select className="w-full bg-[#EDE4D3]/30 border-4 border-[#1C192E]/10 rounded-2xl px-4 py-3 font-bold focus:outline-none focus:border-[#F4DF4F] focus:bg-white transition-all text-[#1C192E] appearance-none cursor-pointer">
                    <option>Wholesale Order</option>
                    <option>Where is my 12-Pack?</option>
                    <option>Sponsorship</option>
                    <option>Flavor Idea</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-black text-[#1C192E] uppercase mb-2">Message</label>
                  <textarea rows={5} className="w-full bg-[#EDE4D3]/30 border-4 border-[#1C192E]/10 rounded-2xl px-4 py-3 font-bold focus:outline-none focus:border-[#F4DF4F] focus:bg-white transition-all text-[#1C192E] resize-none" placeholder="Hit us with it..."></textarea>
                </div>
                <button className="px-10 py-5 bg-[#1C192E] text-[#BEE36B] border-4 border-[#1C192E] shadow-[8px_8px_0px_#BEE36B] rounded-full font-black text-xl uppercase hover:bg-[#F4DF4F] hover:text-[#1C192E] hover:shadow-[4px_4px_0px_#1C192E] hover:translate-y-1 hover:translate-x-1 transition-all duration-300 w-full md:w-auto tracking-wide">
                  Send It
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
