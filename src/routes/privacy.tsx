import { motion } from "framer-motion";
import { Shield, Lock, FileText, Cookie, UserCheck, Mail } from "lucide-react";
import Blobs from "@/components/Blobs";
import { usePageMeta } from "@/lib/use-page-meta";

const sections = [
  {
    icon: FileText,
    title: "1. Information We Collect",
    text: "To provide a better learning experience, Edvanz may collect personal information such as your full name, email address, phone number, billing information, and optional professional details. We also collect learning and usage data including login activity, course progress, assessment results, device and browser information, and IP address. We use cookies and similar tracking technologies to improve platform performance, remember your preferences, track learning progress, and enhance your overall experience. You can manage cookie preferences through your browser settings at any time.",
  },
  {
    icon: UserCheck,
    title: "2. How We Use Your Information",
    text: "Your information is used to create and manage your account, deliver courses and certifications, improve platform performance, provide customer support, send important updates and learning notifications, and comply with applicable legal and regulatory requirements.",
  },
  {
    icon: Shield,
    title: "3. Information Sharing",
    text: "Edvanz does not sell or rent your personal information. We may share your data only with trusted service providers, payment processing partners, analytics and platform tools, or legal authorities when required by applicable law.",
  },
  {
    icon: Lock,
    title: "4. Data Security",
    text: "Your information is protected using industry-standard security measures, encrypted storage, and secure systems. Access to personal information is restricted to authorised personnel who require it to provide our services.",
  },
  {
    icon: FileText,
    title: "5. Data Retention",
    text: "We retain your information only for as long as necessary to provide our services, maintain records, comply with legal obligations, resolve disputes, and improve your learning experience.",
  },
  {
    icon: UserCheck,
    title: "6. Your Privacy Rights",
    text: "Depending on your location and applicable laws, you may have the right to access your personal information, update or correct inaccurate data, request deletion of your data, withdraw consent where applicable, and request a copy of the information we hold about you.",
  },
  {
    icon: Shield,
    title: "7. External Links",
    text: "Our platform may contain links to third-party websites for your convenience. Edvanz is not responsible for the privacy practices, security, or content of external websites, and we encourage you to review their privacy policies before sharing personal information.",
  },
  {
    icon: UserCheck,
    title: "8. Children's Privacy",
    text: "Edvanz is intended for individuals aged 18 years and above. We do not knowingly collect personal information from children. If we become aware that such information has been collected, we will take reasonable steps to delete it promptly.",
  },
  {
    icon: Mail,
    title: "9. Policy Updates",
    text: "We may update this Privacy Policy from time to time to reflect changes in our services, technology, business practices, or legal requirements. Any updates will be published on this page, and continued use of the platform indicates your acceptance of the revised policy.",
  },
  {
    icon: Mail,
    title: "10. Contact Us",
    text: "If you have any questions regarding this Privacy Policy, your personal information, or your privacy rights, please contact the Edvanz Support Team at hello@edvanz.com. We are committed to keeping your information secure while providing a safe, trusted, and high-quality learning experience.",
  },
];
function PrivacyPage({ onNavigate }: { onNavigate?: (page: import("@/types/nav").Page) => void } = {}) {
  usePageMeta({
    title: "Privacy Policy — Edvanz LMS",
    description:
      "Read Edvanz's privacy policy: how we handle your data, cookies, and user rights on our LMS platform.",
    path: "/privacy",
  });
  return (
    <>
      <section className="relative overflow-hidden py-20 lg:py-24">
        <Blobs />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="mx-auto h-12 w-12 text-primary" />
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-5xl sm:text-6xl font-bold tracking-tight"
          >
            Privacy <span className="text-gradient">Policy</span>
          </motion.h1>
          <p className="mt-5 text-lg text-muted-foreground">
          At Edvanz, we are committed to protecting your personal information and maintaining your trust. This Privacy Policy explains how we collect, use, store, and protect your data when you access our platform, courses, and services.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Last updated:{" "}
            {new Date().toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 grid gap-5">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glow-card rounded-2xl p-7 flex gap-5"
            >
              <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{s.title}</h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-soft p-10 text-center">
            <h3 className="text-2xl font-bold">By using Edvanz, you agree to this policy.</h3>
            <p className="mt-3 text-muted-foreground">
              We may update it from time to time. Continued use means you accept any changes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default function PrivacyPageWrapper({
  onNavigate,
}: { onNavigate?: (page: import("@/types/nav").Page) => void } = {}) {
  return <PrivacyPage onNavigate={onNavigate} />;
}
