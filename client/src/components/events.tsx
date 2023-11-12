import { useState, useEffect } from "react";
import { getEvents } from "../api";
import moment from "moment";
import { Container } from "./container";
import { EventType } from "@graphql-events/server/src/events";

export function Events() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedHost, setSelectedHost] = useState("");
  const [showPastEvents, setShowPastEvents] = useState(true);

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleHostChange = (e) => {
    setSelectedHost(e.target.value);
  };

  const handleTogglePastEvents = () => {
    setShowPastEvents(!showPastEvents);
  };

  const locations = Array.from(new Set(events.map((event) => event.location)));
  const hosts = Array.from(new Set(events.map((event) => event.host)));
  const currentDate = moment();

  const filteredEvents = events.filter((event) => {
    const eventDate = moment(event.date);
    const isPastEvent = eventDate.isBefore(currentDate);
    return (
      event.name.toLowerCase().includes(searchTerm) &&
      (selectedLocation === "" || event.location === selectedLocation) &&
      (selectedHost === "" || event.host === selectedHost) &&
      (showPastEvents || !isPastEvent)
    );
  });

  return (
    <div className="drop-shadow-lg w-full bg-white grow border-t-2 border-graphql-border py-10 md:py-20">
      <Container>
        <h2 className="text-3xl mb-10 font-bold">Events</h2>
        <div className="mb-10 flex flex-wrap gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="Search events..."
            className="w-full sm:flex-1 p-2 border border-graphql-border rounded-lg focus:outline-none focus:ring focus:ring-graphql-pink focus:border-transparent placeholder-graphql-blue"
            onChange={handleSearchChange}
          />
          <select
            value={selectedLocation}
            onChange={handleLocationChange}
            className="w-full sm:w-auto sm:flex-1 p-2 border border-graphql-border rounded-lg text-graphql-blue bg-white focus:outline-none focus:ring focus:ring-graphql-pink focus:border-transparent"
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
          <select
            value={selectedHost}
            onChange={handleHostChange}
            className="w-full sm:w-auto sm:flex-1 p-2 border border-graphql-border rounded-lg text-graphql-blue bg-white focus:outline-none focus:ring focus:ring-graphql-pink focus:border-transparent"
          >
            <option value="">All Hosts</option>
            {hosts.map((host) => (
              <option key={host} value={host}>
                {host}
              </option>
            ))}
          </select>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showPastEvents}
              onChange={handleTogglePastEvents}
              className="form-checkbox h-5 w-5 text-graphql-pink rounded focus:ring-graphql-blue"
            />
            <span className="text-graphql-blue">Show Past Events</span>
          </label>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredEvents.map((event) => (
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
                    {moment(event.date).format(
                      "dddd, MMMM Do YYYY [at] h:mm A"
                    )}
                  </p>
                  <p className="text-sm text-gray-600">
                    Location:{" "}
                    <span className="font-bold">{event.location}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-lg text-gray-600">No events found.</p>
          </div>
        )}
      </Container>
    </div>
  );
}
