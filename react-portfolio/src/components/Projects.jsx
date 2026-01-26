import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Tempo',
    subtitle: 'AI Travel Agent',
    description:
      'An intelligent chatbot that revolutionizes leisure travel planning. Tempo helps users create budget-optimized itineraries, discover points of interest, and find the best flight deals—all through natural conversation.',
    longDescription:
      'Built with the belief that travel planning shouldn\'t be stressful or expensive. Tempo leverages AI to understand your preferences, constraints, and dreams to craft the perfect trip.',
    tech: ['React', 'Python', 'LangChain', 'OpenAI', 'PostgreSQL'],
    highlights: [
      'Budget optimization engine',
      'Smart POI recommendations',
      'Flight price analysis',
      'Conversational UI',
    ],
    status: 'In Development',
    featured: true,
    github: 'https://github.com/MckCha/Tempo',
    live: '#',
    gradient: 'from-accent-cyan via-blue-500 to-accent-purple',
  },
  {
    id: 2,
    title: 'Financial Data Sanitizer',
    subtitle: 'Data Processing Tool',
    description:
      'A Python-powered desktop application that automates the cleaning and standardization of financial datasets, reducing manual processing time by 80%.',
    tech: ['Python', 'Excel', 'GUI', 'Data Processing'],
    highlights: [
      'Automated data cleaning',
      'Excel integration',
      'User-friendly interface',
      'Batch processing',
    ],
    status: 'Completed',
    featured: false,
    github: 'https://github.com/MckCha/Financial-Data-Sanitizer',
    gradient: 'from-green-400 to-emerald-600',
  },
  {
    id: 3,
    title: 'Vibe View',
    subtitle: 'Utilization Tracker',
    description:
      'A web application developed to showcase on campus room utilization. Features real-time data visualization to help guage occupancy and usage patterns.',
    tech: ['PHP', 'JavaScript', 'API', 'MySQL'],
    highlights: [
      'Streaming API integration',
      'Social features',
      'Music visualization',
      'User profiles',
    ],
    status: 'Completed',
    featured: false,
    github: 'https://github.com/SamuelKaing/Senior-Project',
    gradient: 'from-purple-400 to-pink-600',
  },
  {
    id: 4,
    title: 'Blockbuster 2',
    subtitle: 'Movie Review System',
    description:
      'A nostalgic tribute to Blockbuster, rebuilt as a modern web application that lists reviews for movies',
    tech: ['HTML', 'PHP', 'SQL', 'CSS'],
    highlights: [
      'User authentication',
      'IMDB Ratings',
      'Database design',
    ],
    status: 'Completed',
    featured: false,
    github: 'https://github.com/MckCha/blockbuster2',
    gradient: 'from-yellow-400 to-orange-600',
  },
];

function ProjectCard({ project, index, isInView }) {
  const [isHovered, setIsHovered] = useState(false);

  if (project.featured) {
    return (
      <motion.div
        className="glass-card overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="grid lg:grid-cols-2">
          {/* Visual Side */}
          <div className={`relative p-8 lg:p-12 bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent" />
            <div className="relative z-10">
              {/* Status Badge */}
              <motion.span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium mb-6"
                animate={{ scale: isHovered ? 1.05 : 1 }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {project.status}
              </motion.span>

              {/* Icon/Visual */}
              <motion.div
                className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6"
                animate={{ rotate: isHovered ? 5 : 0, scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-4xl">✈️</span>
              </motion.div>

              <h3 className="text-3xl font-display font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-white/70 font-medium">{project.subtitle}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-badge bg-white/10 border-white/20 text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="p-8 lg:p-12">
            <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">{project.longDescription}</p>

            {/* Highlights */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-white mb-4">Key Features</h4>
              <ul className="grid grid-cols-2 gap-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View Code
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Regular project card
  return (
    <motion.div
      className="project-card group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} rounded-t-2xl`} />

      <div className="flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-display font-semibold text-white group-hover:text-accent-cyan transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-500 text-sm">{project.subtitle}</p>
          </div>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </motion.a>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-container" ref={ref}>
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="text-accent-cyan font-mono text-sm mb-4 block">03. Projects</span>
        <h2 className="section-title">
          Things I've <span className="gradient-text">Built</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          A collection of projects that showcase my passion for solving real problems with technology.
        </p>
      </motion.div>

      {/* Featured Project */}
      {featuredProject && (
        <div className="mb-12">
          <motion.span
            className="text-sm text-gray-500 mb-4 block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Featured Project
          </motion.span>
          <ProjectCard project={featuredProject} index={0} isInView={isInView} />
        </div>
      )}

      {/* Other Projects Grid */}
      <div>
        <motion.span
          className="text-sm text-gray-500 mb-6 block"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          Other Notable Projects
        </motion.span>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + 1} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;