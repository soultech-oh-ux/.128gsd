import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, MessageCircle, BookOpen } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <img
          src={heroBg}
          alt="AI Network Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-20 px-4 md:px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              실생활에 도움이 되는 따뜻한 기술
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 leading-[1.15]">
              굿씨드 AI연구소 <br />
              <span className="text-primary">세상을 바꾸는 좋은 씨앗</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              교육, 복지, 부동산, 그리고 AI 챗봇까지.<br/>
              굿씨드는 누구나 쉽게 사용할 수 있는 인공지능 기술로<br className="hidden sm:block"/>
              더 편리하고 풍요로운 세상을 만들어갑니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full text-base h-12 px-8" asChild>
                <a href="https://docs.google.com/forms/d/1AHC7W1ow2BEEDV25H9yn8-E6uJhjusEIARiPDctsN0E/edit" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-4 h-4" />
                  챗봇 및 프로그램 제작문의
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base h-12 px-8 bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-background/80" asChild>
                <a href="https://padlet.com/kgoh9191/ai-tohcnjocsr8f5t6n" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2 w-4 h-4" />
                  교육 프로그램 보기
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default Hero;
