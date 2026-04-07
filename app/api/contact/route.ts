import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 Portfolio Contact | ${name}`,
      replyTo: email,

      text: `
Portfolio Contact Message

Name: ${name}
Email: ${email}

Message:
${message}
      `,

      html: `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; padding: 20px; border: 1px solid #e5e5e5;">
          
          <h2 style="text-align: center; color: #111;">
            📩 Portfolio Contact
          </h2>

          <hr style="margin: 20px 0;" />

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <div style="margin-top: 15px;">
            <p><strong>Message:</strong></p>
            <p style="background: #f4f4f4; padding: 10px; border-radius: 5px;">
              ${message}
            </p>
          </div>

          <hr style="margin: 20px 0;" />

          <p style="font-size: 12px; color: #888; text-align: center;">
            This message was sent from your portfolio contact form
          </p>

        </div>
      </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    )
  }
}