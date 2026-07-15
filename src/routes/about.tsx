import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Sparkles,
  Code2,
  Smartphone,
  Briefcase,
  Brain,
  Palette,
  Award,
  BookOpen,
  Rocket,
  GraduationCap,
  TrendingUp,
  Lightbulb,
} from "lucide-react";
import Blobs from "@/components/Blobs";
import { usePageMeta } from "@/lib/use-page-meta";

const fields = [
  {
    icon: Briefcase,
    label: "Built for Career Achievers",
    description:
      "Industry-focused learning, expert mentorship, and practical skills that help learners achieve measurable career growth.",
  },
  {
    icon: GraduationCap,
    label: "Learning That Fits Your Life",
    description:
      "Access courses anytime, anywhere, and learn at your own pace while balancing work, studies, and personal life.",
  },
  {
    icon: Rocket,
    label: "Skills for the Future",
    description:
      "Gain in-demand IT, business, design, and technology skills through practical projects and real-world learning.",
  },
  {
    icon: Sparkles,
    label: "Learn with Confidence",
    description:
      "Interactive lessons, structured learning paths, and hands-on projects help learners build confidence and expertise.",
  },
  {
    icon: Award,
    label: "Certification That Adds Value",
    description:
      "Earn industry-recognised certifications that showcase your skills and strengthen your professional profile.",
  },
  {
    icon: TrendingUp,
    label: "Professional Development",
    description:
      "Stay competitive with modern workplace skills, technical expertise, and continuous learning opportunities.",
  },
  {
    icon: BookOpen,
    label: "For Those Who Love to Teach",
    description:
      "Educators and professionals can create impactful learning experiences and reach learners worldwide.",
  },
  {
    icon: Brain,
    label: "Growing Together with Edvanz",
    description:
      "We empower learners and instructors to grow together while building the future of accessible education.",
  },
];
const journey = [
  {
    icon: Lightbulb,
    title: "Learn",
    text: "Explore career-oriented courses designed by industry experts.",
  },
  {
    icon: GraduationCap,
    title: "Build Skills",
    text: "Develop practical knowledge through structured lessons and real-world projects.",
  },
  {
    icon: Award,
    title: "Get Certified",
    text: "Earn valuable certifications that strengthen your professional profile.",
  },
  {
    icon: Rocket,
    title: "Lead Tomorrow",
    text: "Achieve your career goals with future-ready skills and continuous learning.",
  },
];

export default function AboutPage({
  onNavigate,
}: { onNavigate?: (page: import("@/types/nav").Page) => void } = {}) {
  usePageMeta({
    title: "About Edvanz LMS — Our Vision for Modern Education",
    description:
      "Learn about Edvanz: a modern LMS making education accessible across web development, AI, design, business, and beyond.",
    path: "/about",
  });
  return (
    <>
      <section className="relative overflow-hidden py-20 lg:py-28">
        <Blobs />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block rounded-full glass px-4 py-1.5 text-xs font-semibold text-primary"
          >
            About Edvanz
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-5xl sm:text-7xl font-bold tracking-tight"
          >
            Start Your Learning  <span className="text-gradient">Journey with Edvanz</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
          >
           Edvanz is a modern online platform that helps learners build knowledge, develop skills, and achieve career success by offering industry-validated certifications, interactive courses, and personalized learning paths. For both beginners and professionals, our flexible and practical learning delivered by experts empowers learners to stand out in their field and seize emerging career opportunities.
          </motion.p>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-soft px-4 py-1.5 text-xs font-semibold text-primary">
              <Target className="h-3.5 w-3.5" /> Our Aim
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
              Quality Education forEvery Learner
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
       At Edvanz, we provide quality education through an innovative e-Learning platform that supports lifelong learning, specialising in structured lessons, practical training, and real-world applications tailored to individual needs. Unlike traditional platforms, we focus on simplifying learning and ensuring immediate relevance, creating engaging, effective, and outcomes-driven learning experiences.   </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { v: "Accessible", l: "For all learners" },
              { v: "Modern", l: "Digital-first design" },
              { v: "Innovative", l: "Future-focused" },
              { v: "Empowering", l: "For instructors too" },
            ].map((b) => (
              <div key={b.v} className="glow-card rounded-2xl p-4 sm:p-6 min-w-0">
                <div className="text-lg sm:text-2xl font-bold text-gradient break-words leading-tight">
                  {b.v}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground break-words">
                  {b.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FIELDS */}
      <section className="py-20 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Educational <span className="text-gradient">fields</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A universe of subjects under one modern roof.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {fields.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glow-card rounded-2xl p-6"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center">
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 font-semibold">{f.label}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
  {f.description}
</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Eye className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
            Our <span className="text-gradient">vision</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
           Edvanz envisions a future where quality education is accessible to everyone. We strive to create a modern learning ecosystem that empowers students, professionals, educators, and organisations through practical learning, industry-focused certifications, and innovative digital experiences that prepare learners for lifelong success.
          </p>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold">
              The Edvanz <span className="text-gradient">journey</span>
            </h2>
          </div>
          <div className="mt-16 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-brand opacity-30" />
            <div className="grid gap-8 lg:grid-cols-4">
              {journey.map((j, i) => (
                <motion.div
                  key={j.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="glow-card rounded-2xl p-7 text-center">
                    <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-brand flex items-center justify-center btn-glow">
                      <j.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="mt-4 text-xs font-semibold text-primary">STEP 0{i + 1}</div>
                    <h3 className="mt-1 text-xl font-semibold">{j.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{j.text}</p>
                  </div>
                </motion.div>
              ))}
              
            </div>
           <div className="mt-10 flex justify-center">
  <button
  onClick={() => onNavigate?.("contact")}
    className="
      group relative inline-flex items-center justify-center
      overflow-hidden rounded-2xl
      bg-gradient-to-r from-primary via-primary to-primary/80
      px-8 py-4
      text-base font-semibold text-white
      shadow-lg shadow-primary/25
      transition-all duration-300 ease-out
      hover:-translate-y-1
      hover:scale-105
      hover:shadow-2xl hover:shadow-primary/40
      active:scale-95
      focus:outline-none focus:ring-4 focus:ring-primary/20
    "
  >
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

    <GraduationCap className="mr-2 h-5 w-5" />

    <span className="relative">
      Explore Learning • Join Edvanz
    </span>
  </button>
</div> 
          </div>
        </div>
      </section>
    </>
  );
}
