import React from 'react'
import { MessageCircle, Mail, MapPin, ArrowRight } from 'lucide-react'
import { CONTACT_INFO } from '../../data/content'
import { Button } from '../ui/Button'

interface ContactPanelProps {
  className?: string
}

export const ContactPanel: React.FC<ContactPanelProps> = ({ className = '' }) => {
  return (
    <div
      id="contato"
      className={`rounded-2xl bg-[#0E1016]/95 border border-white/10 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden ${className}`}
    >
      {/* Background gym image with heavy dark gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/contact-bg.jpg"
          alt="Academia"
          className="w-full h-full object-cover opacity-20 filter grayscale contrast-125"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0E1016] via-[#0E1016]/90 to-[#0E1016]/80"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left side: Heading & CTA */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white leading-tight">
            Vamos Conversar?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-sm">
            Tire suas dúvidas, agende seu treino ou saiba mais sobre os planos.
          </p>

          <div className="mt-6">
            <Button
              href={CONTACT_INFO.whatsapp.link}
              variant="primary"
              size="md"
              glow
              className="text-xs group inline-flex items-center gap-2"
            >
              <span>Entre em Contato</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Right side: Channels with circular icons as in mockup */}
        <div className="md:col-span-5 flex flex-col gap-3.5 border-t md:border-t-0 md:border-l border-white/10 pt-5 md:pt-0 md:pl-6">
          {/* WhatsApp */}
          <a
            href={CONTACT_INFO.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group/ch"
          >
            <div className="w-8 h-8 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center shrink-0 group-hover/ch:bg-[#FF6B00] transition-colors">
              <MessageCircle size={15} className="text-[#FF6B00] group-hover/ch:text-white" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase text-white group-hover/ch:text-[#FF6B00] transition-colors">
                {CONTACT_INFO.whatsapp.label}
              </h4>
              <p className="text-[11px] text-zinc-400">
                {CONTACT_INFO.whatsapp.value}
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href={CONTACT_INFO.email.link}
            className="flex items-center gap-3 group/ch"
          >
            <div className="w-8 h-8 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center shrink-0 group-hover/ch:bg-[#FF6B00] transition-colors">
              <Mail size={15} className="text-[#FF6B00] group-hover/ch:text-white" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase text-white group-hover/ch:text-[#FF6B00] transition-colors">
                {CONTACT_INFO.email.label}
              </h4>
              <p className="text-[11px] text-zinc-400">
                {CONTACT_INFO.email.value}
              </p>
            </div>
          </a>

          {/* Location */}
          <a
            href="https://maps.app.goo.gl/mgXGBCR2Bhui9cy36"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center shrink-0 group-hover:border-[#FF6B00] group-hover:bg-[#FF6B00]/25 transition-all duration-300">
              <MapPin size={15} className="text-[#FF6B00] group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase text-white group-hover:text-orange-500 transition-colors duration-300">
                São Joaquim - SC
              </h4>
              <p className="text-[11px] text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                Sttudio Lizandro Costta (clique para ver no mapa)
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
