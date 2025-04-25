import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

const CheckIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
      fill="currentColor"
    />
  </svg>
);

const PricingCard = ({ plan }) => (
  <motion.div
    variants={fadeIn('up')}
    className="relative flex flex-col h-full bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
  >
    {plan.popular && (
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-sm font-medium text-white">
        Most Popular
      </span>
    )}
    
    <div className="text-center mb-8">
      <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
      <div className="flex justify-center items-baseline mb-4">
        <span className="text-4xl font-bold text-white">${plan.price}</span>
        <span className="text-gray-400 ml-1">/event</span>
      </div>
      <p className="text-gray-400 text-sm">{plan.description}</p>
    </div>

    <ul className="flex-1 space-y-4 mb-8">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3 text-gray-300">
          <CheckIcon />
          {feature}
        </li>
      ))}
    </ul>

    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
        plan.popular
          ? 'bg-primary text-white hover:bg-primary/90'
          : 'bg-white/10 text-white hover:bg-white/20'
      }`}
    >
      Get Started
    </motion.button>
  </motion.div>
);

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 499,
      description: 'Perfect for small events',
      popular: false,
      features: [
        'Up to 100 attendees',
        'Basic event setup',
        'Standard support',
        'Basic analytics',
        'Mobile check-in'
      ]
    },
    {
      name: 'Pro',
      price: 999,
      description: 'Ideal for medium-sized events',
      popular: true,
      features: [
        'Up to 500 attendees',
        'Premium event setup',
        'Priority support',
        'Advanced analytics',
        'Mobile check-in',
        'Custom branding',
        'VIP access management'
      ]
    },
    {
      name: 'Enterprise',
      price: 1999,
      description: 'For large-scale events',
      popular: false,
      features: [
        'Unlimited attendees',
        'Full event customization',
        '24/7 dedicated support',
        'Complete analytics suite',
        'Multi-device check-in',
        'Custom branding',
        'VIP access management',
        'Multi-event management'
      ]
    }
  ];

  return (
    <section className="py-20 bg-dark" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the perfect package for your event needs with our flexible pricing options
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
