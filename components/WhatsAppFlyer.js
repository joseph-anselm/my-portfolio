"use client";

import { MessageCircle } from "lucide-react";

const WhatsAppFlyer = () => {
  const whatsappNumber = "2348032516519";
  const message = encodeURIComponent(
    "Hello Joseph, I visited your website and would like to discuss a project."
  );

  return (
    <section className="relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="relative bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-green-500/10 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left Content */}
          <div className="space-y-4 max-w-xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-600 text-sm font-semibold">
              <MessageCircle size={14} />
              WhatsApp Chat
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Let’s talk about your project
            </h2>

            <p className="text-slate-500 leading-relaxed">
              Have an idea, a product, or a business challenge?  
              Reach out directly on WhatsApp for fast responses and clear communication.
            </p>
          </div>

          {/* CTA Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-green-500 text-white font-semibold text-lg shadow-xl shadow-green-500/30 hover:bg-green-600 transition-all"
          >
            <MessageCircle
              size={22}
              className="group-hover:scale-110 transition-transform"
            />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppFlyer;
