"use client"

import { useState } from "react"

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<string | null>(null)

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
        setStatus("✅ Message sent successfully!")
        e.currentTarget.reset()
      } else {
        setStatus(result.message || "❌ Failed to send message")
      }
    } catch (error) {
      setStatus("❌ Something went wrong")
    }

    setLoading(false)
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="name"
          placeholder="Your Name"
          required
          className="border p-2 rounded"
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="border p-2 rounded"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="border p-2 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white p-2 rounded"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className="text-center text-sm">{status}</p>
        )}
      </form>
    </div>
  )
}