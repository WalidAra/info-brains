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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "Joining this club was my best decision in college. The workshops and projects have been invaluable in helping me build my skills and win competitions more of that i could make myself a brand.",
              author: "Walid Araar",
              role: "1 Year master CS Student",
            },
            {
              quote:
                "I joined the club as a second year CS student last year, it was truly a wonderful experience that allowed me to overcome my anxiety of talking publicly, without forgetting the friends i made along the way. Hoping to see the club grow even more in the next years to come",
              author: "Meriem Soubih",
              role: "3rd year CS student",
            },
            {
              quote:
                "As a beginner, I was intimidated at first, but the welcoming atmosphere and mentorship programs made learning CS enjoyable and accessible.",
              author: "Rihab Arioui",
              role: "3nd Year CS Student",
            },
            {
              quote:
                "The hackathons organized by Infobrains pushed me out of my comfort zone and helped me discover my passion for AI and machine learning.",
              author: "Serine SOUAKRI",
              role: "3rd Year CS Student",
            },
            {
              quote:
                "The networking opportunities provided by the club have been invaluable. I've made lifelong friends and professional connections.",
              author: "Khalil BANNABI",
              role: "4th Year CS Student",
            },
            {
              quote:
                "Infobrains' focus on practical, industry-relevant skills has given me a significant advantage in my job search and interviews.",
              author: "Dhiya KELLOUCHE",
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
