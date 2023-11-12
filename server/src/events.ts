import { z } from "zod";

export const EventSchema = z.object({
  name: z.string(),
  slug: z.string(),
  location: z.string(),
  date: z.string(),
  coverImage: z.string(),
  eventLink: z.string(),
  host: z.string(),
  hostLink: z.string(),
});

export type EventType = z.infer<typeof EventSchema>;

export const events = EventSchema.array().parse(require("../../events.json"));
