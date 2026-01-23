import logo from "@/assets/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="GOODSEED" className="h-16 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              굿씨드 AI연구소는 인공지능 기술의 미래를 만들어갑니다.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
              <li><a href="#" className="hover:text-primary">News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Research</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary">Publications</a></li>
              <li><a href="#" className="hover:text-primary">Projects</a></li>
              <li><a href="#" className="hover:text-primary">Open Source</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-sm text-slate-500">
          © 2024 GOODSEED AI Research Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
