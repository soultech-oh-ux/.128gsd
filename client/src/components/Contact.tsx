import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, MessageSquare, ExternalLink, MessageCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-primary font-medium tracking-wider text-sm uppercase mb-2 block">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
              AI 솔루션 도입 문의
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md">
              챗봇 제작, 교육 문의, 혹은 AI 기술 협력이 필요하신가요?
              굿씨드 AI연구소에 문의를 남겨주세요.
            </p>

            <div className="space-y-8">
              <a 
                href="https://cafe.naver.com/goosd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group shadow-sm backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-full bg-[#03C75A]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#03C75A] transition-colors">
                  <span className="font-bold text-[#03C75A] group-hover:text-white">N</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-1 flex items-center gap-2 text-white">
                    굿씨드 공식 카페
                    <ExternalLink className="w-4 h-4 text-slate-500" />
                  </h4>
                  <p className="text-sm text-slate-400">
                    다양한 소식과 커뮤니티 활동을 확인하세요
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-white">Email</h4>
                  <p className="text-slate-400">kgoh9191@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-white">카카오톡 오픈채팅</h4>
                  <a 
                    href="https://open.kakao.com/o/g8X6BQZh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-primary transition-colors hover:underline"
                  >
                    실시간 상담하기
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-lg border-white/10 bg-white/5 backdrop-blur-md">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white">이름/담당자명</label>
                    <Input id="name" placeholder="홍길동" className="bg-white/5 border-white/10 text-white placeholder:text-slate-500" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact" className="text-sm font-medium text-white">연락처</label>
                    <Input id="contact" placeholder="010-0000-0000" className="bg-white/5 border-white/10 text-white placeholder:text-slate-500" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="type" className="text-sm font-medium text-white">문의 유형</label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="문의 유형을 선택해주세요" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-white/10">
                      <SelectItem value="chatbot">챗봇 제작 문의</SelectItem>
                      <SelectItem value="education">교육 프로그램 문의</SelectItem>
                      <SelectItem value="welfare">복지 행정 솔루션 문의</SelectItem>
                      <SelectItem value="realestate">부동산 AI 문의</SelectItem>
                      <SelectItem value="other">기타</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white">상세 내용</label>
                  <Textarea 
                    id="message" 
                    placeholder="원하시는 챗봇의 기능이나 교육 내용 등을 자유롭게 적어주세요." 
                    className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                  />
                </div>

                <Button 
                  type="button" 
                  className="w-full text-base py-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
                  onClick={() => window.open('https://open.kakao.com/o/g8X6BQZh', '_blank')}
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  카카오톡 오픈채팅으로 문의하기
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
