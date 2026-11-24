import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { guildConfigSchema } from "@/lib/validators";

export async function GET(
  _req: NextRequest,
  context: { params: { guildId: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const config = await prisma.guildConfig.upsert({
    where: { guildId: context.params.guildId },
    update: {},
    create: { guildId: context.params.guildId }
  });

  return NextResponse.json(config);
}

export async function PATCH(
  req: NextRequest,
  context: { params: { guildId: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const parsed = guildConfigSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const updated = await prisma.guildConfig.upsert({
    where: { guildId: context.params.guildId },
    update: parsed.data,
    create: { guildId: context.params.guildId, ...parsed.data }
  });

  return NextResponse.json(updated);
}
