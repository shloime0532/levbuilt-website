import Image from "next/image";

/* ─── SVG Icons (inline for zero dependencies) ─── */

function HeartIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function PhoneIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function StarIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ClockIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function InstagramIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function SparklesIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" />
      <path d="M18 14l.75 2.25L21 17l-2.25.75L18 20l-.75-2.25L15 17l2.25-.75L18 14z" />
    </svg>
  );
}

function HomeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function DropletIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

function GridIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function LayoutIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  );
}

function SettingsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function QuoteIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" opacity={0.15}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

function ChevronDownIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function MenuIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function XIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ─── Data ─── */

const services = [
  {
    icon: HomeIcon,
    title: "Complete Bathroom Renovations",
    description:
      "Full-scale bathroom transformations from demolition to final detail. We handle every aspect of your renovation with precision and care.",
  },
  {
    icon: DropletIcon,
    title: "Custom Shower Installations",
    description:
      "Walk-in showers, frameless glass enclosures, rainfall systems, and custom tilework designed to elevate your daily routine.",
  },
  {
    icon: GridIcon,
    title: "Tile Work & Design",
    description:
      "From classic subway to large-format porcelain, we bring your vision to life with expert tile installation and thoughtful pattern design.",
  },
  {
    icon: SparklesIcon,
    title: "Vanity & Countertop Installation",
    description:
      "Custom vanities, natural stone countertops, and undermount sinks — functional elegance that transforms your space.",
  },
  {
    icon: LayoutIcon,
    title: "Bathroom Layout & Design",
    description:
      "Maximize your space with smart layouts. We help you reimagine your bathroom for better flow, storage, and style.",
  },
  {
    icon: SettingsIcon,
    title: "Fixture Upgrades & Modernization",
    description:
      "Modern faucets, lighting, mirrors, and hardware. Small upgrades that make a dramatic difference in look and feel.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We visit your home, listen to your vision, assess the space, and discuss possibilities. No pressure, no obligation.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Custom layout planning and material selection. We help you choose every tile, fixture, and finish to match your style.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Expert craftsmanship with meticulous attention to detail. We keep the jobsite clean and communicate daily progress.",
  },
  {
    number: "04",
    title: "Reveal",
    description:
      "Your dream bathroom, delivered on time and built to last. A final walkthrough ensures every detail meets your expectations.",
  },
];

const whyUsReasons = [
  {
    icon: StarIcon,
    title: "5-Star Google Rating",
    description: "Every project earns our reputation. Our perfect rating reflects the care we put into every bathroom.",
  },
  {
    icon: HeartIcon,
    title: "Built with Heart",
    description: "\"Lev\" means heart. We don't just build bathrooms — we craft spaces your family will love for years.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Lakewood's Trusted Specialist",
    description: "Deep roots in the Lakewood community. We understand your needs, your standards, and your timeline.",
  },
  {
    icon: SparklesIcon,
    title: "Clean, Respectful Jobsites",
    description: "We treat your home like our own. Daily cleanup, protective coverings, and minimal disruption to your family.",
  },
];

const testimonials = [
  {
    name: "R. Goldstein",
    location: "Lakewood, NJ",
    text: "LevBuilt completely transformed our master bathroom. The tile work is absolutely stunning — every grout line is perfect. They finished on schedule and the crew was incredibly respectful of our home.",
    rating: 5,
  },
  {
    name: "M. Schwartz",
    location: "Lakewood, NJ",
    text: "We had a small bathroom that felt cramped and dated. LevBuilt redesigned the layout and it feels twice the size now. The attention to detail on the shower installation was remarkable.",
    rating: 5,
  },
  {
    name: "S. Weinberg",
    location: "Toms River, NJ",
    text: "From the first consultation to the final reveal, the entire experience was professional and stress-free. They kept the jobsite spotless every single day. Our new bathroom looks like it belongs in a magazine.",
    rating: 5,
  },
];

