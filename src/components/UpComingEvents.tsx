import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

const UpComingEvents = () => {
  return (
    <section id={"events"} className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <Badge className="bg-[#2563EB] text-white px-4 py-1 rounded-full mb-4">
            Upcoming Events
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-white">Join Our Next </span>
            <span className="text-gray-500">Workshop</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Javascript bootcamp",
              date: "soon",
              time: "3:00 PM",
              location: "CS Building 101",
              speaker: "Dhiya kellouche",
            },
            {
              title: "Git & github",
              date: "soon",
              time: "4:00 PM",
              location: "Virtual",
              speaker: "Walid Araar",
            },
            {
              title: "Learn how to implement system architecture in react",
              date: "soon",
              time: "2:00 PM",
              location: "Innovation Lab",
              speaker: "Club Leadership",
            },
          ].map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="bg-[#111] border-white/5 p-6 h-full hover:border-white/10 transition-colors">
                <div className="mb-4">
                  <Badge
                    variant="outline"
                    className="mb-2 text-blue-500 bg-blue-500/5 border-blue-500"
                  >
                    {event.date}
                  </Badge>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-400">
                    {event.time} • {event.location}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>Speaker: {event.speaker}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpComingEvents;
