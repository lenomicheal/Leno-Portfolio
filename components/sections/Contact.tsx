"use client"

import type { FormEvent } from "react"
import { useState } from "react"

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setStatus("")

    const form = e.currentTarget

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      await res.json()

      if (res.ok) {
        setStatus("✅ Message sent successfully!")
        form.reset()
      } else {
        setStatus("❌ Failed to send message")
      }
    } catch {
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

        {status && <p className="text-center">{status}</p>}
      </form>
    </div>
  )
}
