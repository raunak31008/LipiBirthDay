import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/wishes", label: "Birthday Wishes" },
    { href: "/about", label: "About Us" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <div className="font-playfair text-xl font-semibold text-pink-600 flex items-center gap-2 cursor-pointer">
              <Heart className="w-5 h-5" />
              My Beautiful Love
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <button
                  className={`transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-pink-600 font-semibold"
                      : "text-gray-700 hover:text-pink-600"
                  }`}
                >
                  {item.label}
                </button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-pink-200">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <button
                    className={`block w-full text-left py-2 transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-pink-600 font-semibold"
                        : "text-gray-700 hover:text-pink-600"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
