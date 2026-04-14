"use client"

import { useState } from "react"
import { Send, Mail, MapPin, Linkedin, Github, Loader2, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"success" | "error" | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const formData = new FormData(e.currentTarget)

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (res.ok) {
        setStatus("success")
        e.currentTarget.reset()
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }

    setLoading(false)
    setTimeout(() => setStatus(null), 5000)
  }

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 bg-[var(--bg-primary)]">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,var(--accent-glow),transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16 space-y-2">
          <p className="text-sm font-semibold tracking-widest uppercase text-[var(--accent-primary)] font-mono">
            Let&apos;s connect
          </p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Get In Touch
          </h2>
          <p className="text-[var(--text-muted)] max-w-md mx-auto mt-4">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">

          {/* LEFT — Contact Info */}
          <div className="md:col-span-2 space-y-6">

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-secondary)] glow-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-surface)]">
                  <Mail className="w-5 h-5 text-[var(--accent-primary)]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Email</p>
                  <a
                    href="mailto:lenomicheal@gmail.com"
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                  >
                    lenomicheal@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-secondary)] glow-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-surface)]">
                  <MapPin className="w-5 h-5 text-[var(--accent-primary)]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Location</p>
                  <p className="text-sm text-[var(--text-muted)]">
                    Madurai, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)]">
                Connect
              </p>
              <div className="flex gap-3">
                <Link
                  href="https://www.linkedin.com/in/lenomicheal/"
                  target="_blank"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:bg-[var(--accent-surface)] transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://github.com/lenomicheal"
                  target="_blank"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--glass-border)] bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)] transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </Link>
              </div>
            </div>

          </div>

          {/* RIGHT — Contact Form */}
          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-6 md:p-8 rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-secondary)] backdrop-blur-lg"
            >

              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-sm font-medium text-[var(--text-secondary)]">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[var(--glass-border)] bg-[var(--bg-tertiary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent transition-all duration-200 text-sm"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm font-medium text-[var(--text-secondary)]">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[var(--glass-border)] bg-[var(--bg-tertiary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent transition-all duration-200 text-sm"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-medium text-[var(--text-secondary)]">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--glass-border)] bg-[var(--bg-tertiary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent transition-all duration-200 text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[var(--accent-gradient-start)] to-[var(--accent-gradient-end)] text-white font-semibold shadow-[0_4px_16px_var(--accent-glow)] hover:shadow-[0_8px_32px_var(--accent-glow)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-[var(--success)]/10 border border-[var(--success)]/20 text-[var(--success)] text-sm font-medium animate-fade-in-up">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-[var(--error)]/10 border border-[var(--error)]/20 text-[var(--error)] text-sm font-medium animate-fade-in-up">
                  <XCircle className="w-4 h-4 shrink-0" />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

            </form>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-[var(--glass-border)] text-center">
          <p className="text-sm text-[var(--text-muted)]">
            © {new Date().getFullYear()} Leno Micheal. Built with{" "}
            <span className="font-mono text-[var(--accent-primary)]">Next.js</span>{" "}
            &{" "}
            <span className="font-mono text-[var(--accent-primary)]">Tailwind CSS</span>
          </p>
        </div>

      </div>
    </section>
  )
}