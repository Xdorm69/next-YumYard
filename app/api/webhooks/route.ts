import { prisma } from "@/lib/Prisma";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const webhookResponse = z.object({
  id: z.string(),
  first_name: z.string().nullish(),
  last_name: z.string().nullish(),
  email_addresses: z.array(z.object({ email_address: z.string().nullish() })),
  username: z.string().nullish(),
})

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);
    const eventType = evt.type;
    
    if (eventType === "user.created") {

      const webres = webhookResponse.safeParse(evt.data);

      if (!webres.success) {
        console.error("Invalid webhook data:", webres.error);
        return NextResponse.json({ message: "Invalid webhook data" }, { status: 400 });
      }

      const { id, first_name, last_name, email_addresses, username } = webres.data;

      try {
        await prisma.user.create({
          data: {
            clerkId: id,
            fullName: first_name + " " + last_name,
            email: email_addresses[0]?.email_address,
            username: username,
          },
        });
        return NextResponse.json({ message: "User created successfully" }, { status: 200 });
      } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ message: "Error creating user" }, { status: 500 });
      }
    }


    return NextResponse.json({ message: "Webhook received" }, { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return NextResponse.json({ message: "Error verifying webhook" }, { status: 400 });
  }
}
