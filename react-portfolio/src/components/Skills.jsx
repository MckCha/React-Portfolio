import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 75 },
      { name: 'SQL', level: 85 },
      { name: 'PHP', level: 70 },
      { name: 'Java', level: 65 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Framer Motion', level: 70 },
    ],
  },
  {
    title: 'Backend & Data',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'Excel/Data Processing', level: 85 },
    ],
  },
  {
    title: 'AI & Tools',
    skills: [
      { name: 'LangChain', level: 80 },
      { name: 'OpenAI API', level: 85 },
      { name: 'Git/GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
    ],
  },
];

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Python', icon: '🐍' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'LangChain', icon: '🦜' },
  { name: 'OpenAI', icon: '🤖' },
  { name: 'Node.js', icon: '💚' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Tailwind', icon: '🎨' },
  { name: 'Git', icon: '📦' },
  { name: 'REST API', icon: '🔌' },
  { name: 'SQL', icon: '🗃️' },
  { name: 'VS Code', icon: '💻' },
];

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="section-container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="text-accent-cyan font-mono text-sm mb-4 block">02. Skills</span>
          <h2 className="section-title">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            From backend systems to AI agents, here's my toolkit for building modern, scalable solutions.
          </p>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="skill-tag flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05 }}
            >
              <span>{tech.icon}</span>
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-display font-semibold mb-6 text-white">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-gray-500 text-xs font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Focus Areas */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🔧',
                title: 'Backend Development',
                description: 'Building robust APIs, data pipelines, and server-side logic with Python and Node.js.',
              },
              {
                icon: '🤖',
                title: 'AI & Automation',
                description: 'Developing intelligent agents and automation tools using LangChain and OpenAI.',
              },
              {
                icon: '📊',
                title: 'HRIS & Data Systems',
                description: 'Enterprise HR systems, data processing, and business intelligence solutions.',
              },
            ].map((area, index) => (
              <motion.div
                key={area.title}
                className="glass-card-hover p-6 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h4 className="font-display font-semibold text-white mb-2">{area.title}</h4>
                <p className="text-gray-400 text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Skills;
