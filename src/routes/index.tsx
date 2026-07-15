import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Code2,
  Smartphone,
  Briefcase,
  Palette,
  Cpu,
  Brain,
  BookOpen,
  Globe,
  Users,
  Zap,
  Layers,
  Rocket,
  Star,
  ArrowRight,
  Award,
  Clock,
  TrendingUp,
  MessageCircle,
  DollarSign,
  Rocket as RocketIcon,
  ChevronDown,
  ChevronUp,
    GraduationCap,
} from "lucide-react";
import Blobs from "@/components/Blobs";
import EnquiryForm from "@/components/EnquiryForm";
import { usePageMeta } from "@/lib/use-page-meta";

interface FieldItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  color: string;
  description: string;
}

const fields: FieldItem[] = [
  {
    icon: Brain,
    label: "Data Analytics",
    color: "from-violet-500 to-indigo-500",
    description:
      "Analyze business data, create dashboards, and generate insights using Excel, SQL, Power BI, and Python.",
  },
  {
    icon: Brain,
    label: "Artificial Intelligence",
    color: "from-violet-500 to-indigo-500",
    description:
      "Learn data-driven systems, automation, and predictive models through advanced online AI and machine learning courses.",
  },
    {
    icon: Cpu,
    label: "DevOps",
    color: "from-sky-500 to-blue-500",
    description:
      "Learn Docker, Kubernetes, CI/CD, AWS, Azure, Linux, Jenkins, and automation for modern software delivery.",
  },
    {
    icon: Brain,
    label: "Data Science",
    color: "from-violet-500 to-indigo-500",
    description:
      "Master statistics, machine learning, Python, visualization, and real-world data science projects.",
  },
  {
    icon: Code2,
    label: "React.JS",
    color: "from-blue-500 to-indigo-500",
    description:
      "Master modern React.js, Hooks, Context API, routing, state management, and build scalable web applications.",
  },
   {
    icon: TrendingUp,
    label: "Cybersecurity",
    color: "from-blue-500 to-cyan-500",
    description:
      "Learn ethical hacking, penetration testing, network security, cloud security, and cyber defense practices.",
  },
   {
    icon: Code2,
    label: "Web Development",
    color: "from-blue-500 to-indigo-500",
    description:
      "Learn to build websites with our curated web development courses from basic frontend to full-stack with real-world projects.",
  },
  {
    icon: Code2,
    label: "Java - Core & Advance",
    color: "from-blue-500 to-indigo-500",
    description:
      "Learn Core Java, Advanced Java, JDBC, Servlets, Spring Boot, REST APIs, and enterprise application development.",
  },
  {
    icon: Smartphone,
    label: "App Development",
    color: "from-indigo-500 to-purple-500",
    description:
      "Design and deploy software applications for iOS, Android, and computers with application development courses.",
  },
  {
    icon: Smartphone,
    label: "React Native",
    color: "from-indigo-500 to-purple-500",
    description:
      "Build cross-platform Android and iOS mobile applications using React Native with real-world projects.",
  },
  {
    icon: Briefcase,
    label: "Business & Marketing",
    color: "from-purple-500 to-fuchsia-500",
    description:
      "Explore branding strategies for business promotions, growth, and marketing with our best online marketing courses.",
  },
  {
    icon: Palette,
    label: "Design & Creativity",
    color: "from-pink-500 to-purple-500",
    description:
      "Expert online graphic design courses to transform ideas into visual storytelling, digital media, and content creation.",
  },
  {
    icon: Cpu,
    label: "Information Technology",
    color: "from-sky-500 to-blue-500",
    description:
      "Build digital skills in software, systems, networking, cybersecurity, cloud, and more with expert-led online IT courses.",
  },


 
  {
    icon: BookOpen,
    label: "Academic Learning",
    color: "from-fuchsia-500 to-purple-500",
    description:
      "Comprehensive online courses with certificates designed to strengthen subject knowledge and practical understanding.",
  },
  {
    icon: GraduationCap,
    label: "Career Roadmaps",
    color: "from-emerald-500 to-teal-500",
    description:
      "From beginner to professional, we guide your career journey through structured training programmes and industry-relevant skills.",
  },
];
const reasons = [
  {
    icon: Globe,
    title: "Flexible Learning",
    text: "No fixed schedule. Pick up a lesson when you have 20 minutes, or binge a whole section on a Sunday. It's up to you.",
  },
  {
    icon: Layers,
    title: "Every Field in One Place",
    text: "Tech, design, business, AI, you don't need five different platforms. It's all here.",
  },
  {
    icon: Sparkles,
    title: "Simplified Experiences",
    text: "No confusing interfaces or complicated setups. Just open a lesson and go.",
  },
  {
    icon: MessageCircle,
    title: "Real-time Support",
    text: "Got stuck? Our experts are here to guide you through your journey. You're not learning alone.",
  },
  {
    icon: BookOpen,
    title: "Structured Materials",
    text: "Notes, lessons, and resources are laid out clearly so you can find what you need without digging around.",
  },
  {
    icon: Rocket,
    title: "Skills that Matter",
    text: "Every course is built around what's actually relevant in today's job market and industries.",
  },
];

