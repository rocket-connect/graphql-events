import { EventType } from "@graphql-events/server/src/events";
import { useState, useEffect } from "react";
import { getEvents } from "../api";

export function Events() {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const _e = await getEvents();

        setEvents(_e);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="container mx-auto">
      <h1>Hi GraphQL Events</h1>

      {events.map((event) => (
        <div key={event.slug}>
          <p>{event.name}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}
