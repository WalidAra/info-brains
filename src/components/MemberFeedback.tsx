import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const MemberFeedback = () => {
  return (
    <section className="py-16 relative bg-[#111] rounded-2xl  mx-4">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <Badge className="bg-green-500 text-white px-4 py-1 rounded-full mb-4">
            Member Feedback
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-white">What Our </span>
            <span className="text-gray-500">Members Say</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "Joining Infobrains was the best decision I made in my CS journey. The workshops and projects have significantly boosted my skills.",
              author: "Alex Chen",
              role: "3rd Year CS Student",
            },
            {
              quote:
                "The supportive community and hands-on learning experiences at Infobrains helped me land my dream internship at a tech giant.",
              author: "Sarah Johnson",
              role: "4th Year CS Student",
            },
            {
              quote:
                "As a beginner, I was intimidated at first, but the welcoming atmosphere and mentorship programs made learning CS enjoyable and accessible.",
              author: "Michael Park",
              role: "2nd Year CS Student",
            },
            {
              quote:
                "The hackathons organized by Infobrains pushed me out of my comfort zone and helped me discover my passion for AI and machine learning.",
              author: "Emily Rodriguez",
              role: "3rd Year CS Student",
            },
            {
              quote:
                "The networking opportunities provided by the club have been invaluable. I've made lifelong friends and professional connections.",
              author: "David Kim",
              role: "4th Year CS Student",
            },
            {
              quote:
                "Infobrains' focus on practical, industry-relevant skills has given me a significant advantage in my job search and interviews.",
              author: "Lisa Patel",
              role: "Recent CS Graduate",
            },
          ].map((feedback, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="bg-[#0A0A0A] border-white/5 p-6 hover:border-white/10 transition-colors">
                <blockquote className="text-gray-400 mb-4">
                  &quot;{feedback.quote}&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full" />
                  <div>
                    <p className="text-white font-semibold">
                      {feedback.author}
                    </p>
                    <p className="text-gray-400 text-sm">{feedback.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberFeedback;
