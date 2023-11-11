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
    <div className="drop-shadow-lg w-full bg-white grow border-t-2 border-graphql-border p-4">
      <div className="container mx-auto py-4">
        <h2 className="text-3xl font-bold mb-4">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <div
              key={event.slug}
              className="bg-white rounded-lg border border-graphql-border shadow-md overflow-hidden"
            >
              <img
                src={event.coverImage}
                alt={event.name}
                className="w-full h-40 object-contain"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
              <div className="p-4 border-t border-graphql-border">
                <p className="text-sm text-gray-600">Date: {event.date}</p>
                <p className="text-sm text-gray-600">
                  Location: {event.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
