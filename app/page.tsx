"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  CalendarDays,
  Check,
  Clock,
  CreditCard,
  MessageCircle,
  MessageCircleMore,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";

const APP_URL = "https://www.leadflowapp.net";

const appShots = {
  conversations: "/landing/dashboard.png",
  human: "/landing/conversations.png",
  calendar: "/landing/calendar.png",
  clients: "/landing/clients.png",
  dashboard: "/landing/happy-owner.png",
};

const features = [
  {
    icon: MessageCircle,
    title: "Responde WhatsApps automáticamente",
    text: "La IA entiende preguntas, precios, objeciones y clientes que quieren reservar.",
  },
  {
    icon: CalendarCheck,
    title: "Agenda citas sin solapes",
    text: "Comprueba horarios, profesionales y disponibilidad antes de proponer una cita.",
  },
  {
    icon: Users,
    title: "CRM de clientes incluido",
    text: "Cada contacto queda guardado con historial, citas y conversaciones.",
  },
  {
    icon: Bot,
    title: "Entrenada con tu negocio",
    text: "Usa tus servicios, horarios, FAQs, promociones y tono de marca.",
  },
  {
    icon: ShieldCheck,
    title: "Control humano cuando quieras",
    text: "Puedes pausar la IA, tomar una conversación y responder manualmente.",
  },
  {
    icon: Clock,
    title: "Trabaja 24/7",
    text: "Responde aunque estés ocupado, cerrado o atendiendo a otros clientes.",
  },
];

const faqs = [
  {
    q: "¿Tengo que saber de tecnología?",
    a: "No. Configuras tu negocio, conectas WhatsApp y LeadFlow empieza a trabajar contigo.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí. No hay permanencia. Puedes cancelar la suscripción cuando quieras.",
  },
  {
    q: "¿La IA puede cometer errores?",
    a: "Como cualquier IA, puede equivocarse. Por eso LeadFlow incluye historial, toma manual y configuración del negocio para reducir riesgos.",
  },
  {
    q: "¿Sirve para mi sector?",
    a: "Está pensado para negocios que reciben clientes por WhatsApp: barberías, clínicas, estética, fisioterapia, gimnasios, talleres y más.",
  },
];

export default function LeadFlowLandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050812] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.09),transparent_26%),#050812]" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TrustedStrip />
        <ProductShowcase />
        <HowItWorks />
        <EmotionalSection />
        <Features />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </div>
    </main>
  );
}

function Navbar() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8">
      <div className="flex items-center">
  <img
    src="/logo.png"
    alt="LeadFlow"
    className="h-28 w-auto object-contain"
  />
</div>

      <nav className="hidden items-center gap-8 text-sm font-bold text-slate-300 md:flex">
        <a href="#demo" className="hover:text-white">Demo</a>
        <a href="#features" className="hover:text-white">Funciones</a>
        <a href="#pricing" className="hover:text-white">Precio</a>
      </nav>

      <a
        href={`${APP_URL}/login`}
        className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10"
      >
        Entrar
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-8 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-emerald-300">
          <Sparkles className="h-4 w-4" /> WhatsApp + IA + Citas
        </div>

        <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
          Convierte WhatsApp en clientes automáticamente.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
          LeadFlow responde mensajes, detecta clientes calientes, agenda citas y organiza tu negocio mientras tú trabajas.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={`${APP_URL}/login`}
            className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-400 px-7 py-4 text-base font-black text-black shadow-2xl shadow-emerald-400/25 transition hover:-translate-y-0.5 hover:bg-emerald-300"
          >
            Probar gratis 7 días
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </a>

          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-7 py-4 text-base font-black text-white transition hover:bg-white/10"
          >
            Ver cómo funciona
          </a>
        </div>

      <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 text-sm font-bold text-slate-300 sm:grid-cols-2">
  {[
    "Respuestas automáticas 24/7",
    "Agenda inteligente",
    "CRM incluido",
    "Control manual cuando quieras",
  ].map((item) => (
    <div key={item} className="flex items-center gap-3">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400 text-black">
        <Check className="h-4 w-4" />
      </span>

      {item}
    </div>
  ))}
</div>

