"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitLead } from "@/app/actions/submitLead";
import MagneticElement from "./MagneticElement";

const questions = [
  { 
    id: "industry", 
    question: "Select your practice or industry.", 
    type: "options",
    options: ["Legal", "Medical", "Real Estate", "Other"]
  },
  { 
    id: "bottleneck", 
    question: "What is your primary growth bottleneck?", 
    type: "options",
    options: ["Lead Quality", "Brand Authority", "Outdated Tech"]
  },
  { 
    id: "details", 
    question: "Where should we send your private proposal?", 
    type: "multi",
    fields: [
      { id: "name", placeholder: "Full Name", type: "text" },
      { id: "email", placeholder: "Work Email", type: "email" },
      { id: "phone", placeholder: "Phone Number", type: "tel" },
    ]
  },
];

export default function LeadForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ industry: "", bottleneck: "", name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleNext = () => {
    setErrorMsg("");
    if (step < questions.length - 1) setStep(step + 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const q = questions[step];
      if (q.type !== "options") {
        if (step < questions.length - 1) handleNext();
        else handleSubmit();
      }
    }
  };

  const selectOption = (val: string) => {
    setFormData({ ...formData, [questions[step].id]: val });
    setTimeout(() => {
      if (step < questions.length - 1) handleNext();
    }, 300);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await submitLead(formData);
      if (res.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(res.error || "An error occurred.");
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const currentQ = questions[step];

  return (
    <section id="contact" className="min-h-screen bg-alabaster flex items-center justify-center py-24 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-charcoal/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="glass-panel w-full max-w-2xl rounded-[2rem] p-12 md:p-20 relative z-10 min-h-[400px] flex flex-col justify-center border border-white/60">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full"
            >
              <div className="mb-12">
                <p className="font-sans text-xs font-bold tracking-widest text-charcoal/40 uppercase mb-4">
                  Exclusive Qualification Process &mdash; Step {step + 1} of {questions.length}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-tight">
                  {currentQ.question}
                </h2>
              </div>

              <div className="relative">
                {currentQ.type === "options" && currentQ.options && (
                  <div className="flex flex-col gap-4">
                    {currentQ.options.map(opt => (
                      <button
                        key={opt}
                        onClick={() => selectOption(opt)}
                        className={`w-full text-left px-8 py-5 rounded-2xl border ${formData[currentQ.id as keyof typeof formData] === opt ? 'border-charcoal bg-charcoal/5' : 'border-charcoal/10 hover:border-charcoal/30'} transition-all font-sans text-xl text-charcoal`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {currentQ.type === "multi" && currentQ.fields && (
                  <div className="flex flex-col gap-6">
                    {currentQ.fields.map(field => (
                      <input
                        key={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                        onKeyDown={handleKeyDown}
                        className="w-full bg-transparent border-b-2 border-charcoal/10 focus:border-charcoal/50 text-xl py-3 outline-none transition-colors font-sans text-charcoal placeholder:text-charcoal/30"
                      />
                    ))}
                  </div>
                )}
              </div>

              {errorMsg && (
                <div className="mt-6 text-red-500 font-sans text-sm">
                  {errorMsg}
                </div>
              )}

              <div className="mt-16 flex justify-between items-center">
                <button
                  onClick={() => setStep(Math.max(0, step - 1))}
                  className={`text-charcoal/40 hover:text-charcoal transition-colors font-sans font-medium ${step === 0 ? "invisible" : ""}`}
                >
                  Back
                </button>
                
                {step < questions.length - 1 ? (
                  currentQ.type !== "options" && (
                    <button
                      onClick={handleNext}
                      className="font-medium font-sans text-charcoal flex items-center gap-2 group"
                    >
                      Next
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  )
                ) : (
                  <MagneticElement>
                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="relative overflow-hidden bg-charcoal text-white px-8 py-4 rounded-full font-medium font-sans liquid-hover transition-transform active:scale-95 group disabled:opacity-80 block"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {loading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                        ) : (
                          "Submit Request"
                        )}
                      </span>
                    </button>
                  </MagneticElement>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8"
              >
                <motion.svg 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="w-10 h-10 text-green-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </motion.svg>
              </motion.div>
              <h2 className="font-serif text-4xl text-charcoal mb-4">Request Received.</h2>
              <p className="font-sans text-charcoal/60 text-lg">Your application is under review. Our partners will reach out within 24 hours.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
