import { z } from "zod";

export const guildConfigSchema = z.object({
  prefix: z.string().min(1).max(5).optional(),
  modLogChannelId: z.string().regex(/^\d{17,20}$/).nullable().optional(),
  welcomeEnabled: z.boolean().optional(),
  welcomeMessage: z.string().min(1).max(500).optional(),
  automodEnabled: z.boolean().optional(),
  xpMultiplier: z.number().min(0.5).max(5.0).optional(),
  aiModuleEnabled: z.boolean().optional()
});

export type GuildConfigInput = z.infer<typeof guildConfigSchema>;