<div className="mt-8 flex items-center gap-4">
  <div className="flex -space-x-3">
    {["M", "A", "L", "C", "J"].map((letter, index) => (
      <div
        key={index}
        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#050812] bg-emerald-400 text-sm font-black text-slate-950 shadow-lg shadow-emerald-500/20"
      >
        {letter}
      </div>
    ))}
  </div>

  <div>
    <div className="text-xl tracking-tight text-yellow-400">
      ★★★★★
    </div>

    <p className="text-sm text-slate-400">
      Más de 200 negocios ya confían en LeadFlow
    </p>
  </div>
</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative"
      >
        <div className="absolute -inset-6 rounded-[3rem] bg-emerald-400/10 blur-3xl" />
        <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#080C18]">
            <img
              src={appShots.dashboard}
              alt="Dashboard LeadFlow"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="absolute -bottom-8 left-4 max-w-[330px] rounded-3xl border border-emerald-400/20 bg-[#07111D]/95 p-4 shadow-2xl shadow-emerald-400/10 backdrop-blur-xl md:left-10">
          <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
            <MessageCircle className="h-4 w-4" /> WhatsApp IA
          </div>
          <p className="text-sm leading-6 text-slate-200">
            “Tengo hueco mañana a las 18:00 con Laura. ¿Quieres que te lo confirme?”
          </p>
        </div>
      </motion.div>
    </section>
  );
}
function TrustedStrip() {
  const integrations = [
    {
      name: "WhatsApp",
      logo: "/logos/whatsapp.png",
    },
    {
      name: "Google Calendar",
      logo: "/logos/google-calendar.png",
    },
    {
      name: "Stripe",
      logo: "/logos/stripe.png",
    },
    {
      name: "OpenAI",
      logo: "/logos/openai.png",
    },
  ];

  return (
    <section className="border-y border-white/10 bg-white/[0.025] px-5 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center">
        <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.28em] text-slate-500">
          Integrado con tus herramientas favoritas
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-bold text-slate-300 shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.07]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.02]">
  <img
    src={item.logo}
    alt={item.name}
    className={`object-contain opacity-100 ${
      item.name === "WhatsApp"
        ? "h-10 w-10"
        : item.name === "Google Calendar"
        ? "h-10 w-10"
        : item.name === "OpenAI"
        ? "h-10 w-10"
        : "h-11 w-11"
    }`}
  />
</div>

<span className="text-base font-black text-slate-200">
  {item.name}
</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductShowcase() {
  return (
    <section id="demo" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-400">Demo visual</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Todo tu negocio en un solo panel.
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-400">
          Conversaciones, clientes, reservas, calendario y respuestas automáticas conectadas en una sola experiencia.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <ShowcaseCard title="Panel principial" image={appShots.conversations} />
        <ShowcaseCard title="Clientes y citas" image={appShots.clients} />
        <div className="lg:col-span-2">
          <ShowcaseCard title="Calendario automático" image={appShots.calendar} large />
        </div>
      </div>
    </section>
  );
}

