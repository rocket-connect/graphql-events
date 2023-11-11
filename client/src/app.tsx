import { logo } from "./images";
import { EventType } from "@graphql-events/server/src/events";
import { useState, useEffect } from "react";
import { getEvents } from "./api";

export function App() {
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
    <div>
      <h1>Hi GraphQL Events</h1>

      <img src={logo} alt="" className="w-8" />

      {events.map((event) => (
        <div key={event.slug}>
          <p>{event.name}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}
