import { motion } from "framer-motion";
import { CheckCircle2, Leaf, Heart, MonitorSmartphone } from "lucide-react";
import labInterior from "@/assets/lab-interior.png";

const About = () => {
  const highlights = [
    "맞춤형 AI 챗봇 개발 및 보급",
    "사회복지 행정 자동화 솔루션",
    "자기주도학습 AI 교육 프로그램",
    "부동산 개발지구 분석 AI"
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src={labInterior} 
                alt="AI Research Lab" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-90"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-slate-900/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/10 max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Leaf className="text-green-500 w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-lg text-white">좋은 씨앗(Good Seed)</p>
                  <p className="text-sm text-slate-400">나눔과 성장의 가치</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary font-medium tracking-wider text-sm uppercase mb-2 block">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
              사람을 향한 기술, <br />
              <span className="text-primary">선한 영향력</span>을 만듭니다
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              굿씨드(GOODSEED) AI연구소는 기술 그 자체보다 기술이 사람에게 주는 가치에 집중합니다. 
              복잡한 행정 업무로 고생하는 복지사님들, 학습의 방향을 찾는 학생들, 
              그리고 새로운 비즈니스 기회를 찾는 분들에게 꼭 필요한 실용적인 AI 솔루션을 제공합니다.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex gap-8">
              <div className="flex flex-col gap-2">
                <Heart className="w-6 h-6 text-red-500" />
                <span className="font-bold text-white">Human-Centered</span>
                <span className="text-sm text-slate-400">사람 중심의 AI 기술</span>
              </div>
              <div className="flex flex-col gap-2">
                <MonitorSmartphone className="w-6 h-6 text-blue-500" />
                <span className="font-bold text-white">Practical</span>
                <span className="text-sm text-slate-400">실용적인 솔루션</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
