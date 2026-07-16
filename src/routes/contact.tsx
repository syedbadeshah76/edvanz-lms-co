import { motion } from "framer-motion";
import { Mail, Phone, MapPin, LifeBuoy, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import Blobs from "@/components/Blobs";
import { usePageMeta } from "@/lib/use-page-meta";

const cards = [
  { icon: Mail, title: "Email", value: "vaishali@hsbinfotech.com", text: "Reach our team anytime" },
  // { icon: Phone, title: "Phone", value: "+91 97002 39903", text: "Mon–Fri · 9am–6pm" },
  // { icon: MapPin, title: "Address", value: "Global", text: "Built for the world" },
    { icon: MapPin, title: "Address", value: "India", text: "6th Floor, Quadrant I, Cyber Towers, Hitech City, Hyderabad – 500081, Telangana, India `" },
  { icon: MapPin, title: "Address", value: "Saudi Arabia ", text: "(Head Office)Building No: 9353, Office #3, Shaddad Al Fahri, Farazdaq Street, Al Malaz, Riyadh – 12642, KSA" },
  { icon: MapPin, title: "Address", value: "UAE", text: "Unit: C1802-64, Ontario Tower, Business Bay, Dubai, UAE    " },


];

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(150, "Subject is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
});

type FormValues = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof FormValues, string>>;

const initial: FormValues = { name: "", email: "", subject: "", message: "" };

function ContactPage({ onNavigate }: { onNavigate?: (page: import("@/types/nav").Page) => void } = {}) {
  usePageMeta({
    title: "Contact Edvanz LMS — Let's Build the Future of Learning",
    description:
      "Get in touch with the Edvanz team. We'd love to hear from learners, instructors, and partners.",
    path: "/contact",
  });
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const update =
    (k: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [k]: e.target.value }));
      if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
    };
const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const result = contactSchema.safeParse(values);

  if (!result.success) {
    const next: FormErrors = {};

    for (const issue of result.error.issues) {
      const key = issue.path[0] as keyof FormValues;
      if (!next[key]) next[key] = issue.message;
    }

    setErrors(next);

    const first = Object.keys(next)[0];
    if (first) document.getElementById(`field-${first}`)?.focus();

    return;
  }

  setStatus("submitting");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "18296c11-8b4c-43a6-a0e8-cc33d9a18374",

        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,

        from_name: "Edvanz Website",
      }),
    });

    const data = await response.json();

    if (data.success) {
      setStatus("success");
      setValues(initial);
      setErrors({});
    } else {
      setStatus("idle");
      alert(data.message || "Failed to send message.");
    }
  } catch (error) {
    console.error(error);
    setStatus("idle");
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <>
      <section className="relative overflow-hidden py-20 lg:py-28">
        <Blobs />
        <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block rounded-full glass px-4 py-1.5 text-xs font-semibold text-primary"
          >
            Contact Edvanz
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-5xl sm:text-7xl font-bold tracking-tight"
          >
            We'd love to <span className="text-gradient">hear from you</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
          >
       From coding fundamentals to advanced professional expertise, Edvanz is committed to helping professionals and aspiring tech learners develop in-demand skills that boost career prospects, job-readiness, and adaptability in today’s fast-changing world. Whether you're starting your learning journey or aiming for career growth, we're here to support every step toward your success.
Your goals as a learner or professional deserve the right learning partner. Let's achieve them together.

          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="Contact information"
        >
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glow-card rounded-2xl p-6"
            >
              <div
                className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center"
                aria-hidden="true"
              >
                <c.icon className="h-6 w-6 text-white" />
              </div>
              <div className="mt-5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                {c.title}
              </div>
              <div className="mt-1 font-semibold">{c.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{c.text}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20" aria-labelledby="contact-form-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 sm:p-12"
          >
            <h2 id="contact-form-heading" className="text-3xl sm:text-4xl font-bold">
              Send us a message
            </h2>
            <p className="mt-2 text-muted-foreground">We typically respond within 24 hours.</p>

            {status === "success" && (
              <motion.div
                role="status"
                aria-live="polite"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800"
              >
                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <div className="font-semibold">Message sent — thank you!</div>
                  <div className="text-sm text-green-700/90">
                    Our team will reach out within 24 hours.
                  </div>
                </div>
              </motion.div>
            )}

            <form
              onSubmit={onSubmit}
              noValidate
              className="mt-8 grid gap-5"
              aria-describedby="form-help"
            >
              <p id="form-help" className="sr-only">
                All fields are required.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  id="field-name"
                  label="Full Name"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={update("name")}
                  error={errors.name}
                  placeholder="Jane Doe"
                />
                <Field
                  id="field-email"
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={update("email")}
                  error={errors.email}
                  placeholder="you@example.com"
                />
              </div>
              <Field
                id="field-subject"
                label="Subject"
                name="subject"
                value={values.subject}
                onChange={update("subject")}
                error={errors.subject}
                placeholder="How can we help?"
              />

              <div>
                <label htmlFor="field-message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="field-message"
                  name="message"
                  required
                  rows={5}
                  maxLength={1000}
                  value={values.message}
                  onChange={update("message")}
                  placeholder="Tell us a bit more..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "field-message-error" : undefined}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-all focus:ring-4 focus:ring-primary/15 ${
                    errors.message
                      ? "border-destructive focus:border-destructive"
                      : "border-input focus:border-primary"
                  }`}
                />
                {errors.message && (
                  <p
                    id="field-message-error"
                    className="mt-2 flex items-center gap-1.5 text-xs text-destructive"
                  >
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white btn-glow transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 disabled:opacity-70 disabled:hover:scale-100"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="py-24" aria-label="Closing call to action">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-12 sm:p-20 text-center text-white">
            <div
              className="absolute inset-0 opacity-30"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 70%, white 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative">
              <h2 className="text-4xl sm:text-6xl font-bold leading-tight">
                Let's build the future of <br /> learning together
              </h2>
              <p className="mt-5 text-lg text-white/85 max-w-2xl mx-auto">
                Learners, instructors, and partners — there's a place for you on Edvanz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  autoComplete,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-all focus:ring-4 focus:ring-primary/15 ${
          error
            ? "border-destructive focus:border-destructive"
            : "border-input focus:border-primary"
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-xs text-destructive">
          <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {error}
        </p>
      )}
    </div>
  );
}

export default function ContactPageWrapper({
  onNavigate,
}: { onNavigate?: (page: import("@/types/nav").Page) => void } = {}) {
  return <ContactPage onNavigate={onNavigate} />;
}
