import { useRef, useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronDown, X } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const SectionHeading = ({ subtitle, title, align = 'center' }: { subtitle: string; title: string; align?: 'left' | 'center' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">{subtitle}</span>
    <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mt-2 leading-tight">{title}</h2>
    <div className={`h-1 w-20 bg-primary mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
  </div>
);

export default function HomePage() {
  const containerRef = useRef(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  return (
    <div ref={containerRef} className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/02/12/01KH92TY2492FKWNG90KX4ZSRE.jpg?imageMogr2/format/webp" 
            alt="Polished Metal Parts" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-block bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-2 mb-6">
                <span className="text-primary font-bold tracking-wider uppercase">3rd Generation Family Owned • Since 1965</span>
            </div>
            <h1 className="text-6xl md:text-8xl text-white leading-none mb-6">
              NORTHWEST <br />
              <span className="text-primary">POLISHING & BUFFING</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl font-normal drop-shadow-lg">
              Expert polishing and buffing for many types of metal products. 
              Delivering mirror-quality finishes for machine shops, foundries, and fabricators throughout West Michigan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-xl font-heading tracking-wide uppercase rounded-sm transition-all transform hover:translate-y-[-2px] flex items-center justify-center gap-2">
                Request a Quote <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#capabilities" className="border border-white/30 hover:border-primary hover:text-primary text-white px-8 py-4 text-xl font-heading tracking-wide uppercase rounded-sm transition-all flex items-center justify-center">
                View Capabilities
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
        >
            <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn}>
            <SectionHeading subtitle="What We Do" title="Our Core Capabilities" />
          </motion.div>

          {/* Finish Types Section - Moved Above Materials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-white/10 p-8 md:p-12 mb-12"
          >
            <h3 className="text-3xl font-heading text-white mb-8 uppercase tracking-wide text-center">Finish Types Available</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Brush", desc: "Uniform linear grain pattern for a professional matte appearance", img: "https://cdn.wegic.ai/assets/onepage/agent/images/1771275993174.jpg?imageMogr2/format/webp" },
                { name: "Mirror", desc: "High-gloss reflective finish for maximum shine and visual impact", img: "https://cdn.wegic.ai/assets/onepage/agent/images/1771250873308.jpg?imageMogr2/format/webp" },
                { name: "Satin", desc: "Smooth semi-gloss finish balancing elegance with durability", img: "https://cdn.wegic.ai/assets/onepage/agent/images/1771250873208.jpg?imageMogr2/format/webp" }
              ].map((finish, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-6 bg-background border border-white/5 hover:border-primary/50 transition-all group"
                >
                  <div className="w-24 h-24 mb-4 rounded-lg overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors">
                    <img src={finish.img} alt={finish.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-white font-bold text-lg uppercase tracking-wider mb-2">{finish.name}</span>
                  <p className="text-muted-foreground text-sm text-center">{finish.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Materials Section with Thumbnails */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-white/10 p-8 md:p-12 mb-12"
          >
            <h3 className="text-3xl font-heading text-white mb-8 uppercase tracking-wide text-center">Materials We Work With</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {[
                { name: "Aluminum", img: "https://cdn.wegic.ai/assets/onepage/agent/images/1771250686872.jpg?imageMogr2/format/webp" },
                { name: "Brass", img: "https://cdn.wegic.ai/assets/onepage/agent/images/1771250683270.jpg?imageMogr2/format/webp" },
                { name: "Copper", img: "https://cdn.wegic.ai/assets/onepage/agent/images/1771250683271.jpg?imageMogr2/format/webp" },
                { name: "Iron", img: "https://cdn.wegic.ai/assets/onepage/agent/images/1771250683574.jpg?imageMogr2/format/webp" },
                { name: "Steel", img: "https://cdn.wegic.ai/assets/onepage/agent/images/1771250683373.jpg?imageMogr2/format/webp" },
                { name: "Stainless Steel", img: "https://cdn.wegic.ai/assets/onepage/agent/images/1771250686881.jpg?imageMogr2/format/webp" },
                { name: "Zinc", img: "https://cdn.wegic.ai/assets/onepage/agent/images/1771250683375.jpg?imageMogr2/format/webp" }
              ].map((material, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-4 bg-background border border-white/5 hover:border-primary/50 transition-all group"
                >
                  <div className="w-16 h-16 mb-3 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors">
                    <img src={material.img} alt={material.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-white font-medium text-center text-sm uppercase tracking-wider">{material.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Processes Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card border border-white/10 p-8 md:p-12 mb-12"
          >
            <h3 className="text-3xl font-heading text-white mb-8 uppercase tracking-wide text-center">Our Processes</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: "Buffing", img: "https://cdn.wegic.ai/assets/onepage/agent/images/1771274754249.jpg?imageMogr2/format/webp" },
                { name: "Deburring", img: "https://cdn.wegic.ai/assets/onepage/agent/images/1771274514680.jpg?imageMogr2/format/webp" },
                { name: "Machining", img: "https://cdn.wegic.ai/assets/onepage/agent/images/1771274515084.jpg?imageMogr2/format/webp" },
                { name: "Polishing", img: "https://cdn.wegic.ai/assets/onepage/agent/images/1771275618848.jpg?imageMogr2/format/webp" },
                { name: "Parting Line Cleanup", img: "https://cdn.wegic.ai/assets/onepage/agent/images/1771274514884.jpg?imageMogr2/format/webp" },
                { name: "Weld Cleanup", img: "https://cdn.wegic.ai/assets/onepage/agent/images/1771274514382.jpg?imageMogr2/format/webp" }
              ].map((process, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-4 bg-background border border-white/5 hover:border-primary/50 transition-all group"
                >
                  <div className="w-16 h-16 mb-3 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors">
                    <img src={process.img} alt={process.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-white font-medium text-center text-sm uppercase tracking-wider">{process.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Shapes Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card border border-white/10 p-8 md:p-12 mt-12"
          >
            <h3 className="text-3xl font-heading text-white mb-8 uppercase tracking-wide text-center">Shapes & Forms We Handle</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {[
                "Extrusions",
                "Bar Stock",
                "Round Stock",
                "Tubing",
                "Die Castings",
                "Sand Castings",
                "Fabrications"
              ].map((shape, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-4 bg-background border border-white/5 hover:border-primary/50 transition-all group"
                >
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium text-center text-sm uppercase tracking-wider">{shape}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary border-y border-white/5">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn}>
            <SectionHeading subtitle="Our Story" title="About Northwest Polishing & Buffing" />
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-white/10 p-8 md:p-12 mb-12"
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <strong className="text-white text-xl">3rd generation family owned and operated small business</strong> located in Conklin, Michigan. Successfully operating for more than 60 years with dedication to providing customers with pristine finishes and reliable quality. The 8000 square foot building allows us to manage both large and small customers efficiently.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Established */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card border border-white/10 p-8"
              >
                <h3 className="text-2xl font-heading text-primary mb-4 uppercase tracking-wide flex items-center gap-3">
                  <span className="text-3xl">🏭</span> Established in 1965
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Founded by Jerome Klein in 1965 after a successful career with Roosevelt Metal Finishing. While in retirement, Jerome felt there was a need for a quality polishing and buffing business to assist companies with their metal finishing needs. With minimal supplies and a strong work ethic, Jerome built the company from the ground up. What began as a few machines in an old chicken coop turned into a thriving business.
                </p>
              </motion.div>

              {/* Goal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card border border-white/10 p-8"
              >
                <h3 className="text-2xl font-heading text-primary mb-4 uppercase tracking-wide flex items-center gap-3">
                  <span className="text-3xl">🎯</span> Our Goal
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide our customers with high quality metal finishing services in a timely manner. We pride ourselves on our ability to find new and innovated ways to meet the customer's expectations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility & Equipment Section */}
      <section id="equipment" className="py-24 bg-background border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-sm blur-xl opacity-50" />
                <img 
                    src="https://cdn.wegic.ai/assets/onepage/agent/images/1770907659605_edited.png?imageMogr2/format/webp" 
                    alt="Polishing Facility" 
                    className="relative w-full rounded-sm border border-white/10 shadow-2xl"
                />
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:pl-10"
            >
                <SectionHeading subtitle="Our Facility" title="Built for Volume & Precision" align="left" />
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Our facility in Conklin, MI is equipped with industrial-grade polishing and buffing machinery designed to handle both high-volume production runs and intricate custom jobs.
                </p>

                <div className="bg-background border border-white/10 p-6 rounded-sm">
                    <h4 className="text-primary text-xl font-heading uppercase tracking-wide mb-4 flex items-center gap-2">
                        <span className="text-2xl">⚙️</span> Equipment Inventory
                    </h4>
                    <ul className="space-y-3">
                        {[
                            "10 Dual Spindle Polishing Machines",
                            "4 ACME Auto Buffing Turntables",
                            "MaxiStroke Flat Sander",
                            "Automatic Buffing Room with 75 fixture capacity",
                            "Fadal VMC15XT Machining Center"
                        ].map((equipment, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                <span className="text-primary mt-1">▸</span>
                                <span>{equipment}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <a href="#contact" className="text-primary hover:text-white font-heading text-xl tracking-wide border-b border-primary pb-1 hover:border-white transition-colors inline-flex items-center gap-2">
                    Schedule a Visit <ArrowRight className="w-4 h-4" />
                </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-background">
        <div className="container mx-auto px-4">
            <motion.div {...fadeIn}>
                <SectionHeading subtitle="Our Work" title="The Shine Gallery" />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { src: "https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/02/16/01KHK5MAT4GGCRFT63TZVXX58R.jpg?imageMogr2/format/webp", featured: true }, // Mirror polished brass piece
                    { src: "https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/02/16/01KHK5MAT4BS06SNTRTTCB2SHZ.jpg?imageMogr2/format/webp", featured: false }, // Brass plates mirror finish
                    { src: "https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/02/16/01KHKAQ7D3D4XBKH62F99Q8S0J.jpeg?imageMogr2/format/webp", featured: false }, // Ornate brass tabernacle with intricate detail
                    { src: "https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/02/16/01KHKA5P28YMK4CHB69E1MPXWJ.png?imageMogr2/format/webp", featured: false }, // Shop scene with polished parts and equipment
                    { src: "https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/02/16/01KHKA618VCR4YSSB1AQTZAZHB.png?imageMogr2/format/webp", featured: false }, // Polished castings with Gardner buffing machine
                    { src: "https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/02/17/01KHM05YWXK943588E61ZGH7JX.jpeg?imageMogr2/format/webp", featured: false }, // Chrome toggle switch cover
                    { src: "https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/02/17/01KHM05YWXZ4GQ4X8ZE81Z6W5T.jpeg?imageMogr2/format/webp", featured: false }, // Chrome window crank handle
                    { src: "https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/02/16/01KHKAQ7D39MGKWGH5GHSZACJS.jpeg?imageMogr2/format/webp", featured: false }, // Tabernacle with door open showing interior
                    { src: "https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/02/17/01KHKZ0158ZAJXPCGDBZ92Q45C.png?imageMogr2/format/webp", featured: false }, // Chrome polished casting housing
                    { src: "https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/02/17/01KHM05YWX6MYHCKETRVT2AF83.jpeg?imageMogr2/format/webp", featured: false }, // Chrome cabinet pull handle
                    { src: "https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/02/17/01KHM05YWX78YV17BXMR8KEBP3.jpeg?imageMogr2/format/webp", featured: false }, // Brass exhaust tip mirror polish
                    { src: "https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/02/17/01KHM05YWXJD9FKPVBVWQA1RBF.jpeg?imageMogr2/format/webp", featured: false }, // Chrome grab bar
                    { src: "https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/02/17/01KHM05YWX8XGXS603GTC85K7N.jpeg?imageMogr2/format/webp", featured: false }, // Brass door lever handle
                    { src: "https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/02/17/01KHM05YWXGK5KW2N86PX4A0EB.jpeg?imageMogr2/format/webp", featured: false }, // Chrome faucet knob
                    { src: "https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/02/17/01KHM05YWXYCW7WKCKX7QNEZEK.jpeg?imageMogr2/format/webp", featured: false }, // Chrome faucet spout
                    { src: "https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/02/17/01KHM05YWXQBGK60WMQM8Z33GZ.jpeg?imageMogr2/format/webp", featured: false }, // Chrome decorative trim panel
                    { src: "https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/02/16/01KHK5MAT525DNCJB9DVBXN42D.png?imageMogr2/format/webp", featured: false }, // Chrome automotive parts
                    { src: "https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/02/16/01KHK5MAT5V2PG02R4HJ7SE9MB.png?imageMogr2/format/webp", featured: false }, // Before/after comparison
                    { src: "https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/02/17/01KHM0KKVW5N1J0W2JF1FCMMKW.png?imageMogr2/format/webp", featured: false }, // Brushed aluminum flat bar
                    { src: "https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/02/17/01KHM0KKVWKNSW7PMCT0NWY446.png?imageMogr2/format/webp", featured: false }, // Chrome exhaust tip mirror finish
                    { src: "https://cdn.wegic.ai/assets/onepage/uploads/2021942976312688641/image/2026/02/17/01KHM0KKVWA4BZX321S0ZT3WNJ.png?imageMogr2/format/webp", featured: false } // Production run of polished flat bars
                ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={`relative overflow-hidden group rounded-sm cursor-pointer ${item.featured ? 'col-span-2 row-span-2' : ''}`}
                        onClick={() => setLightboxImage(item.src)}
                    >
                        <img 
                            src={item.src} 
                            alt="Polished Work Example" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-primary font-heading tracking-widest text-xl border border-primary px-4 py-2 uppercase">
                                View Detail
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Image Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightboxImage}
              alt="Full size view"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-5" 
             style={{ 
                 backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
                 backgroundSize: '40px 40px' 
             }} 
        />

        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto bg-card border border-white/10 p-8 md:p-12 shadow-2xl rounded-sm">
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl text-white mb-4">Ready to Shine?</h2>
                    <p className="text-muted-foreground text-lg">
                        Contact us today for a quote on your polishing and buffing needs.
                    </p>
                </div>

                <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                        <label>
                            Don’t fill this out: <input name="bot-field" />
                        </label>
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Name</label>
                            <input type="text" name="name" required className="w-full bg-background border border-white/10 focus:border-primary px-4 py-3 text-white outline-none transition-colors" placeholder="Your Name" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Company</label>
                            <input type="text" name="company" className="w-full bg-background border border-white/10 focus:border-primary px-4 py-3 text-white outline-none transition-colors" placeholder="Company Name" />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Email</label>
                            <input type="email" name="email" required className="w-full bg-background border border-white/10 focus:border-primary px-4 py-3 text-white outline-none transition-colors" placeholder="email@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Phone</label>
                            <input type="tel" name="phone" className="w-full bg-background border border-white/10 focus:border-primary px-4 py-3 text-white outline-none transition-colors" placeholder="(555) 123-4567" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Project Details</label>
                        <textarea name="message" required className="w-full bg-background border border-white/10 focus:border-primary px-4 py-3 text-white outline-none transition-colors h-32" placeholder="Tell us about your project..." />
                    </div>

                    <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-xl font-heading tracking-widest uppercase transition-colors">
                        Send Message
                    </button>

                    <AnimatePresence>
                        {formStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="flex items-center justify-center gap-2 text-green-400 text-sm"
                            >
                                <CheckCircle2 className="w-4 h-4" />
                                <span>Message sent! We’ll get back to you soon.</span>
                            </motion.div>
                        )}
                        {formStatus === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="text-center text-red-400 text-sm"
                            >
                                Something went wrong. Please try again, or call/text us.
                            </motion.div>
                        )}
                    </AnimatePresence>
                </form>
            </div>
        </div>
      </section>
    </div>
  );
}
