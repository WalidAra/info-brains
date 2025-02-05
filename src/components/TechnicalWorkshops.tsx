import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Database, Globe, Shield, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const TechnicalWorkshops = () => {
  return (
    <section id={"workshops"} className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <Badge className="bg-purple-600 text-white px-4 py-1 rounded-full mb-4">
            Technical Workshops
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-white">Hands-on </span>
            <span className="text-gray-500">Learning</span>
          </h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              title: "Front-end Development",
              description: "Build modern, responsive websites",
              icon: Globe,
              topics: ["HTML/CSS", "JavaScript", "React", "Node.js", "Next.js"],
            },
            {
              title: "back-End Development",
              description: "Analyze data and build ML models",
              icon: Database,
              topics: ["Express", "Nest.js", "Django", "golang"],
            },
            {
              title: "Mobile App Development",
              description: "Create cross-platform mobile apps",
              icon: Smartphone,
              topics: [
                "React Native",
                "Flutter",
                "iOS",
                "Android",
                "cross-platform",
              ],
            },
            {
              title: "Graphic Design",
              description:
                "Learn the principles of design and create stunning visuals",
              icon: Shield,
              topics: [
                "Photoshop",
                "Illustrator",
                "Figma",
                "Sketch",
                "InDesign",
              ],
            },
            {
              title: "AI & Deep Learning",
              description: "Explore advanced AI techniques",
              icon: Brain,
              topics: ["Neural Networks", "Computer Vision", "NLP"],
            },
          ].map((workshop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="bg-[#111] w-[382px] border-white/5 p-6 hover:border-white/10 transition-colors h-full">
                <workshop.icon className="w-8 h-8 text-[#2563EB] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  {workshop.title}
                </h3>
                <p className="text-gray-400 mb-4">{workshop.description}</p>
                <div className="flex flex-wrap gap-2">
                  {workshop.topics.map((topic, j) => (
                    <Badge key={j} variant="secondary">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalWorkshops;
