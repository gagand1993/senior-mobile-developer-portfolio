import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Phone,
  Smartphone
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Navbar } from "@/components/navbar";
import { SectionHeading } from "@/components/section-heading";
import {
  achievements,
  contactItems,
  experiences,
  heroBadges,
  projects,
  skillGroups
} from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_20%_0%,rgba(23,183,166,0.16),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(244,109,67,0.12),transparent_22%),#071014] light:bg-[radial-gradient(circle_at_20%_0%,rgba(23,183,166,0.15),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(244,109,67,0.10),transparent_22%),#f7fbfc]">
      <Navbar />

      <section id="home" className="section-shell section-anchor grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-450/30 bg-teal-450/10 px-4 py-2 text-sm font-bold text-teal-450">
            <Smartphone size={16} />
            Android + Flutter Specialist
          </div>
          <h1 className="hero-title premium-gradient-text max-w-4xl font-black">
            Gagandeep Singh
          </h1>
          <p className="mt-5 text-2xl font-bold text-slate-200 sm:text-3xl light:text-slate-800">
            Senior Mobile Application Developer
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300 light:text-slate-600">
            Android & Flutter Developer with 8+ years of experience building scalable, secure, and high-performance mobile applications.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary focus-ring">
              View Projects
              <ArrowDown size={16} />
            </a>
            <a href="/Gagan.pdf" download className="btn-secondary focus-ring">
              <Download size={16} />
              Download Resume
            </a>
            <a href="#contact" className="btn-ghost focus-ring">
              <Mail size={16} />
              Contact Me
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {heroBadges.map((badge) => (
              <span key={badge} className="badge">{badge}</span>
            ))}
          </div>
        </div>

        <div className="hero-showcase relative mx-auto w-full max-w-lg animate-float">
          <div className="hero-device glass rounded-lg">
            <div className="hero-device__topbar">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-ember" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-teal-450" />
              </div>
              <span>mobile_architecture.kt</span>
            </div>

            <div className="hero-code">
              <p><span className="code-purple">class</span> <span className="code-blue">SeniorMobileDeveloper</span> {"{"}</p>
              <p className="indent"><span className="code-purple">val</span> platforms = listOf(<span className="code-green">"Android"</span>, <span className="code-green">"Flutter"</span>)</p>
              <p className="indent"><span className="code-purple">val</span> architecture = <span className="code-green">"Clean Architecture"</span></p>
              <p className="indent"><span className="code-purple">val</span> mindset = <span className="code-green">"Performance + Quality"</span></p>
              <br />
              <p className="indent"><span className="code-purple">fun</span> <span className="code-blue">ship</span>() = scalableApps(</p>
              <p className="indent-2">secure = <span className="code-orange">true</span>,</p>
              <p className="indent-2">maintainable = <span className="code-orange">true</span>,</p>
              <p className="indent-2">userFocused = <span className="code-orange">true</span></p>
              <p className="indent">)</p>
              <p>{"}"}</p>
            </div>

            <div className="hero-stack">
              <span>Flutter</span>
              <span>Kotlin</span>
              <span>Jetpack Compose</span>
            </div>
          </div>

          <div className="hero-metrics">
            <div>
              <strong>20+</strong>
              <span>apps delivered</span>
            </div>
            <div>
              <strong>8+</strong>
              <span>years experience</span>
            </div>
            <div>
              <strong>4-6</strong>
              <span>member teams led</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell section-anchor py-16">
        <SectionHeading eyebrow="About" title="Senior mobile engineering with product-grade delivery" />
        <div className="glass mx-auto max-w-5xl rounded-lg p-6 sm:p-8">
          <p className="text-lg leading-9 text-slate-200 light:text-slate-700">
            Senior Mobile Application Developer with 8+ years of experience in Android, Flutter, and React Native development. Skilled in building scalable mobile apps using Kotlin, Java, Jetpack Compose, Compose Multiplatform (CMP), Kotlin Multiplatform (KMP), Flutter, Dart, MVVM, MVI, Clean Architecture, BLoC, GetX, Retrofit, Dio, Room, Hilt, Firebase, and third-party SDK integrations. Experienced in performance optimization, team leadership, Agile development, app deployment, and end-to-end mobile product delivery.
          </p>
        </div>
      </section>

      <section id="skills" className="section-shell section-anchor py-16">
        <SectionHeading eyebrow="Skills" title="Modern mobile stack, organized for scale" description="A hands-on toolkit across native Android, Flutter, app architecture, SDK integrations, databases, and release workflows." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <div key={title} className="glass card-hover rounded-lg p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-teal-450/12 text-teal-450">
                  <Icon size={22} />
                </span>
                <h3 className="text-lg font-black text-white light:text-slate-950">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section-shell section-anchor py-16">
        <SectionHeading eyebrow="Experience" title="Timeline of senior mobile delivery" />
        <div className="relative mx-auto max-w-5xl">
          <div className="timeline-line absolute left-4 top-0 hidden h-full w-px md:block" />
          <div className="grid gap-5">
            {experiences.map((job) => (
              <article key={`${job.company}-${job.period}`} className="relative pl-0 md:pl-12">
                <span className="absolute left-[9px] top-6 hidden h-3 w-3 rounded-full bg-teal-450 ring-8 ring-teal-450/10 md:block" />
                <div className="glass rounded-lg p-5 sm:p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-black text-white light:text-slate-950">{job.company}</h3>
                      <p className="mt-1 font-semibold text-teal-450">{job.role}</p>
                    </div>
                    <span className="badge w-fit">{job.period}</span>
                  </div>
                  <ul className="mt-5 grid gap-2 text-sm leading-6 text-slate-300 light:text-slate-600">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell section-anchor py-16">
        <SectionHeading eyebrow="Projects" title="Selected app work" description="Production-minded mobile experiences across health tech, travel, marketplaces, location services, and secure document workflows." />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="glass card-hover flex min-h-[300px] flex-col rounded-lg p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-black text-white light:text-slate-950">{project.title}</h3>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-ember/12 text-ember">
                  <Smartphone size={21} />
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300 light:text-slate-600">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="badge">{tech}</span>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                {project.actions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    target={action.href.startsWith("http") ? "_blank" : undefined}
                    rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                    className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-teal-450/60 hover:text-teal-450 light:border-slate-200 light:text-slate-700"
                  >
                    {action.label}
                    <ArrowUpRight size={15} />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionHeading eyebrow="Achievements" title="Built for delivery, leadership, and scale" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map(({ label, text, icon: Icon }) => (
            <div key={label} className="glass rounded-lg p-5">
              <Icon className="mb-5 text-teal-450" size={26} />
              <p className="text-2xl font-black text-white light:text-slate-950">{label}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300 light:text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell section-anchor py-16">
        <SectionHeading eyebrow="Contact" title="Let’s build the next reliable mobile product" description="Available for senior mobile development, Flutter and Android architecture, team leadership, and production app delivery." />
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="grid gap-4">
            {contactItems.map(({ label, value, href, icon: Icon }) => (
              <a key={label} href={href} className="glass card-hover focus-ring flex items-center gap-4 rounded-lg p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-teal-450/12 text-teal-450">
                  <Icon size={21} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-slate-400 light:text-slate-500">{label}</span>
                  <span className="block break-words text-base font-black text-white light:text-slate-950">{value}</span>
                </span>
              </a>
            ))}
            <div className="glass rounded-lg p-5">
              <div className="flex gap-3 text-sm leading-6 text-slate-300 light:text-slate-600">
                <MapPin className="mt-1 shrink-0 text-ember" size={18} />
                <p>Based in Yamunanagar, Haryana, India. Open to remote product teams and senior mobile consulting engagements.</p>
              </div>
              <div className="mt-3 flex gap-3 text-sm leading-6 text-slate-300 light:text-slate-600">
                <Phone className="mt-1 shrink-0 text-ember" size={18} />
                <p>Phone: +91 8053212548</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 light:border-slate-200">
        <div className="section-shell flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Gagandeep Singh. Senior Mobile Application Developer.</p>
          <a href="mailto:gagand1993@gmail.com" className="font-bold text-teal-450">gagand1993@gmail.com</a>
        </div>
      </footer>
    </main>
  );
}
