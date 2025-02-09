import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Lightbulb, Users, Trophy } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower businesses through innovative digital solutions that drive growth and success.',
    },
    {
      icon: Lightbulb,
      title: 'Vision',
      description: 'To be the leading force in digital transformation, setting new standards in technology and creativity.',
    },
    {
      icon: Users,
      title: 'Culture',
      description: 'Foster an environment of collaboration, innovation, and continuous learning.',
    },
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'Commit to delivering exceptional quality and exceeding expectations in every project.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
            About Us
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of passionate innovators dedicated to transforming businesses
            through cutting-edge technology and creative solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-20 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Our Story</h3>
              <p className="text-white/90 mb-8">
                Founded with a vision to revolutionize digital experiences, we've grown
                into a dynamic team of innovators, creators, and problem-solvers. Our
                journey is marked by continuous learning, adaptation, and a relentless
                pursuit of excellence.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
            <div className="relative h-full min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    </section>
  );
};

export default About;