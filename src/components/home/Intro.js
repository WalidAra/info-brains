import React from "react";

const Intro = () => {
  return (
    <div className="flex z-20  flex-col gap-5 w-full  md:w-2/3  text-center  relative">
      <div
        style={{ borderRadius: "40px 30% 20% 35%" }}
        className="h-96 w-72 bg-secondary opacity-25 z-10 absolute -bottom-1/2 -left-1/3 blur-3xl"
      ></div>
      <div
        style={{ borderRadius: "40px 30% 20% 35%" }}
        className="h-96 w-72 bg-secondary opacity-20 z-10 absolute bottom-0 -right-1/2 blur-3xl"
      ></div>
      <h1 className="text-slate-900 font-extrabold text-3xl sm:text-5xl lg:text-6xl lg:tracking-tighter dark:text-white">
        info brains , where the mind has no bounds , and where we scripting till
        synapses surrender
      </h1>
      <p className="text-lg dark:text-slate-400 text-slate-600 mx-auto max-w-3xl font-normal">
        Are you feeling stuck or overwhelmed in your coding journey? Don't
        worry, We've got your back! Together, we'll work to level up your
        <span className="text-secondary "> skills </span>, increase your earning
        potential, and build a
        <span className="text-secondary "> brighter future. </span>
      </p>
    </div>
  );
};

export default Intro;
