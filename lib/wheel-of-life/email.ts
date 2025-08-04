import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const categories = [
  { name: "Health", question: "How satisfied are you with your health?" },
  { name: "Career", question: "How fulfilled are you in your career?" },
  { name: "Finances", question: "How do you feel about your financial situation?" },
  { name: "Relationships", question: "How connected do you feel to loved ones?" },
  { name: "Personal Growth", question: "Are you growing and learning consistently?" },
  { name: "Fun & Recreation", question: "Are you enjoying your free time?" },
  { name: "Spirituality", question: "How aligned do you feel spiritually?" },
  { name: "Environment", question: "Is your environment supportive and uplifting?" },
]

export async function sendEmail({ email, scores }: { email: string; scores: number[] }) {
  try {
    const result = await resend.emails.send({
      from: "Hive Coaching <onboarding@resend.dev>", // You can change this later
      to: email,
      subject: "Your Wheel of Life Assessment Results",
      html: `
        <h2>Thanks for completing the Wheel of Life Assessment</h2>
        <p>Here are your scores:</p>
        <ul>
          ${scores
            .map(
              (score, i) =>
                `<li><strong>${categories[i]}</strong>: ${score}/10</li>`
            )
            .join("")}
        </ul>
      `,
    })

    return { success: true, message: "Email sent successfully", result }
  } catch (error: any) {
    console.error("Email send error:", error)
    return { success: false, message: error?.message || "Failed to send email" }
  }
}


// // import { Resend } from "resend"

// // const resend = new Resend(process.env.RESEND_API_KEY)

// // export async function sendWheelAssessmentEmail(
// //   email: string,
// //   answers: Record<string, number>
// // ) {
// //   const scoreTable = Object.entries(answers)
// //     .map(([key, val]) => `${key}: ${val}/10`)
// //     .join("<br>")

// //   const html = `
// //     <h2>🎯 Your Wheel of Life Assessment Results</h2>
// //     <p>Here are your scores:</p>
// //     <p>${scoreTable}</p>
// //     <p>Thank you for taking the time to reflect!</p>
// //   `

// //   return await resend.emails.send({
// //     from: "Hive Coaching <onboarding@resend.dev>", // You can change this later
// //     to: email,
// //     subject: "Your Wheel of Life Assessment Results",
// //     html,
// //   })
// // }
