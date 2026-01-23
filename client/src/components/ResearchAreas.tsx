import { motion } from "framer-motion";
import { MessageSquare, Calculator, FileText, Building2, GraduationCap, TrendingUp, Bot, School } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const areas = [
  {
    icon: Bot,
    title: "AI 챗봇 개발",
    category: "AI Technology",
    description: "기업, 기관, 단체를 위한 맞춤형 챗봇을 제작합니다. 고객 응대부터 내부 업무 자동화까지 다양한 니즈를 해결해드립니다.",
    tags: ["상담 챗봇", "업무 자동화", "24시간 응대"]
  },
  {
    icon: FileText,
    title: "복지 행정 자동화",
    category: "Welfare Solution",
    description: "사회복지사님들의 과중한 행정 업무를 덜어드립니다. 프로그램 일지, 회의록, 상담일지 작성 도우미 기능을 제공합니다.",
    tags: ["일지 작성", "회의록", "문서 자동화"]
  },
  {
    icon: GraduationCap,
    title: "자기주도학습 AI",
    category: "Education",
    description: "수학, 영어 등 주요 과목의 자기주도학습을 돕는 AI 교육 프로그램을 연구하고 개발합니다.",
    tags: ["수학/영어", "학습 코칭", "맞춤형 교육"]
  },
  {
    icon: Building2,
    title: "부동산 분석 AI",
    category: "Real Estate",
    description: "부동산 개발지구 분석 및 시장 동향을 파악하는 전문 챗봇과 분석 도구를 제공합니다.",
    tags: ["개발지구 분석", "시장 동향", "투자 인사이트"]
  },
  {
    icon: School,
    title: "AI 활용 교육",
    category: "Training",
    description: "누구나 AI를 쉽게 활용할 수 있도록 챗봇 제작 및 활용 방법에 대한 온/오프라인 교육을 진행합니다.",
    tags: ["챗봇 교육", "강사 양성", "실습 위주"]
  },
  {
    icon: TrendingUp,
    title: "경제/주식 분석",
    category: "Finance",
    description: "주식 시장 데이터 분석 및 6/45 등 다양한 경제 지표를 분석하여 인사이트를 제공하는 AI 모델을 연구합니다.",
    tags: ["데이터 분석", "시장 예측", "경제 지표"]
  }
];

const ResearchAreas = () => {
  return (
    <section id="research" className="py-24 bg-black/50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider text-sm uppercase mb-2 block">
            Research & Service
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
            굿씨드의 주요 사업 분야
          </h2>
          <p className="text-slate-400 text-lg">
            굿씨드 AI연구소는 다양한 산업 분야에 실질적인 도움이 되는 AI 기술을 연구하고 보급합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full border-white/10 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <area.icon className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <Badge variant="secondary" className="font-normal text-xs bg-white/10 text-slate-300 hover:bg-white/20">
                      {area.category}
                    </Badge>
                  </div>
                  <CardTitle className="font-display text-xl mb-2 text-white">{area.title}</CardTitle>
                  <CardDescription className="line-clamp-2 text-slate-400">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {area.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-white/5 border border-white/10 text-slate-400 px-2 py-1 rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;
