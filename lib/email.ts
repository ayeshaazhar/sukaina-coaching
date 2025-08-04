import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

type Props = {
  name: string
  email: string
  message?: string
}

export async function sendDiscoveryCallEmail({ name, email, message }: Props) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("Missing RESEND_API_KEY environment variable")
  }

  const subject = `New Discovery Call Booking from ${name}`

  const body = `
    <h2>Discovery Call Booked</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
  `

  try {
    // Send to admin
    const adminRes = await resend.emails.send({
      from: "Hive Coaching <onboarding@resend.dev>",
      to: ["onboarding@resend.dev"], // replace with your real email if needed
      subject,
      html: body,
    })
    console.log("✅ Admin email sent:", adminRes)

    // Send confirmation to user
    const userRes = await resend.emails.send({
      from: "Hive Coaching <onboarding@resend.dev>",
      to: [email],
      subject: "Thanks for booking your Discovery Call",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thanks for booking your discovery call! We’ll be in touch shortly.</p>
        <p>— Hive Coaching</p>
      `,
    })
    console.log("✅ Confirmation email sent to user:", userRes)

  } catch (error: any) {
    console.error("❌ Resend email failed:", error)
    throw new Error("Failed to send emails via Resend")
  }
}
