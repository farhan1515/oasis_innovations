import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';

const Careers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const jobs = [
    {
      title: 'Senior Full Stack Developer',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $180k',
      department: 'Engineering',
    },
    {
      title: 'UI/UX Designer',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90k - $130k',
      department: 'Design',
    },
    {
      title: 'Product Manager',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$100k - $150k',
      department: 'Product',
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
      salary: '$110k - $160k',
      department: 'Engineering',
    },
  ];

  return (
    <section id="careers" className="py-20 bg-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're always looking for talented individuals who are passionate about
            creating exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-2" />
                        {job.salary}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {job.department}
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 md:mt-0 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Don't see the right position?
          </h3>
          <p className="text-gray-600 mb-8">
            We're always interested in meeting talented people. Send us your resume
            and we'll keep you in mind for future opportunities.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
          >
            Send Resume
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Careers;