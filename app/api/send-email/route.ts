// app/api/send-email/route.ts (Next.js 13+ with App Router)

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()

  try {
    const data = await resend.emails.send({
      from: 'Hive Coaching <onboarding@resend.dev>',
      to: body.email, // collected from form
      subject: 'Your Wheel of Life Assessment Results',
      html: `
        <h2>Thank you for completing the Wheel of Life</h2>
        <p>Here are your scores:</p>
        <ul>
          ${Object.entries(body.scores)
            .map(([area, score]) => `<li><strong>${area}:</strong> ${score}/10</li>`)
            .join('')}
        </ul>
      `,
    })

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ success: false, error })
  }
}
