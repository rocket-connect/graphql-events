import { Container } from "./container";
import { useState, useEffect } from "react";
import { MeetupType } from "@graphql-events/server/src/meetups";
import { getMeetups } from "../api";

function UrlList({
  continent,
  urls,
}: {
  continent: string;
  urls: { href: string; text: string }[];
}) {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold text-left mb-4">{continent}</h2>
      <ul className="marker:text-graphql-pink list-disc ml-6">
        {urls.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="block p-1 hover:text-graphql-pink transition-colors duration-300"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const [meetups, setMeetups] = useState<MeetupType>([]);

  useEffect(() => {
    (async () => {
      try {
        const _m = await getMeetups();
        setMeetups(_m);
      } catch (error) {
        console.error(error);
      }
    })();
  });

  const unsetContinents = meetups.map((meetup) => meetup.continent);
  const continents = [...new Set(unsetContinents)];

  return (
    <div className="text-white bg-graphql-blue py-10 mt-auto">
      <Container>
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 w-full">
            {continents.map((continent, index) => {
              const urls = meetups.filter(
                (meetup) => meetup.continent == continent
              );
              return <UrlList key={index} continent={continent} urls={urls} />;
            })}
          </div>
          <div className="w-full pt-5">
            <p className="text-center">
              <a href="https://rocketconnect.co.uk">
                Made with <span className="text-red-500">❤️</span>
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
