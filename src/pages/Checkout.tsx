import { motion } from 'motion/react';
import { ShoppingCart, CreditCard, Zap, ShieldCheck } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.4 } }
};

export default function Checkout() {
  return (
    <div className="pt-20 pb-24 bg-[#EDE4D3] min-h-screen">
      <div className="max-w-7xl mx-auto px-[5%]">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#1C192E] font-black tracking-wider uppercase text-sm mb-4 inline-block px-4 py-2 border-2 border-[#1C192E] bg-[#F4DF4F] shadow-[4px_4px_0px_#1C192E] rounded-full">Almost Yours</span>
          <h1 className="text-5xl md:text-7xl font-display font-black text-[#1C192E] mb-6 uppercase">
            Secure <span className="text-[#BEE36B] drop-shadow-[4px_4px_0px_#1C192E]">Checkout</span>
          </h1>
          <p className="text-[#1C192E]/80 font-bold text-xl">
            Get ready to experience maximum flavor. Let's get this shipped.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Form Section */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex-1"
          >
            <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border-4 border-[#1C192E] shadow-[12px_12px_0px_#1C192E] relative mb-12">
              <h3 className="text-3xl font-display font-black mb-8 text-[#1C192E] uppercase flex items-center gap-3">
                <span className="bg-[#BEE36B] p-2 rounded-full border-2 border-[#1C192E]"><Zap size={24} /></span>
                Shipping Details
              </h3>
              
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-black text-[#1C192E] uppercase mb-2">First Name</label>
                    <input type="text" className="w-full bg-[#EDE4D3]/30 border-4 border-[#1C192E]/10 rounded-2xl px-4 py-3 font-bold focus:outline-none focus:border-[#F4DF4F] focus:bg-white transition-all text-[#1C192E]" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-[#1C192E] uppercase mb-2">Last Name</label>
                    <input type="text" className="w-full bg-[#EDE4D3]/30 border-4 border-[#1C192E]/10 rounded-2xl px-4 py-3 font-bold focus:outline-none focus:border-[#F4DF4F] focus:bg-white transition-all text-[#1C192E]" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-black text-[#1C192E] uppercase mb-2">Email Address</label>
                  <input type="email" className="w-full bg-[#EDE4D3]/30 border-4 border-[#1C192E]/10 rounded-2xl px-4 py-3 font-bold focus:outline-none focus:border-[#F4DF4F] focus:bg-white transition-all text-[#1C192E]" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-black text-[#1C192E] uppercase mb-2">Address</label>
                  <input type="text" className="w-full bg-[#EDE4D3]/30 border-4 border-[#1C192E]/10 rounded-2xl px-4 py-3 font-bold focus:outline-none focus:border-[#F4DF4F] focus:bg-white transition-all text-[#1C192E] mb-4" placeholder="123 Energy St" />
                  <div className="grid grid-cols-2 gap-6">
                    <input type="text" className="w-full bg-[#EDE4D3]/30 border-4 border-[#1C192E]/10 rounded-2xl px-4 py-3 font-bold focus:outline-none focus:border-[#F4DF4F] focus:bg-white transition-all text-[#1C192E]" placeholder="City" />
                    <input type="text" className="w-full bg-[#EDE4D3]/30 border-4 border-[#1C192E]/10 rounded-2xl px-4 py-3 font-bold focus:outline-none focus:border-[#F4DF4F] focus:bg-white transition-all text-[#1C192E]" placeholder="ZIP" />
                  </div>
                </div>
              </form>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border-4 border-[#1C192E] shadow-[12px_12px_0px_#1C192E] relative">
              <h3 className="text-3xl font-display font-black mb-8 text-[#1C192E] uppercase flex items-center gap-3">
                <span className="bg-[#F4DF4F] p-2 rounded-full border-2 border-[#1C192E]"><CreditCard size={24} /></span>
                Payment
              </h3>
              
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div>
                  <label className="block text-sm font-black text-[#1C192E] uppercase mb-2">Card Number</label>
                  <input type="text" className="w-full bg-[#EDE4D3]/30 border-4 border-[#1C192E]/10 rounded-2xl px-4 py-3 font-bold focus:outline-none focus:border-[#F4DF4F] focus:bg-white transition-all text-[#1C192E]" placeholder="0000 0000 0000 0000" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-black text-[#1C192E] uppercase mb-2">Expiry</label>
                    <input type="text" className="w-full bg-[#EDE4D3]/30 border-4 border-[#1C192E]/10 rounded-2xl px-4 py-3 font-bold focus:outline-none focus:border-[#F4DF4F] focus:bg-white transition-all text-[#1C192E]" placeholder="MM/YY" />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-[#1C192E] uppercase mb-2">CVC</label>
                    <input type="text" className="w-full bg-[#EDE4D3]/30 border-4 border-[#1C192E]/10 rounded-2xl px-4 py-3 font-bold focus:outline-none focus:border-[#F4DF4F] focus:bg-white transition-all text-[#1C192E]" placeholder="123" />
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="w-full lg:w-[400px]"
          >
             <div className="bg-[#BEE36B] p-8 rounded-[3rem] border-4 border-[#1C192E] shadow-[8px_8px_0px_#1C192E] sticky top-32">
                <h3 className="text-3xl font-display font-black mb-6 text-[#1C192E] uppercase flex items-center gap-3 border-b-4 border-[#1C192E] pb-4">
                  <ShoppingCart size={28} />
                  Your Cart
                </h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex justify-between items-center bg-white p-4 rounded-2xl border-2 border-[#1C192E]">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#8B5CF6] rounded-xl border-2 border-[#1C192E] overflow-hidden">
                           <img src="/images/fizzora_can_mockup_1779203306875.png" alt="Berry Blast" className="w-full h-full object-cover transform scale-150" />
                        </div>
                        <div>
                           <p className="font-black text-[#1C192E] uppercase leading-none">Berry Blast</p>
                           <p className="text-sm font-bold text-[#1C192E]/70 uppercase">12-Pack</p>
                        </div>
                     </div>
                     <span className="font-black text-[#1C192E]">$34.99</span>
                  </div>
                  
                  <div className="flex justify-between items-center bg-white p-4 rounded-2xl border-2 border-[#1C192E]">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#FF9100] rounded-xl border-2 border-[#1C192E] overflow-hidden">
                           <img src="/images/mango_can_1779203871104.png" alt="Mango Craze" className="w-full h-full object-cover transform scale-150" />
                        </div>
                        <div>
                           <p className="font-black text-[#1C192E] uppercase leading-none">Mango Craze</p>
                           <p className="text-sm font-bold text-[#1C192E]/70 uppercase">12-Pack</p>
                        </div>
                     </div>
                     <span className="font-black text-[#1C192E]">$34.99</span>
                  </div>
                </div>
                
                <div className="border-y-4 border-[#1C192E] py-4 mb-6 space-y-2">
                   <div className="flex justify-between items-center font-bold text-[#1C192E]/80 uppercase">
                      <span>Subtotal</span>
                      <span>$69.98</span>
                   </div>
                   <div className="flex justify-between items-center font-bold text-[#1C192E]/80 uppercase">
                      <span>Shipping</span>
                      <span>$5.00</span>
                   </div>
                </div>
                
                <div className="flex justify-between items-center mb-8">
                   <span className="text-xl font-black text-[#1C192E] uppercase">Total</span>
                   <span className="text-3xl font-display font-black text-[#1C192E]">$74.98</span>
                </div>
                
                <button className="w-full py-5 bg-[#1C192E] text-[#F4DF4F] border-4 border-[#1C192E] shadow-[4px_4px_0px_white] rounded-full font-black text-xl uppercase hover:bg-[#F4DF4F] hover:text-[#1C192E] hover:shadow-[0px_0px_0px_white] hover:translate-y-1 hover:translate-x-1 transition-all tracking-wide flex items-center justify-center gap-2">
                   <ShieldCheck size={24} />
                   Pay Now
                </button>
             </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
