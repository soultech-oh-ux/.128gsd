import { motion } from "framer-motion";
import { Fingerprint, Building2, TrendingUp, Sparkles, Cross, FileText, BookOpen } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    title: "IBAQ 지문적성검사",
    description: "뇌과학, 해부학, 유전학에 의한 과학적 통계로 분석하는 자기이해보고서입니다. 당신의 고유한 잠재력을 발견하세요.",
    link: "https://padlet.com/kgoh9191/ibaq-a35pekdzzdjplgc4",
    icon: <Fingerprint className="w-8 h-8" />,
    delay: 0.1
  },
  {
    title: "부동산 분석 AI",
    description: "빅데이터 기반의 부동산 시장 분석 및 예측 리포트를 제공합니다. 스마트한 투자를 위한 AI 파트너를 만나보세요.",
    link: "https://padlet.com/kgoh9191/ai-1s7bvfo7q735shhh",
    icon: <Building2 className="w-8 h-8" />,
    delay: 0.2
  },
  {
    title: "경제, 주식 분석 AI",
    description: "글로벌 경제 동향과 주식 시장을 실시간으로 분석하여 인사이트를 제공합니다. 데이터 기반의 투자 전략을 세우세요.",
    link: "https://padlet.com/kgoh9191/ai-3ygrakl00l1bh7w3",
    icon: <TrendingUp className="w-8 h-8" />,
    delay: 0.3
  },
  {
    title: "복음과 AI디지털 목회",
    description: "목회 현장에서 활용 가능한 AI 도구와 디지털 사역 자료를 공유합니다.",
    link: "https://padlet.com/kgoh9191/ai-mnvyvpebq4iq4rbq",
    icon: <Cross className="w-8 h-8" />,
    delay: 0.4
  },
  {
    title: "사회복지 행정서류",
    description: "사회복지 행정 업무 효율화를 위한 각종 서식과 AI 활용법을 제공합니다.",
    link: "https://padlet.com/kgoh9191/ai-8fvz98xu171hivz6",
    icon: <FileText className="w-8 h-8" />,
    delay: 0.5
  },
  {
    title: "교육 프로그램",
    description: "자기주도학습 및 AI 리터러시 교육을 위한 커리큘럼과 자료실입니다.",
    link: "https://padlet.com/kgoh9191/ai-tohcnjocsr8f5t6n",
    icon: <BookOpen className="w-8 h-8" />,
    delay: 0.6
  }
];

export default function AiAnalysisSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background decoration with Gold/Amber theme elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-amber-50/50 to-transparent" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-yellow-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center p-2 mb-6 bg-amber-100/50 backdrop-blur-sm rounded-full px-6 border border-amber-200/50 text-amber-900 font-semibold shadow-sm"
          >
            <Sparkles className="w-4 h-4 mr-2 text-amber-700" />
            <span className="text-amber-800">미래를 여는 AI 기술</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 text-slate-900"
          >
            AI 지식공유
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 mb-10 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            과학적 통계와 최신 AI 기술을 통해<br className="hidden md:block" /> 
            자기 이해부터 투자 분석까지, 새로운 통찰력을 제공합니다.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              link={service.link}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
