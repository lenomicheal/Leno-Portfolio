import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()
    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_PASS

    if (!emailUser || !emailPass) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is not configured. Set EMAIL_USER and EMAIL_PASS.",
        },
        { status: 500 }
      )
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    })

    await transporter.verify()

      await transporter.sendMail({
          from: `"Portfolio Contact" <${emailUser}>`, // 👈 sender name
          to: emailUser,

          subject: `📩 Portfolio Contact | ${name}`, // 👈 better subject

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

    return NextResponse.json({ success: true, message: "Message sent successfully." })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json(
      { success: false, message: "Failed to send message." },
      { status: 500 }
    )
  }
}
