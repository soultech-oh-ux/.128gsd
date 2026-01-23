import { motion } from "framer-motion";
import { Maximize2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const PadletSection = () => {
  return (
    <section id="community" className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium tracking-wider text-sm uppercase mb-2 block">
            Community & Resources
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            AI 지식 공유 게시판
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            최신 AI 트렌드와 연구 자료를 공유하는 열린 공간입니다.
            자유롭게 의견을 나누고 정보를 얻어가세요.
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" asChild>
              <a 
                href="https://padlet.com/kgoh9191/ai-8fvz98xu171hivz6" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 w-4 h-4" />
                새 창으로 열기
              </a>
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[16/9] md:aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-border bg-muted"
        >
          <iframe 
            src="https://padlet.com/kgoh9191/ai-8fvz98xu171hivz6" 
            className="absolute inset-0 w-full h-full border-0"
            title="GoodSeed AI Padlet"
            sandbox="allow-forms allow-scripts allow-popups allow-same-origin allow-presentation"
            loading="lazy"
          />
          
          {/* Decorative overlay only while loading - handled by browser mostly, but adds polish */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] rounded-xl" />
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-muted/30 -skew-y-3 z-0 origin-top-left transform translate-y-24" />
    </section>
  );
};

export default PadletSection;
