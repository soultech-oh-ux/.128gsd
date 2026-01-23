import { motion } from "framer-motion";
import footerVideo from "@/assets/footer-video.mp4";

const FooterVideo = () => {
  return (
    <section className="w-full relative bg-black">
      <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={footerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 drop-shadow-lg">
              자연과 기술의 조화
            </h2>
            <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto drop-shadow-md">
              우리는 더 나은 미래를 위해 끊임없이 탐구합니다
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FooterVideo;
