import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PACKAGES = [
  {
    name: 'Starter Package',
    price: '8000/-',
    gst: '+ 18% GST',
    sessions: '3 Sessions',
    validity: '1 month',
    benefits: ['Learn to make healthy food choices', 'Free E-PDF']
  },
  {
    name: 'Basic Package',
    price: '20000/-',
    gst: '+ 18% GST',
    sessions: '9 Sessions',
    validity: '3 months',
    benefits: ['Reverse deficiencies', 'Healthy Skin and Gut', 'Personalized WhatsApp group with Sehat Plus team']
  },
  {
    name: 'Advanced Package',
    price: '45000/-',
    gst: '+ 18% GST',
    sessions: '18 Sessions',
    validity: '6 months',
    benefits: ['Personalized WhatsApp group with Sehat Plus team']
  },
  {
    name: 'Signature Package',
    price: '30000/-',
    gst: '+ 18% GST',
    sessions: '9 Sessions',
    validity: '3 months',
    benefits: ['Personalized WhatsApp group with Sehat Plus team']
  },
  {
    name: 'Yearly Package',
    price: '90000/-',
    gst: '+ GST',
    sessions: '36 Sessions',
    validity: '12 months',
    benefits: ['Helps you to maintain a healthy lifestyle', 'Maintenance Diet Plan', 'Personalized WhatsApp group with Sehat Plus team']
  }
];

export default function SubscriptionPackages() {
  return (
    <section className="relative py-24 bg-[#f7f7f7] overflow-hidden">
      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <span className="text-[14px] font-bold text-[#8c7161] uppercase tracking-[2px] mb-2">Why Subscribe</span>
          <h2 className="text-3xl md:text-5xl font-bold text-black text-center mb-6">
            Sehat+ Health Transformation Package
          </h2>
          <p className="text-gray-500 text-center max-w-3xl text-[16px] leading-relaxed">
            Every clinical nutritionist on our team at Sehat plus is experienced, certified, and up-to-date with the latest research in the field of nutritional science. Our experts can develop diet charts for weight loss or clinical nutrition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {PACKAGES.map((pkg, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl p-10 flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-black mb-6">{pkg.name}</h3>
              
              <div className="mb-8">
                <div className="text-3xl font-bold text-[#8c7161]">{pkg.price}</div>
                <div className="text-[12px] text-gray-400 font-bold">{pkg.gst}</div>
              </div>
              
              <div className="mb-8 font-bold text-[15px] text-black">
                <div>{pkg.sessions}</div>
                <div className="text-gray-400 font-normal">{pkg.validity}</div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex gap-3 items-start text-[14px] text-gray-600">
                    <Check size={16} className="text-[#8c7161] shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-[#8c7161] hover:bg-[#7a6254] text-white font-bold py-4 rounded-lg text-[13px] uppercase tracking-wider transition-colors shadow-lg">
                Purchase
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
