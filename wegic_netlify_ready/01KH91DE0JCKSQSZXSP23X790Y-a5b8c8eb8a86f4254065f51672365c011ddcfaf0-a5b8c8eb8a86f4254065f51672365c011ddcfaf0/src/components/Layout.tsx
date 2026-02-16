import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Logo = () => (
  <Link to="/" className="flex items-center gap-2">
    <img 
      src="https://cdn.wegic.ai/assets/onepage/agent/images/1770907694841_edited.png?imageMogr2/format/webp" 
      alt="Northwest Polishing & Buffing" 
      className="h-32 md:h-40 w-auto object-contain"
    />
  </Link>
);

const NavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    
    return (
        <Link 
            to={to} 
            className={`text-lg font-heading tracking-wider hover:text-primary transition-colors ${isActive ? 'text-primary' : 'text-foreground'}`}
            onClick={onClick}
        >
            {children}
        </Link>
    );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Top Bar */}
      <div className="bg-secondary/30 border-b border-white/5 py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm text-muted-foreground font-body">
            <div className="flex gap-6">
                <span className="flex items-center gap-2 hover:text-primary transition-colors">
                    <MapPin className="w-4 h-4 text-primary" /> 275 Roosevelt St., Conklin, MI 49403
                </span>
                <a href="mailto:sales@nwpolishandbuff.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail className="w-4 h-4 text-primary" /> sales@nwpolishandbuff.com
                </a>
            </div>
            <div className="flex items-center gap-6">
                <a href="tel:6168225300" className="flex items-center gap-2 font-bold hover:text-white transition-colors">
                    <Phone className="w-4 h-4 text-primary" /> <span className="text-white">Jay:</span> (616) 822-5300
                </a>
                <a href="tel:6168908901" className="flex items-center gap-2 font-bold hover:text-white transition-colors">
                    <Phone className="w-4 h-4 text-primary" /> <span className="text-white">Jason:</span> (616) 890-8901
                </a>
            </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-20 flex justify-between items-center">
          <Logo />
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/#capabilities">Capabilities</NavLink>
            <NavLink to="/#about">About</NavLink>
            <NavLink to="/#equipment">Facility</NavLink>
            <NavLink to="/#gallery">Work Gallery</NavLink>
            <Link 
                to="/#contact" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 font-heading tracking-wide uppercase text-lg rounded-sm transition-colors"
            >
                Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-card border-b border-white/10 overflow-hidden"
            >
              <nav className="flex flex-col p-4 gap-4">
                <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                <NavLink to="/#capabilities" onClick={() => setIsMenuOpen(false)}>Capabilities</NavLink>
                <NavLink to="/#about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
                <NavLink to="/#equipment" onClick={() => setIsMenuOpen(false)}>Facility</NavLink>
                <NavLink to="/#gallery" onClick={() => setIsMenuOpen(false)}>Work Gallery</NavLink>
                <Link 
                    to="/#contact" 
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-primary text-primary-foreground px-6 py-3 font-heading tracking-wide uppercase text-lg text-center rounded-sm"
                >
                    Get a Quote
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary pt-16 pb-8 border-t border-white/5">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                {/* Brand Info */}
                <div>
                    <img 
                      src="https://cdn.wegic.ai/assets/onepage/agent/images/1770907694841_edited.png?imageMogr2/format/webp" 
                      alt="Northwest Polishing & Buffing" 
                      className="h-24 md:h-32 mb-6 opacity-90"
                    />
                    <p className="text-muted-foreground mb-6 max-w-sm">
                        Expert polishing and buffing for many types of metal products. Delivering mirror-quality finishes for machine shops, foundries, and fabricators throughout West Michigan.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl text-primary mb-6">Quick Links</h3>
                    <ul className="space-y-3">
                        {['Capabilities', 'About', 'Facility', 'Work Gallery', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link to={`/#${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-white transition-colors flex items-center gap-2">
                                    <ChevronRight className="w-4 h-4 text-primary" /> {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl text-primary mb-6">Contact Us</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                            <span className="text-muted-foreground">
                                275 Roosevelt St.<br />
                                Conklin, MI 49403
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                            <div className="flex flex-col gap-2">
                                <a href="tel:6168225300" className="text-muted-foreground hover:text-white transition-colors">
                                    <span className="text-white font-semibold">Jay:</span> (616) 822-5300
                                </a>
                                <a href="tel:6168908901" className="text-muted-foreground hover:text-white transition-colors">
                                    <span className="text-white font-semibold">Jason:</span> (616) 890-8901
                                </a>
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-primary shrink-0" />
                            <a href="mailto:sales@nwpolishandbuff.com" className="text-muted-foreground hover:text-white transition-colors">
                                sales@nwpolishandbuff.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Northwest Polishing & Buffing. All rights reserved.</p>
                <div className="flex gap-6">
                    <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}
