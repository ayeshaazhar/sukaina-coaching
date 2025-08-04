import { NextResponse } from "next/server"
import { sendDiscoveryCallEmail } from "@/lib/email"

// export async function POST(req: Request) {
//   const { name, email, message } = await req.json()

//   try {
//     await sendDiscoveryCallEmail({ name, email, message })
//     return NextResponse.json({ success: true })
//   } catch (err) {
//     console.error("Email error:", err)
//     return new NextResponse("Failed to send email", { status: 500 })
//   }
// }
export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  console.log("📩 Discovery Call API hit:", { name, email, message }) // <-- Add this

  try {
    await sendDiscoveryCallEmail({ name, email, message })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Email error:", err)
    return new NextResponse("Failed to send email", { status: 500 })
  }
}
