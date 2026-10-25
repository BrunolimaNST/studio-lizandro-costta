import React, { useState } from 'react'
import { MessageCircle, Mail, MapPin, ArrowRight, CheckCircle2, Send } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { CONTACT_INFO } from '../data/content'

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'hipertrofia',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open WhatsApp with prefilled message
    const text = `Olá, Lizandro! Meu nome é ${formData.name}. Meu objetivo principal é ${formData.goal}. ${formData.message ? `Mensagem: ${formData.message}` : ''}`
    window.open(`https://wa.me/554999003369?text=${encodeURIComponent(text)}`, '_blank')
    setFormSubmitted(true)
  }

  return (
    <section id="contato" className="relative py-20 lg:py-28 overflow-hidden bg-[#07080A]">
      {/* Background gym image with heavy dark gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/contact-bg.jpg"
          alt="Academia"
          className="w-full h-full object-cover opacity-25 filter grayscale contrast-125"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#090A0C] via-[#090A0C]/90 to-[#090A0C]/80"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-transparent to-[#090A0C]"
          aria-hidden="true"
        />
      </div>

      <Container className="relative z-10">
        <div className="rounded-2xl bg-[#111319]/80 border border-white/10 p-8 sm:p-12 lg:p-16 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side: Call to Action */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B00] mb-3">
                Contato Direto
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                Vamos Conversar?
              </h2>
              <p className="mt-4 text-base text-zinc-300 font-normal leading-relaxed max-w-md">
                Tire suas dúvidas, agende seu treino ou saiba mais sobre os planos e metodologia.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  href={CONTACT_INFO.whatsapp.link}
                  variant="primary"
                  size="lg"
                  glow
                  className="group inline-flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  <span>Entre em Contato</span>
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Channels List matching mockup */}
              <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* WhatsApp */}
                <a
                  href={CONTACT_INFO.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 group/ch"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center shrink-0 group-hover/ch:bg-[#FF6B00] group-hover/ch:text-white transition-all">
                    <MessageCircle size={18} className="text-[#FF6B00] group-hover/ch:text-white" />
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
                  className="flex items-center gap-3.5 group/ch"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center shrink-0 group-hover/ch:bg-[#FF6B00] group-hover/ch:text-white transition-all">
                    <Mail size={18} className="text-[#FF6B00] group-hover/ch:text-white" />
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

                {/* Localização */}
                <a
                  href="https://maps.app.goo.gl/mgXGBCR2Bhui9cy36"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center shrink-0 group-hover:border-[#FF6B00] group-hover:bg-[#FF6B00]/25 transition-all duration-300">
                    <MapPin size={18} className="text-[#FF6B00] group-hover:scale-110 transition-transform duration-300" />
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

            {/* Right side: Quick Interactive Booking Form */}
            <div className="lg:col-span-6 bg-[#0B0C10]/90 border border-white/10 rounded-xl p-6 sm:p-8">
              <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-2">
                Agende sua Avaliação
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Preencha seus dados para iniciarmos seu planejamento.
              </p>

              {formSubmitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <CheckCircle2 size={48} className="text-[#FF6B00] mb-3" />
                  <h4 className="text-lg font-bold text-white">Mensagem Enviada!</h4>
                  <p className="text-xs text-zinc-400 mt-1 max-w-xs">
                    Você foi redirecionado para o WhatsApp com suas informações pré-preenchidas.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 text-xs font-bold text-[#FF6B00] hover:underline"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase text-zinc-300 mb-1">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Ex: Carlos Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#14161F] border border-white/10 rounded-md px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="goal" className="block text-xs font-semibold uppercase text-zinc-300 mb-1">
                      Objetivo Principal
                    </label>
                    <select
                      id="goal"
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full bg-[#14161F] border border-white/10 rounded-md px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                    >
                      <option value="Hipertrofia e Ganho de Massa">Hipertrofia e Ganho de Massa</option>
                      <option value="Emagrecimento e Definição">Emagrecimento e Definição</option>
                      <option value="Condicionamento e Saúde">Condicionamento e Performance</option>
                      <option value="Consultoria Online">Consultoria Online</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase text-zinc-300 mb-1">
                      Mensagem ou Dúvida (opcional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Conte um pouco sobre sua rotina atual..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#14161F] border border-white/10 rounded-md px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    glow
                    className="w-full text-center mt-2 flex items-center justify-center gap-2"
                  >
                    <Send size={15} />
                    <span>Enviar via WhatsApp</span>
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
