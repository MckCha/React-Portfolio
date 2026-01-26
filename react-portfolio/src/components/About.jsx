import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="section-container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* Image/Avatar Section */}
        <motion.div variants={itemVariants} className="relative order-2 lg:order-1">
          <div className="relative">
            {/* Placeholder for profile image - glassmorphism container */}
            <div className="glass-card aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 via-accent-purple/20 to-accent-pink/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
                    <span className="text-5xl font-display font-bold text-white">MC</span>
                  </div>
                  <p className="text-gray-400 text-sm">Professional photo coming soon</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent-cyan/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-accent-purple/20 rounded-2xl -z-10" />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div variants={itemVariants} className="order-1 lg:order-2">
          <motion.span
            variants={itemVariants}
            className="text-accent-cyan font-mono text-sm mb-4 block"
          >
            01. About Me
          </motion.span>

          <motion.h2 variants={itemVariants} className="section-title">
            Crafting Digital Solutions
            <br />
            <span className="gradient-text">With Purpose</span>
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I'm a Software Engineer with a passion for building systems that make a real difference. 
              My expertise spans <span className="text-white">backend development</span>, 
              <span className="text-white"> HRIS systems</span>, and emerging 
              <span className="text-white"> AI agent technologies</span>.
            </p>

            <p>
              With a foundation in Computer Science and hands-on experience in enterprise solutions, 
              I specialize in transforming complex data workflows into elegant, efficient systems. 
              From financial data processing to AI-powered travel planning, I thrive on solving 
              problems that blend technical depth with user-centric design.
            </p>

            <p>
              Currently, I'm focused on building intelligent agents that help people save time and money—because 
              technology should work <span className="text-white">for</span> people, not the other way around.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/[0.05]"
          >
            {[
              { number: '2+', label: 'Years Experience' },
              { number: '6+', label: 'Projects Completed' },
              { number: '100%', label: 'Dedication' },
            ].map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-display font-bold gradient-text">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;