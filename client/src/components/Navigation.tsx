import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.webp";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", label: "About" },
    { name: "Research", href: "#research", label: "Services" },
    { name: "Community", href: "https://open.kakao.com/o/g8X6BQZh", label: "Community", external: true },
    { name: "Team", href: "#contact", label: "Contact" },
    { name: "Cafe", href: "https://cafe.naver.com/goosd", label: "Official Cafe", external: true },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-border py-2 shadow-sm"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
            <img 
              src={logo} 
              alt="GOODSEED Logo" 
              className="h-24 w-auto object-contain transition-transform group-hover:scale-105" 
            />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-base font-bold text-black hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="rounded-full px-6 font-bold" asChild>
            <a href="https://litt.ly/goodsd55" target="_blank" rel="noopener noreferrer">
              Director soultech-Oh
            </a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-lg font-bold text-black hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button className="w-full font-bold" asChild>
                  <a href="https://litt.ly/goodsd55" target="_blank" rel="noopener noreferrer">
                    연구소장 soultech-Oh
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
