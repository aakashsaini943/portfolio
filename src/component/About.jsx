import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-14 md:py-24 bg-dark-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="text-purple">Me</span>
        </h2>

        <p className="text-gray-400 text-center max-w-xl md:max-w-2xl mx-auto mb-12 md:mb-20 leading-relaxed">
          Get to know more about my background, experience, and passion for
          building modern web applications.
        </p>

        {/* Image + Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 max-w-md mx-auto"
          >
            <img
              src={assets.profileImg}
              alt="Profile"
              className="w-full h-auto rounded-2xl object-cover shadow-lg"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                My Journey
              </h3>

              <p className="text-gray-400 mb-5 leading-relaxed text-sm sm:text-base">
                I'm a passionate full-stack developer with over five years of
                experience creating digital solutions for businesses around the
                world. My journey started with simple websites and gradually
                evolved into building complex web applications using modern
                frameworks.
              </p>

              <p className="text-gray-400 mb-10 leading-relaxed text-sm sm:text-base">
                When I'm not coding, I enjoy exploring new technologies,
                contributing to open-source projects, and sharing knowledge
                through blogs and tutorials. I strongly believe in continuous
                learning and pushing the boundaries of what’s possible on the
                web.
              </p>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-xl p-5 sm:p-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-purple text-2xl mb-3">
                      <data.icon />
                    </div>
                    <h4 className="text-lg font-semibold mb-1">
                      {data.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {data.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
