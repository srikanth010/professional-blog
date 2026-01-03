import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowRight, ExternalLink, Code2, Globe, Cpu } from 'lucide-react';
import ContactForm from './components/ContactForm';

export default function ProfessionalBlog() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-24">

      {/* 1. HERO INTRODUCTION */}
<section className="space-y-8 pt-8">
  <div className="space-y-4">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
      </span>
      Sr. AEM Tech Lead
    </div>
    
    <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
      Architecting <span className="text-blue-600">Enterprise</span> <br />
      Digital Experiences.
    </h1>
    
    <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
      I’m a Senior AEM Developer and Tech Lead with over **7 years of experience** delivering high-scale solutions for Global 500 companies. I specialize in 
      modernizing legacy CMS ecosystems into high-performance, headless architectures.
    </p>
  </div>

  <div className="flex flex-wrap gap-4 items-center">
    <Link 
      href="#contact" 
      className="bg-slate-900 text-white px-8 py-4 rounded-2xl hover:bg-blue-600 transition-all font-bold shadow-lg shadow-slate-200"
    >
      Discuss a Project
    </Link>
    
    <div className="flex items-center gap-6 ml-4">
      <Link href="https://www.linkedin.com/in/srikanth-kanteti-94100317a/" className="text-slate-400 hover:text-blue-600 transition">
        <Linkedin size={24} />
      </Link>
      <Link href="https://github.com/srikanth010" className="text-slate-400 hover:text-slate-900 transition">
        <Github size={24} />
      </Link>
    </div>
  </div>

  {/* Trust Bar / Logos - Optional but highly professional */}
  <div className="pt-8 border-t border-slate-100">
    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Trusted at scale by</p>
    <div className="flex flex-wrap gap-x-8 gap-y-4 opacity-50 grayscale hover:grayscale-0 transition-all">
       <span className="font-bold text-xl text-slate-700">WYNDHAM</span>
       <span className="font-bold text-xl text-slate-700">CISCO</span>
       <span className="font-bold text-xl text-slate-700">EAST WEST BANK</span>
       <span className="font-bold text-xl text-slate-700">MAARK LLC</span>
       <span className="font-bold text-xl text-slate-700">SKILLVOICE</span>
    </div>
  </div>
</section>
      
      {/* 1. INTRODUCTION */}
     <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="space-y-4">
    <h3 className="text-xl font-bold flex items-center gap-2">
      <Globe className="text-blue-600" /> Enterprise Architecture
    </h3>
    <ul className="text-slate-600 space-y-2 list-disc ml-5">
      <li><strong>AEM as a Cloud Service:</strong> Expert in Cloud Manager pipelines and Dispatcher TTL optimization.</li>
      <li><strong>Global Scale:</strong> Implementing MSM and Live Copy strategies for 50+ locales across Wyndham brands.</li>
      <li><strong>Governance:</strong> Establishing robust OSGi configurations and permission models for distributed authoring teams.</li>
    </ul>
  </div>

  <div className="space-y-4">
    <h3 className="text-xl font-bold flex items-center gap-2">
      <Cpu className="text-purple-600" /> Integration & Modernization
    </h3>
    <ul className="text-slate-600 space-y-2 list-disc ml-5">
      <li><strong>Headless Delivery:</strong> Architecting Content Fragments and GraphQL APIs for decoupled React applications.</li>
      <li><strong>Legacy Migration:</strong> Leading low-downtime migrations from AEM 6.4/6.5 to AEMaaCS.</li>
      <li><strong>Performance:</strong> Achieving 90+ Lighthouse scores on enterprise landing pages via Core Component optimization.</li>
    </ul>
  </div>
</section>

      {/* 2. CORE EXPERTISE (New section for professional context) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ExpertiseCard 
          icon={<Globe className="text-blue-600" />}
          title="AEM Architecture"
          description="Multisite Management (MSM), OSGi services, and Dispatcher optimization."
        />
        <ExpertiseCard 
          icon={<Code2 className="text-purple-600" />}
          title="Modern Frontend"
          description="Integrating React, Next.js, and Tailwind with AEM Headless & SPA Editor."
        />
        <ExpertiseCard 
          icon={<Cpu className="text-orange-600" />}
          title="Enterprise CI/CD"
          description="Cloud Manager, Jenkins, and automated testing for Adobe Managed Services."
        />
      </section>

      {/* 3. EXPERIENCE SECTION */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold text-slate-900">Experience</h2>
        <div className="relative border-l border-slate-200 ml-3 pl-8 space-y-12">
          
          <ExperienceItem 
            company="Wyndham Hotels & Resorts" 
            role="Sr. AEM Tech Lead" 
            period="Apr 2022 — Present"
            description="Leading architectural decisions for global hospitality platforms. Managing large-scale AEM implementations and cross-functional engineering teams."
          />
          
          <ExperienceItem 
            company="East West Bank" 
            role="Sr. Applications/AEM Developer" 
            period="Mar 2021 — Apr 2022"
            description="Modernized banking portals with AEM 6.5. Focused on secure component development and API integrations."
          />

          <ExperienceItem 
            company="MAARK" 
            role="AEM Developer" 
            period="Dec 2019 — Feb 2021"
            description="Developed custom AEM components and workflows for diverse client portfolios in a high-paced agency environment."
          />

          <ExperienceItem 
            company="Cisco" 
            role="AEM Developer (Contract)" 
            period="Dec 2018 — Dec 2019"
            description="Collaborated on enterprise-level site migrations and template development within the Cisco digital ecosystem."
          />
        </div>
      </section>

      {/* 4. CONTACT */}
      <section id="contact" className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-slate-900">Let&apos;s build something exceptional</h2>
    <p className="text-slate-600 text-lg leading-relaxed">
      Whether you are looking for AEM architectural guidance, a technical lead for a site migration, or a full-stack expert, I&apos;m happy to discuss your goals.
    </p>
    <div className="space-y-4">
      <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Response Time</p>
      <p className="text-slate-700">Typically within 24–48 hours</p>
    </div>
  </div>

  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100">
    <ContactForm />
  </div>
</section>

    </main>
  );
}

{/* Helper Components */}

function ExpertiseCard({ icon, title, description }: any) {
  return (
    <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition">
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}

function ExperienceItem({ company, role, period, description }: any) {
  return (
    <div className="relative">
      <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-white border-2 border-blue-600" />
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{role}</h3>
          <p className="text-blue-600 font-medium">{company}</p>
        </div>
        <span className="text-slate-400 text-sm font-medium mt-1 md:mt-0">{period}</span>
      </div>
      <p className="text-slate-600 max-w-2xl">{description}</p>
    </div>
  );
}