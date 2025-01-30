import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";


const Newsletter = () => {
  return (
    <section className="py-16 relative border-t border-white/[0.02]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Badge className="bg-[#2563EB] text-white px-4 py-1 rounded-full mb-4">
              Stay Updated
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-white">Join Our </span>
              <span className="text-gray-500">Newsletter</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Get weekly updates about workshops, events, and opportunities
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-[#111] border-white/10 rounded-full"
              />
              <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-full px-6">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
