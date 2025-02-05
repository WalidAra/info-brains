import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    quote:
      "Joining this club was my best decision in college. The workshops and projects have been invaluable in helping me build my skills and win competitions. More than that, I could make myself a brand.",
    author: "Walid Araar",
    role: "1 Year Master CS Student",
  },
  {
    quote:
      "I joined the club as a second-year CS student last year. It was truly a wonderful experience that allowed me to overcome my anxiety about talking publicly, without forgetting the friends I made along the way. Hoping to see the club grow even more in the coming years!",
    author: "Meriem Soubih",
    role: "3rd Year CS Student",
  },
  {
    quote:
      "As a beginner, I was intimidated at first, but the welcoming atmosphere and mentorship programs made learning CS enjoyable and accessible.",
    author: "Rihab Arioui",
    role: "3rd Year CS Student",
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
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const MemberFeedback = () => {
  return (
    <section id={"feedback"} className="py-16 relative  rounded-2xl ">
      <div className="">
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
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review, i) => (
              <Card
                key={i}
                className="bg-[#111] border-white/5 p-6 w-[400px] hover:border-white/10 transition-colors"
              >
                <blockquote className="text-gray-400 mb-4">
                  &quot;{review.quote}&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full" />
                  <div>
                    <p className="text-white font-semibold">{review.author}</p>
                    <p className="text-gray-400 text-sm">{review.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review, i) => (
              <Card
                key={i}
                className="bg-[#111] border-white/5 p-6 w-[400px] hover:border-white/10 transition-colors"
              >
                <blockquote className="text-gray-400 mb-4">
                  &quot;{review.quote}&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full" />
                  <div>
                    <p className="text-white font-semibold">{review.author}</p>
                    <p className="text-gray-400 text-sm">{review.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default MemberFeedback;
