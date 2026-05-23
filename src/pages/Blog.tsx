import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const posts = [
  {
    id: 1,
    title: "Choosing the Perfect Ring on a Budget",
    category: "Guides",
    date: "Oct 12, 2024",
    image: "https://images.unsplash.com/photo-1605100804763-247f66126e84?auto=format&fit=crop&q=80&w=800",
    excerpt: "You don't need a huge budget to find something meaningful and authentic. Here's our guide to getting the most value."
  },
  {
    id: 2,
    title: "Anniversary Gifts That Spell Victory",
    category: "Inspiration",
    date: "Sep 28, 2024",
    image: "https://images.unsplash.com/photo-1515562141207-7a8efd3aece0?auto=format&fit=crop&q=80&w=800",
    excerpt: "Celebrate your marriage milestones with pieces that reflect your enduring love and shared victories."
  },
  {
    id: 3,
    title: "How to Care for Your Whistle Jewelry",
    category: "Care",
    date: "Aug 15, 2024",
    image: "https://images.unsplash.com/photo-1596956693529-698f2441c2c2?auto=format&fit=crop&q=80&w=800",
    excerpt: "Keep your authentic stones and metals shining bright for decades with these simple at-home care instructions."
  },
  {
    id: 4,
    title: "14k vs 18k Gold: What's the Difference?",
    category: "Guides",
    date: "Jul 02, 2024",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800",
    excerpt: "Understanding the purity and durability of different gold types to help you make an informed decision."
  }
];

export default function Blog() {
  return (
    <div className="pt-20 pb-24 px-[5%] bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e1b24] mb-6">
            The Whistle <span className="font-serif italic text-[#6b21a8]">Journal</span>
          </h1>
          <p className="text-[#6b6673] text-lg">
            Read our latest styling tips, buying guides, and stories of victorious love.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-16"
        >
          <div className="bg-white rounded-[2.5rem] p-4 md:p-6 shadow-sm border border-[#f3f4f6] flex flex-col lg:flex-row gap-8 items-center cursor-pointer group hover:border-[#6b21a8]/20 transition-colors">
            <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden aspect-video relative">
              <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1200" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-full lg:w-1/2 px-4 md:px-8 py-4">
              <div className="flex gap-4 items-center mb-4">
                <span className="px-3 py-1 bg-[#f3effa] text-[#6b21a8] text-sm font-semibold rounded-full">Stories</span>
                <span className="text-sm text-[#6b6673]">November 10, 2024</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1e1b24] mb-4 group-hover:text-[#6b21a8] transition-colors">
                Real Couples, <span className="font-serif italic">Real Victories</span>
              </h2>
              <p className="text-[#6b6673] text-lg mb-8 line-clamp-3">
                Read the inspiring stories of couples who conquered adversity and celebrated their enduring love with authentic Whistle pieces. From simple courthouse weddings to grand renewals.
              </p>
              <div className="inline-flex items-center gap-2 font-bold text-[#6b21a8]">
                Read More <ArrowRight size={18} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-8 gap-y-12">
          {posts.map((post) => (
            <motion.div 
              key={post.id}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6 bg-gray-100">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex gap-4 items-center mb-3">
                <span className="text-sm font-semibold text-[#6b21a8] uppercase tracking-wider">{post.category}</span>
                <span className="w-1 h-1 bg-[#d1d5db] rounded-full"></span>
                <span className="text-sm text-[#6b6673]">{post.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1e1b24] mb-3 group-hover:text-[#6b21a8] transition-colors">
                {post.title}
              </h3>
              <p className="text-[#6b6673] line-clamp-2">
                {post.excerpt}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-transparent border-2 border-[#1e1b24] text-[#1e1b24] rounded-full font-bold hover:bg-[#1e1b24] hover:text-white transition-colors">
                Load More Articles
            </button>
        </div>
      </div>
    </div>
  );
}
