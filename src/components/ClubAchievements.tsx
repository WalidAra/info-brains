"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const ClubAchievements = () => {
  return (
    <section
      id={"achievements"}
      className="py-16 relative bg-[#111] rounded-2xl mx-4"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <Badge className="bg-yellow-500 text-white px-4 py-1 rounded-full mb-4">
            Club Achievements
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-white">Our Proudest </span>
            <span className="text-gray-500">Moments</span>
          </h2>
        </motion.div>
        <div className="flex justify-center flex-wrap gap-6 ">
          {[
            {
              title: "National hakathon competition",
              description: "3st Place in National Hackathon",
              year: "2023",
              icon: Trophy,
            },
            {
              title: "National Competition for scientific club in tebessa",
              description: "5 place prize",
              year: "2023",
              icon: Star,
            },
          ].map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="bg-[#0A0A0A] w-full sm:w-96 h-full border-white/5 p-6 hover:border-white/10 transition-colors">
                <achievement.icon className="w-8 h-8 text-yellow-500 mb-4" />
                <Badge className="bg-[#2563EB] text-white mb-2">
                  {achievement.year}
                </Badge>
                <h3 className="text-xl font-bold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-400">{achievement.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubAchievements;