/* ─── Page Component ─── */

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ── Navigation ── */}
      <Nav />

      {/* ── Hero ── */}
      <section id="home" className="relative min-h-[100svh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Luxury bathroom renovation by LevBuilt Constructions"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E1E]/85 via-[#1E1E1E]/60 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-32">
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <StarIcon className="w-4 h-4 text-copper" />
              <span className="text-sm text-white/90 font-medium">5.0 Google Rating</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Bathrooms
              <br />
              <span className="text-copper">Built with Heart</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-md">
              Expert bathroom remodeling in Lakewood, NJ. From concept to completion, every detail matters.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:2016918341"
                className="inline-flex items-center justify-center gap-2 bg-copper hover:bg-copper-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-copper/25 text-base"
              >
                <PhoneIcon className="w-5 h-5" />
                Get a Free Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 border border-white/20 text-base"
              >
                Our Services
                <ChevronDownIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-copper font-semibold text-sm tracking-widest uppercase">What We Do</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              Bathroom Remodeling Expertise
            </h2>
            <p className="mt-4 text-lg text-charcoal/60 leading-relaxed">
              From small upgrades to complete renovations, we bring the same level of care and craftsmanship to every project.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-7 border border-border hover:border-copper/30 transition-all duration-300 hover:shadow-lg hover:shadow-copper/5"
              >
                <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center text-copper group-hover:bg-copper group-hover:text-white transition-all duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-2 text-charcoal/60 leading-relaxed text-[15px]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section id="process" className="py-20 sm:py-28 bg-charcoal relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-copper/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-copper font-semibold text-sm tracking-widest uppercase">How We Work</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Our Process
            </h2>
            <p className="mt-4 text-lg text-white/60 leading-relaxed">
              A straightforward, transparent approach from your first call to your finished bathroom.
            </p>
          </div>

          {/* Process steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Connector line (hidden on mobile, shown on lg) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-copper/20" />
                )}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-copper/10 border border-copper/20 mb-5">
                    <span className="text-2xl font-bold text-copper">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-white/50 leading-relaxed text-[15px]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Craftsmanship image */}
          <div className="mt-16 rounded-2xl overflow-hidden relative aspect-[21/9] max-h-[360px]">
            <Image
              src="/images/craftsmanship.jpg"
              alt="Expert tile installation by LevBuilt Constructions"
              fill
              className="object-cover"
              quality={80}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
              <p className="text-white/90 text-lg sm:text-xl font-semibold">
                Every tile placed with precision.
              </p>
              <p className="text-white/60 text-sm mt-1">
                Craftsmanship you can see and feel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why LevBuilt ── */}
      <section id="why-us" className="py-20 sm:py-28 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — text */}
            <div>
              <span className="text-copper font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
                Why Lakewood Trusts LevBuilt
              </h2>
              <p className="mt-4 text-lg text-charcoal/60 leading-relaxed">
                We are not a big corporate contractor. We are a dedicated team that treats every bathroom like it is our own home. That personal touch is what sets us apart.
              </p>

              <div className="mt-10 space-y-6">
                {whyUsReasons.map((reason) => (
                  <div key={reason.title} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center text-copper">
                      <reason.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal">{reason.title}</h3>
                      <p className="mt-1 text-charcoal/60 text-[15px] leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — CTA card */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-border shadow-sm">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-copper/10 mb-5">
                  <PhoneIcon className="w-7 h-7 text-copper" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal">Free In-Home Consultation</h3>
                <p className="mt-3 text-charcoal/60 leading-relaxed">
                  Ready to transform your bathroom? Call us for a free, no-obligation consultation. We will visit your home, discuss your vision, and provide a detailed estimate.
                </p>
                <a
                  href="tel:2016918341"
                  className="mt-8 inline-flex items-center justify-center gap-2 bg-copper hover:bg-copper-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-copper/25 w-full text-lg"
                >
                  <PhoneIcon className="w-5 h-5" />
                  (201) 691-8341
                </a>
                <p className="mt-4 text-sm text-charcoal/40">
                  Mon-Thu 8am-6pm &middot; Fri 8am-1pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-copper font-semibold text-sm tracking-widest uppercase">Testimonials</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-charcoal/60 leading-relaxed">
              Our work speaks for itself — but our clients say it even better.
            </p>
          </div>

          {/* Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-7 border border-border hover:border-copper/30 transition-all duration-300 hover:shadow-lg hover:shadow-copper/5 relative"
              >
                <QuoteIcon className="w-10 h-10 text-copper absolute top-6 right-6" />
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-copper" />
                  ))}
                </div>
                <p className="text-charcoal/70 leading-relaxed text-[15px] mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-charcoal">{testimonial.name}</p>
                  <p className="text-sm text-charcoal/50">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / CTA ── */}
      <section id="contact" className="py-20 sm:py-28 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-copper rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-copper rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-copper font-semibold text-sm tracking-widest uppercase">Get Started</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Ready for Your Dream Bathroom?
            </h2>
            <p className="mt-4 text-lg text-white/60 leading-relaxed">
              Every great bathroom starts with a conversation. Call us today for a free consultation — we would love to hear about your project.
            </p>

            <a
              href="tel:2016918341"
              className="mt-8 inline-flex items-center justify-center gap-3 bg-copper hover:bg-copper-dark text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-copper/25 text-lg"
            >
              <PhoneIcon className="w-6 h-6" />
              (201) 691-8341
            </a>

            {/* Contact details grid */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPinIcon className="w-5 h-5 text-copper" />
                </div>
                <div>
                  <p className="text-white/90 font-medium">Service Area</p>
                  <p className="text-white/50 text-sm">Lakewood &amp; Ocean County, NJ</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <ClockIcon className="w-5 h-5 text-copper" />
                </div>
                <div>
                  <p className="text-white/90 font-medium">Hours</p>
                  <p className="text-white/50 text-sm">Mon-Thu 8-6 &middot; Fri 8-1</p>
                  <p className="text-white/50 text-sm">Sat-Sun Closed</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <a
                  href="https://www.instagram.com/levbuilt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-copper/20 hover:border-copper/30 transition-all duration-300"
                >
                  <InstagramIcon className="w-5 h-5 text-copper" />
                </a>
                <div>
                  <p className="text-white/90 font-medium">Follow Us</p>
                  <a
                    href="https://www.instagram.com/levbuilt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-copper hover:text-copper-light text-sm transition-colors"
                  >
                    @levbuilt
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#2A2A2A] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-white.png"
                alt="LevBuilt Constructions"
                width={120}
                height={40}
                className="h-8 w-auto opacity-80"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-white/40">
              <a href="tel:2016918341" className="hover:text-copper transition-colors flex items-center gap-1.5">
                <PhoneIcon className="w-4 h-4" />
                (201) 691-8341
              </a>
              <span className="hidden sm:inline">&middot;</span>
              <span>Serving Lakewood &amp; Ocean County, NJ</span>
              <span className="hidden sm:inline">&middot;</span>
              <a
                href="https://www.instagram.com/levbuilt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-copper transition-colors flex items-center gap-1.5"
              >
                <InstagramIcon className="w-4 h-4" />
                @levbuilt
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-white/25">
            &copy; {new Date().getFullYear()} LevBuilt Constructions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─── Nav Component (client-side interactivity needed for mobile menu) ─── */

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/logo.png"
              alt="LevBuilt Constructions"
              width={140}
              height={47}
              className="h-9 sm:h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-charcoal/70 hover:text-copper transition-colors">
              Services
            </a>
            <a href="#process" className="text-sm font-medium text-charcoal/70 hover:text-copper transition-colors">
              Process
            </a>
            <a href="#why-us" className="text-sm font-medium text-charcoal/70 hover:text-copper transition-colors">
              Why Us
            </a>
            <a href="#testimonials" className="text-sm font-medium text-charcoal/70 hover:text-copper transition-colors">
              Reviews
            </a>
            <a
              href="tel:2016918341"
              className="inline-flex items-center gap-2 bg-copper hover:bg-copper-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 text-sm"
            >
              <PhoneIcon className="w-4 h-4" />
              (201) 691-8341
            </a>
          </div>

          {/* Mobile CTA (shown instead of hamburger for simplicity + conversion) */}
          <a
            href="tel:2016918341"
            className="md:hidden inline-flex items-center gap-2 bg-copper hover:bg-copper-dark text-white font-semibold px-4 py-2.5 rounded-lg transition-all duration-300 text-sm"
          >
            <PhoneIcon className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}
