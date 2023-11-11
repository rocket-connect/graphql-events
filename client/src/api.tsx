import { API_URL } from "./config";
import { EventType } from "@graphql-events/server/src/events";

export async function getEvents(): Promise<EventType[]> {
  const response = await fetch(`${API_URL}/api/events`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return (await response.json()) as EventType[];
}