function ShowcaseCard({ title, image, large = false }: { title: string; image: string; large?: boolean }) {
  return (
    <div className="group rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-4 shadow-2xl shadow-black/25 transition hover:-translate-y-1 hover:border-emerald-400/30">
      <div className="mb-4 flex items-center justify-between px-2 pt-1">
        <h3 className="text-xl font-black">{title}</h3>
        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-300">LeadFlow</span>
      </div>
      <div className={`overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080C18] ${large ? "max-h-[560px]" : "max-h-[420px]"}`}>
        <img src={image} alt={title} className="w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    ["01", "Conecta WhatsApp", "Vincula el número de tu negocio para empezar a recibir mensajes."],
    ["02", "Configura tu negocio", "Añade servicios, horarios, profesionales, FAQs y tono de respuesta."],
    ["03", "LeadFlow trabaja", "La IA responde, clasifica clientes y agenda citas automáticamente."],
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="grid gap-5 md:grid-cols-3">
        {steps.map(([num, title, text]) => (
          <div key={num} className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
            <p className="text-sm font-black text-emerald-400">{num}</p>
            <h3 className="mt-5 text-2xl font-black">{title}</h3>
            <p className="mt-3 leading-7 text-slate-400">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EmotionalSection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-24 md:px-8 lg:grid-cols-2">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-emerald-400/10 to-white/[0.03] p-5 shadow-2xl shadow-black/30">
        <img
          src={appShots.human}
          alt="Dueño de negocio usando LeadFlow"
          className="h-[520px] w-full rounded-[2rem] object-cover"
        />
        <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/10 bg-[#06101D]/90 p-5 backdrop-blur-xl">
          <p className="text-sm font-black text-emerald-300">Cliente nuevo</p>
          <p className="mt-2 text-lg font-black">“Quiero reservar para mañana por la tarde”</p>
          <p className="mt-2 text-sm text-slate-300">LeadFlow propone horario y deja la cita lista para confirmar.</p>
        </div>
      </div>

      <div>
        <p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-400">Resultado real</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Menos mensajes perdidos. Más citas cerradas.
        </h2>
        <p className="mt-6 text-lg leading-8 text-slate-400">
          Cuando un cliente escribe, LeadFlow responde en segundos. No espera, no se olvida y no deja conversaciones importantes sin atender.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Stat value="24/7" label="Atención" />
          <Stat value="IA" label="Respuestas" />
          <Stat value="CRM" label="Clientes" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
      <p className="text-3xl font-black text-emerald-300">{value}</p>
      <p className="mt-1 text-sm font-bold text-slate-400">{label}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-400">Funciones</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Una IA recepcionista para tu negocio.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 transition hover:border-emerald-400/30 hover:bg-emerald-400/[0.06]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{feature.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-5xl px-5 py-24 md:px-8">
      <div className="rounded-[2.5rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/12 to-white/[0.035] p-6 shadow-2xl shadow-emerald-400/10 md:p-10">
        <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-400">LeadFlow Pro</p>
            <h2 className="mt-4 text-4xl font-black md:text-6xl">7 días gratis.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Empieza sin riesgo. Después, 79€ el primer mes y luego 129€/mes.
            </p>
            <div className="mt-7 space-y-3">
              {[
                "WhatsApp conectado",
                "IA conversacional",
                "Agenda automática",
                "CRM de clientes",
                "Soporte prioritario",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 font-bold text-slate-200">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400 text-black"><Check className="h-4 w-4" /></span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#07101D] p-6">
            <p className="text-center text-sm font-bold text-slate-400">Prueba gratuita</p>
            <p className="mt-3 text-center text-6xl font-black">0€</p>
            <p className="mt-2 text-center text-slate-400">No se cobra nada hoy</p>
            <a
              href={`${APP_URL}/login`}
              className="mt-7 flex w-full items-center justify-center rounded-2xl bg-emerald-400 px-6 py-4 font-black text-black transition hover:bg-emerald-300"
            >
              Empezar prueba gratis
            </a>
            <p className="mt-4 text-center text-xs font-bold text-emerald-300">Cancela cuando quieras</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20 md:px-8">
      <h2 className="mb-8 text-4xl font-black tracking-tight md:text-5xl">Preguntas frecuentes</h2>
      <div className="grid gap-4">
        {faqs.map((faq) => (
          <div key={faq.q} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <h3 className="text-lg font-black">{faq.q}</h3>
            <p className="mt-2 leading-7 text-slate-400">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-10 pt-20 md:px-8">
      <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-emerald-400/[0.08] p-10 text-center shadow-2xl shadow-black/30 md:p-16">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-400 text-black shadow-lg shadow-emerald-400/30">
          <Zap className="h-8 w-8" />
        </div>
        <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
          Empieza a responder clientes automáticamente hoy.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          Prueba LeadFlow gratis durante 7 días y descubre cuánto tiempo puede ahorrar tu negocio.
        </p>
        <a
          href={`${APP_URL}/login`}
          className="mt-8 inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-400 px-8 py-4 text-base font-black text-black transition hover:bg-emerald-300"
        >
          Probar gratis 7 días <ArrowRight className="h-5 w-5" />
        </a>
      </div>

      <footer className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-slate-500 md:flex-row">
        <p>© 2026 LeadFlow. Todos los derechos reservados.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white">Privacidad</a>
          <a href="#" className="hover:text-white">Términos</a>
          <a href="#" className="hover:text-white">Contacto</a>
        </div>
      </footer>
    </section>
  );
}
