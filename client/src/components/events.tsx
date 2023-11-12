import { EventType } from "@graphql-events/server/src/events";
import { useState, useEffect } from "react";
import { getEvents } from "../api";
import moment from "moment";
import { Container } from "./container";

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
    <div className="drop-shadow-lg w-full bg-white grow border-t-2 border-graphql-border py-10 md:py-20">
      <Container>
        <h2 className="text-3xl mb-10 font-bold">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <div
              key={event.slug}
              className="bg-white rounded-lg border border-graphql-border shadow-md transition-colors duration-300"
            >
              <img
                loading="lazy"
                src={event.coverImage}
                alt={event.name}
                className="w-full h-40 object-contain"
              />
              <div className="p-4 flex flex-col gap-3">
                <a
                  href={event.eventLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold mb-2 underline hover:text-graphql-pink transition-colors duration-300"
                >
                  {event.name}
                </a>
                <p className="text-sm text-gray-600">
                  Hosted by:{" "}
                  <a
                    href={event.hostLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline hover:text-graphql-pink transition-colors duration-300"
                  >
                    {event.host}
                  </a>
                </p>
              </div>
              <div className="p-4 border-t border-graphql-border">
                <p className="text-sm text-gray-600">
                  Date:{" "}
                  {moment(event.date).format("dddd, MMMM Do YYYY [at] h:mm A")}
                </p>
                <p className="text-sm text-gray-600">
                  Location: <span className="font-bold">{event.location}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
