const UrlList = ({ urls }) => (
  <ul className="marker:text-graphql-pink list-disc ml-6">
    {urls.map((url) => (
      <li key={url}>
        <a
          href={url}
          className="block p-1 hover:text-graphql-pink transition-colors duration-300"
        >
          {url}
        </a>
      </li>
    ))}
  </ul>
);

const urlGroups = [
  [
    "https://graphql.org/",
    "https://graphql.org/foundation/",
    "https://twitter.com/GraphQL",
  ],
  [
    "https://www.meetup.com/graphql-sf/",
    "https://www.meetup.com/graphql-bangkok/",
    "https://www.meetup.com/graphql-sg/",
    "https://guild.host/graphql-london/",
    "https://www.meetup.com/graphql-seattle",
  ],
  [
    "https://github.com/rocket-connect/graphql-events",
    "https://www.graphql-events.org/",
  ],
];

export function Footer() {
  return (
    <div className="text-white bg-graphql-blue py-10 mt-auto">
      <div className="flex flex-col items-center justify-center gap-5 sm:gap-10">
        <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-5">
          {urlGroups.map((urls, index) => (
            <UrlList key={index} urls={urls} />
          ))}
        </div>
        <div className="w-full pt-5">
          <p className="text-center">
            <a href="https://rocketconnect.co.uk">
              Made with <span className="text-red-500">❤️</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
