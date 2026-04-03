import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Plus, Minus } from 'lucide-react';

const FAQS = [
  { question: "DO I NEED THIS?", answer: "A healthy lifestyle is essential for each & every person, why wait for the disease." },
  { question: "WILL I BE ABLE TO DO IT?", answer: "We plan a gradual shift in diet & lifestyle that fits your schedule with easy home remedies. With a little dedication from your side YES you will be able to do it." },
  { question: "WHAT SHOULD I EXPECT DURING THE INITIAL CONSULTATION?", answer: "In First consultation we take your nutrition screening, body composition analysis, biochemical assessment, diet recall, consultation, foods allowed and restricted, and you get your first diet chart accordingly." },
  { question: "WILL I BE GIVEN SUPPLEMENTS TO TAKE?", answer: "Supplements will be given only if you have any vitamin, mineral, protein deficiency. Normally we prescribe natural things from your kitchen, few nutraceutical foods and supplements might be added in few cases only." },
  { question: "HOW DO I KNOW YOUR DIET WILL WORK FOR ME?", answer: "We begin with a complete body and lifestyle analysis and then prescribe you a diet that is right for you. We keep a check on your progress and how the diet is working for you by periodical follow ups and assessments and accordingly tweak your diet plan and prescribe what works for you." },
  { question: "HOW MUCH TIME WILL I TAKE TO LOSE WEIGHT?", answer: "You are unique. Each body is different with a different genetic constitution and metabolism. Depending on your personal targets we suggest you the time that may be required." },
  { question: "HOW MUCH WEIGHT LOSS DO YOU GUARANTEE?", answer: "We promise that if you are dedicated, follow our diet plans & advice; RESULTS will follow." },
  { question: "WHY IS THE FOLLOW-UP IMPORTANT?", answer: "Follow-up is required for regular monitoring and assessing health improvement." },
  { question: "WILL I GAIN WEIGHT AGAIN AFTER LEAVING THE DIET?", answer: "Consistency is the key to success. Once you complete your term with me I will give you a Maintenance Diet which is holistic, culture friendly and easy to follow. If you follow this then you will never go wrong and the weight will never come back." },
  { question: "HOW DO I PAY?", answer: "You can use Debit card/Credit card, Net Banking, PayPal, Google Pay, Paytm, Amazon Pay, UPI & Other mobile wallets." },
  { question: "CAN I CONSULT YOU ONLINE?", answer: "Yes, you need to prior book your appointment." },
  { question: "HOW WILL I RECEIVE MY 'ONLINE DIET PLAN'?", answer: "Your tailor-made diet plan will be mailed to you immediately after the Consultation." },
  { question: "HOW OFTEN DOES THE DIET CHANGE?", answer: "One diet plan is to be followed for 8 days, during this period if you have any queries or issues, you can contact us on the details provided and we will address it." },
  { question: "I HAVE A WEDDING/HOLIDAY/TRAVEL COMING UP? I TRAVEL A LOT?", answer: "Our easy-to-follow flexible diets allow you to enjoy & still follow the program." },
  { question: "WHAT IS THE PATTERN OF THE DIET, DOES IT NEED SPECIAL FOOD PREPARATION AND HOW STRICT IS IT?", answer: "We make sure that the food given is something you can easily manage in your life and lifestyle, you won't be eating or cooking anything that you cannot manage or sustain." },
  { question: "WILL I LOOK PALE, HAVE HAIR LOSS? WILL I FEEL HUNGRY, DULL, AND TIRED AFTER FOLLOWING YOUR PLAN?", answer: "No. We plan your diet considering all nutrition requirements, we ensure that you lose weight but not your health. Your intake of foods will be rich in Vitamin C and Antioxidants." },
  { question: "CAN I KNOW THE NUTRITIVE VALUES OF RECIPES?", answer: "Yes, certainly!" },
  { question: "WILL I GET REFUND IF I AM NOT SATISFIED WITH THE SERVICE YOU OFFER?", answer: "We have No Refund policy." },
  { question: "CAN I GET A DIET TO IMPROVE MY ENERGY LEVELS AND OVERALL WELLBEING?", answer: "Yes definitely." },
  { question: "DO YOU PROVIDE DIET PLAN FOR CHRONIC DISEASES LIKE HYPERTENSION, DIABETES, KIDNEY DISEASE, LUNG DISEASE, CANCER, ETC.?", answer: "Yes, we use Medical Nutrition Therapy (MNT) to treat a variety of chronic conditions including Diabetes Mellitus, Hypertension, PCOD, Cancer, Renal Diseases, Gastrointestinal Diseases, Thyroid, and Menopause. This is provided by a registered dietitian (RD)." },
  { question: "WILL I BE ABLE TO EAT MY FAVOURITE FOODS IN MY WEIGHT LOSS JOURNEY WITH YOU?", answer: "Yes." },
];

export default function FAQPage() {
  const [active, setActive] = useState(null);

  return (
    <div className="bg-[#faf9f6]">
      {/* Breadcrumb Header */}
      <div className="bg-white py-20 border-b border-gray-100 mt-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <div className="text-[11px] font-black uppercase tracking-[5px] text-[var(--sp-gold)] mb-4">
              Your Questions Answered
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#2e2e2e] font-serif italic">
              Frequently Asked Questions
            </h1>
            <div className="flex items-center gap-2 mt-8 text-[12px] font-bold uppercase tracking-widest text-gray-400">
              <Link to="/" className="hover:text-[var(--sp-brown)] transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-[var(--sp-brown)]">FAQ</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pt-24 pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-4">
            {FAQS.map((f, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100"
              >
                <button
                  onClick={() => setActive(active === idx ? null : idx)}
                  className="w-full px-10 py-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[14px] md:text-[15px] font-black text-[#2e2e2e] uppercase tracking-widest leading-relaxed pr-8">
                    {f.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${active === idx ? 'bg-[var(--sp-brown)] text-white' : 'bg-gray-100 text-gray-400'}`}>
                    {active === idx ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <AnimatePresence>
                  {active === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-10 pb-10 text-gray-500 text-lg leading-relaxed font-medium border-t border-gray-50 pt-8 mt-[-1px]">
                         {f.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
