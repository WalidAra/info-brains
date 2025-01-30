
import {
  Code,
  Calendar,
  Users,
  Trophy,

} from "lucide-react";
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <section className="py-16 relative border-t border-b border-white/[0.02]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Members", icon: Users },
            { number: "50+", label: "Workshops", icon: Calendar },
            { number: "30+", label: "Projects", icon: Code },
            { number: "20+", label: "Awards", icon: Trophy },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-[#2563EB]" />
              <h3 className="text-3xl font-bold text-white mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
