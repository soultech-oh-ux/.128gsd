import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description?: string;
  icon: React.ReactNode;
  link: string;
  delay?: number;
}

export function ServiceCard({ title, description, icon, link, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full group">
        <Card className="h-full border border-white/10 hover:border-amber-500/50 transition-all duration-300 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:shadow-lg hover:shadow-amber-500/20">
          <CardHeader>
            <div className="mb-4 p-3 w-fit rounded-xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-300 border border-amber-500/20">
              {icon}
            </div>
            <CardTitle className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {description && (
              <CardDescription className="text-slate-400 font-medium leading-relaxed">
                {description}
              </CardDescription>
            )}
            
            <div className="pt-2 flex items-center text-sm font-semibold text-amber-500 group-hover:translate-x-1 transition-transform">
              바로가기 <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
}
