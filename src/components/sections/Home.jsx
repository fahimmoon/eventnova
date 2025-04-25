import React from 'react';
import { FiCalendar, FiUsers, FiAward } from 'react-icons/fi';

const Stats = () => {
  const metrics = [
    { icon: FiCalendar, value: '500+', label: 'Events Organized' },
    { icon: FiUsers, value: '10K+', label: 'Happy Clients' },
    { icon: FiAward, value: '15+', label: 'Awards Won' },
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied clients who've trusted us with their events
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg backdrop-blur-sm"
            >
              <metric.icon className="w-6 h-6 text-primary mb-2" />
              <span className="text-2xl font-bold gradient-text">{metric.value}</span>
              <span className="text-xs text-gray-400">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;