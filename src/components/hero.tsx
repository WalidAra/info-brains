import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Hero = () => {
  return (
    <section id={"hero"} className="pt-32 pb-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div className="text-center lg:text-left" {...fadeIn}>
            <div className="flex justify-center lg:justify-start gap-2 mb-6">
              <Badge className="bg-purple-600 text-white px-4 py-1 rounded-full">
                Est. 2024
              </Badge>
              <Badge className="bg-emerald-500 text-white px-4 py-1 rounded-full">
                100+ Members
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Where Code Meets </span>
              <span className="text-gray-500">Community</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8">
              Join UHBC&apos;s premier Computer Science club. Learn, build, and
              grow together with fellow passionate developers.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-full px-8 py-6">
                Get started
              </Button>
              {/* <Button
                variant="outline"
                className="rounded-full px-8 py-6 border-white/10 hover:bg-white/5"
              >
                View Projects
              </Button> */}
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-transparent backdrop-blur-sm bg-[#111] rounded-lg p-4 border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className="text-sm font-mono">
                <code className="text-gray-300">
                  <span className="text-blue-500">{`class`}</span>
                  <span className="text-purple-500"> InfoBrains</span>
                  <span className="text-yellow-500">{` {`}</span>
                  <div className="">
                    <span className="text-blue-500  ml-6">{`constructor`}</span>
                    {`()`}
                    <span className="text-yellow-500">{` {`}</span>

                    <div className="block ml-10">
                      <span className="text-red-500">{`this`}</span>
                      {`.passion = `}
                      <span className="text-green-500">{`"coding"`}</span>
                      {`;`}
                    </div>
                    <div className="block ml-10">
                      <span className="text-red-500">{`this`}</span>
                      {`.community = `}
                      <span className="text-green-500">{`"growing"`}</span>
                      {`;`}
                    </div>
                    <div className="block  ml-10">
                      <span className="text-red-500">{`this`}</span>
                      {`.future = `}
                      <span className="text-green-500">{`"bright"`}</span>
                      {`;`}
                    </div>
                    <span className="text-yellow-500 block ml-4">{`}`}</span>
                  </div>
                  <span className="text-yellow-500 ">{`}`}</span>
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