const stats = [
  { value: "100+", label: "Learning Topics" },
  { value: "10+", label: "categories" },
  { value: "∞", label: "Endless ways to grow" },
  { value: "100%", label: "Advanced E-learning" },
];

const experiences = [
  {
    icon: Brain,
    title: "Smart Learning",
    text: "Structured lessons designed for clear and flexible learning experiences.",
  },
  {
    icon: Zap,
    title: "Interactive Experience",
    text: "Practical activities and projects that build real-world experience.",
  },
  {
    icon: Award,
    title: "Educational Innovation",
    text: "Industry-focused learning connected to practical skills and applications.",
  },
  {
    icon: TrendingUp,
    title: "Digital Growth",
    text: "Explore new skills and learning opportunities with every course.",
  },
];

const testimonials = [
  {
    text: "Edvanz made it so easy to switch from design into AI. The structure is incredible.",
    role: "Aspiring AI Designer",
  },
  {
    text: "I love that I can explore web dev and business courses in the same place.",
    role: "Career Switcher",
  },
  {
    text: "The interface is so clean — I actually look forward to opening lessons.",
    role: "Lifelong Learner",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] },
};

export default function HomePage({
  onNavigate,
}: { onNavigate?: (page: import("@/types/nav").Page) => void } = {}) {
  usePageMeta({
    title: "Edvanz LMS — Beyond Learning with Expert-Led Courses",
    description:
      "Edvanz is a modern LMS platform where anyone can learn or teach across web development, AI, design, business, and more. Become an instructor and earn.",
    path: "/",
  });

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const checkMediaQuery = () => {
      setIsDesktop(window.matchMedia("(min-width: 1024px)").matches);
    };
    checkMediaQuery();
    window.addEventListener("resize", checkMediaQuery);
    return () => window.removeEventListener("resize", checkMediaQuery);
  }, []);

  const visibleLimit = isDesktop ? 6 : 3;
  const displayedFields = isExpanded ? fields : fields.slice(0, visibleLimit);

  const navigate = (page: "about" | "contact") => {
    if (onNavigate) onNavigate(page);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <Blobs />
        <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
          <div className="grid lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)] gap-10 lg:gap-12 items-center">
            {/* LEFT — copy */}
            <div className="min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] sm:text-xs font-semibold text-primary"
              >
                <RocketIcon className="h-3.5 w-3.5" />
                Learn. Teach. Build
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="mt-5 text-[2.25rem] leading-[1.08] sm:text-5xl lg:text-[3.75rem] xl:text-[4rem] font-bold tracking-tight"
              >
                Edvanz - <span className="text-gradient">Your Way for Modern Learning.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
              >
                Got stuck on where to start your career? Whether you want to learn code, just get better at something, or curious about choosing the right career path that truly makes sense, you are at the right place.
                <span className="block mt-3 text-gradient font-medium">We’ve built Edvanz for you.</span>
                <span className="block mt-2">
                  An advanced online learning platform designed for curious minds to find real courses, gain practical skills, and share knowledge through meaningful experiences.
                </span>
              </motion.p>

              <div className="mt-12 flex justify-start">
                <button
                  onClick={() => onNavigate?.("contact")}
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#4F46E5] px-8 py-4 text-lg font-bold text-white shadow-[0_10px_30px_rgba(109,40,217,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(109,40,217,0.45)] active:scale-95"
                >
                  🚀 Explore Courses • Join Edvanz
                </button>
              </div>
            </div>

            {/* RIGHT — enquiry form */}
            <div className="min-w-0 w-full">
              <EnquiryForm onNavigate={onNavigate} />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT LMS */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="inline-block rounded-full bg-gradient-soft px-4 py-1.5 text-xs font-semibold text-primary">
              A Centralised Learning Hub
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
              Edvanz brings together every field of study into one place <span className="text-gradient">Easy to access and learn.</span>
            </h2>
          </motion.div>

          {/* FIELDS GRID WITH SEE MORE / SEE LESS TOGGLE */}
          <div className="mt-14 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {displayedFields.map((f, i) => (
                <motion.div
                  key={f.label}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.4,
                    delay: isExpanded ? 0 : i * 0.05,
                    layout: { type: "spring", stiffness: 300, damping: 30 },
                  }}
                  className="glow-card rounded-2xl p-6 border border-border bg-card/30 backdrop-blur-sm"
                >
                  <div
                    className={`h-12 w-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-semibold text-lg">{f.label}</h3>
     <p className="mt-2 text-sm leading-6 text-muted-foreground">
  {f.description}
</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background hover:bg-muted text-sm font-medium text-foreground shadow-sm hover:shadow transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span>{isExpanded ? "See Less" : "See More"}</span>
              {isExpanded ? (
                <ChevronUp className="h-4 w-4 text-muted-foreground transition-transform" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* WHY EDVANZ */}
      <section className="relative py-24 bg-gradient-soft overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Learning <span className="text-gradient">that actually fits your life.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              You've got classes, maybe a part-time job, and things pulling your attention everywhere. Edvanz is built around that reality, not against it.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glow-card rounded-2xl p-7"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center">
                  <r.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTOR / EARN */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 sm:p-16 text-white">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -left-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold backdrop-blur">
                  For Instructors
                </span>
                <h2 className="mt-4 text-4xl sm:text-5xl font-bold">Know something worth sharing? Come teach it.</h2>
                <p className="mt-4 text-white/85 text-lg max-w-xl">
                  Edvanz isn't just for learners. If you're a student who's figured something out, a professional with real experience, or a creator with a skill to share, you can build a course and teach it here.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    onClick={() => navigate("contact")}
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-primary hover:scale-[1.03] transition-transform"
                  >
                    Become an Instructor <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, t: "Global Learners", s: "Help learners worldwide through your knowledge and experience." },
                  { icon: DollarSign, t: "Build Authority", s: "Build credibility and grow your professional online presence." },
                  { icon: Sparkles, t: "Advanced Tools", s: "Easy tools to create, manage, and deliver courses smoothly." },
                  { icon: Award, t: "Earn Income", s: "Earn through teaching while growing your personal brand online." },
                ].map((b) => (
                  <div
                    key={b.t}
                    className="rounded-2xl bg-white/15 backdrop-blur p-5 border border-white/20"
                  >
                    <b.icon className="h-6 w-6" />
                    <div className="mt-3 font-semibold">{b.t}</div>
                    <div className="text-sm text-white/80">{b.s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-gradient">{s.value}</div>
                <div className="mt-2 text-sm text-muted-foreground font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold">
              An <span className="text-gradient">experience</span> built for the future
            </h2>
          </motion.div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {experiences.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glow-card rounded-2xl p-6 text-center"
              >
                <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-brand flex items-center justify-center btn-glow">
                  <e.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-5 font-semibold">{e.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Loved by <span className="text-gradient">curious minds</span>
            </h2>
          </motion.div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glow-card rounded-2xl p-7"
              >
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-foreground/90 leading-relaxed">"{t.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-brand" />
                  <div className="text-sm font-semibold text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-12 sm:p-20 text-center text-white">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 70%, white 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <motion.div {...fadeUp} className="relative">
              <Clock className="h-10 w-10 mx-auto opacity-90" />
              <h2 className="mt-4 text-4xl sm:text-6xl font-bold leading-tight">
                Start Your Learning Journey
                <br />
                with Edvanz
              </h2>
              <p className="mt-5 text-lg text-white/85 max-w-2xl mx-auto">
                Step into a smarter, more modern way of learning. Your future starts here.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => navigate("about")}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-primary hover:scale-[1.04] transition-transform btn-glow"
                >
                  Learn Skills That Actually Move You Forward. <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => navigate("contact")}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-7 py-4 text-sm font-semibold backdrop-blur hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}