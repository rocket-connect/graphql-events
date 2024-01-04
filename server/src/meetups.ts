import { z } from "zod"


export const MeetupSchema = z.array(
    z.object({
        href: z.string(),
        text: z.string(),
        continent: z.string(),
    })
)

export type MeetupType = z.infer<typeof MeetupSchema>

export const meetups = MeetupSchema.parse(require("../../meetups.json"))