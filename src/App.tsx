import { Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Blog from './pages/Blog';
import BrandKit from './pages/BrandKit';
import Checkout from './pages/Checkout';
import { Instagram, Facebook, Twitter, Menu, X, ShoppingCart } from 'lucide-react';
import React, { useState } from 'react';

const Logo = ({ className = "text-3xl", bubbleColor = "bg-[#BEE36B]", dotColor = "bg-[#F4DF4F]", textColor = "text-[#1C192E]" }) => (
  <span className={`inline-flex font-display font-bold ${textColor} tracking-tight group cursor-pointer ${className}`}>
    <span className="relative inline-block">
      f
      <span className={`absolute -top-1 -right-0.5 w-[0.3em] h-[0.3em] ${bubbleColor} rounded-full group-hover:-translate-y-4 group-hover:-translate-x-1 group-hover:scale-110 transition-all duration-500 ease-out`} />
      <span className={`absolute -top-3 right-1 w-[0.2em] h-[0.2em] ${dotColor} rounded-full group-hover:-translate-y-5 group-hover:translate-x-2 group-hover:scale-125 transition-all duration-700 ease-out delay-75`} />
      <span className={`absolute top-0 -right-2 w-[0.15em] h-[0.15em] ${bubbleColor} rounded-full group-hover:-translate-y-3 group-hover:translate-x-3 group-hover:scale-150 transition-all duration-300 ease-out delay-150`} />
    </span>
    <span>izzora.</span>
  </span>
);

function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="sticky top-0 z-50 bg-[#EDE4D3]/90 backdrop-blur-md border-b border-[#1C192E]/10 py-4 px-[5%]">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <Link to="/" className="text-3xl font-display font-bold text-[#1C192E] tracking-tight">
            <Logo />
          </Link>
          
          <nav className="hidden md:flex gap-8 items-center text-sm font-bold uppercase tracking-wider">
            <Link to="/" className="text-[#1C192E]/70 hover:text-[#1C192E] transition-colors">Home</Link>
            <Link to="/products" className="text-[#1C192E]/70 hover:text-[#1C192E] transition-colors">Flavors</Link>
            <Link to="/brand-kit" className="text-[#1C192E]/70 hover:text-[#1C192E] transition-colors">Brand Kit</Link>
            <Link to="/contact" className="text-[#1C192E]/70 hover:text-[#1C192E] transition-colors">Contact Us</Link>
            <Link to="/checkout" className="flex items-center gap-2 px-5 py-2 rounded-full border-2 border-[#1C192E] text-[#1C192E] hover:bg-[#BEE36B] hover:shadow-[4px_4px_0px_#1C192E] -translate-y-1 transition-all">
              <ShoppingCart size={18} /> cart
            </Link>
          </nav>

          <button className="md:hidden text-[#1C192E]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-[#EDE4D3] border-b border-[#1C192E]/10 py-6 px-[5%] flex flex-col gap-4 shadow-lg md:hidden"
            >
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-xl font-display font-bold text-[#1C192E] hover:text-[#BEE36B]">Home</Link>
              <Link to="/products" onClick={() => setIsMenuOpen(false)} className="text-xl font-display font-bold text-[#1C192E] hover:text-[#BEE36B]">Flavors</Link>
              <Link to="/brand-kit" onClick={() => setIsMenuOpen(false)} className="text-xl font-display font-bold text-[#1C192E] hover:text-[#BEE36B]">Brand Kit</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-xl font-display font-bold text-[#1C192E] hover:text-[#BEE36B]">Contact Us</Link>
              <Link to="/checkout" onClick={() => setIsMenuOpen(false)} className="text-xl font-display font-bold text-[#BEE36B] flex items-center gap-2">
                <ShoppingCart size={24} /> Cart
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-[#1C192E] text-[#EDE4D3] py-16 px-[5%] mt-20 border-t-8 border-[#F4DF4F]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="mb-4">
               <Logo className="text-5xl" textColor="text-[#BEE36B]" bubbleColor="bg-[#F4DF4F]" dotColor="bg-white" />
            </h2>
            <p className="text-[#EDE4D3]/70 max-w-sm mb-6">
              The daily dose of electric bliss. Unleash the wild with intense flavors and full attitude.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border-2 border-[#BEE36B] flex items-center justify-center hover:bg-[#BEE36B] hover:text-[#1C192E] text-[#BEE36B] transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-[#BEE36B] flex items-center justify-center hover:bg-[#BEE36B] hover:text-[#1C192E] text-[#BEE36B] transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-[#BEE36B] flex items-center justify-center hover:bg-[#BEE36B] hover:text-[#1C192E] text-[#BEE36B] transition-colors"><Twitter size={18} /></a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white font-display">Links</h3>
            <ul className="flex flex-col gap-2 text-[#EDE4D3]/70">
              <li><Link to="/" className="hover:text-[#F4DF4F] transition-colors font-bold uppercase text-sm tracking-wider">Home</Link></li>
              <li><Link to="/products" className="hover:text-[#F4DF4F] transition-colors font-bold uppercase text-sm tracking-wider">Flavors</Link></li>
              <li><Link to="/brand-kit" className="hover:text-[#F4DF4F] transition-colors font-bold uppercase text-sm tracking-wider">Brand Kit</Link></li>
              <li><Link to="/contact" className="hover:text-[#F4DF4F] transition-colors font-bold uppercase text-sm tracking-wider">Contact Us</Link></li>
              <li><Link to="/checkout" className="hover:text-[#F4DF4F] transition-colors font-bold uppercase text-sm tracking-wider">Checkout</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white font-display">Drop Your Email</h3>
            <p className="text-[#EDE4D3]/70 mb-4 text-sm">Get notified about new flavor drops before anyone else.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email" className="bg-[#EDE4D3]/10 border-2 border-[#EDE4D3]/20 rounded-l-xl px-4 py-2 w-full text-sm focus:outline-none focus:border-[#F4DF4F] text-[#EDE4D3]" />
              <button className="bg-[#BEE36B] hover:bg-[#F4DF4F] border-2 border-[#BEE36B] hover:border-[#F4DF4F] border-l-0 text-[#1C192E] px-4 py-2 rounded-r-xl text-sm font-black transition-colors">GO</button>
            </form>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#EDE4D3]/10 text-center text-[#EDE4D3]/50 text-sm font-bold uppercase tracking-wider">
          &copy; {new Date().getFullYear()} Fizzora Energy. Stay Wild.
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/brand-kit" element={<BrandKit />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
