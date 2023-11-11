export function Footer() {
  const urlsGroupOne = [
    "https://graphql.org/",
    "https://graphql.org/foundation/",
    "https://twitter.com/GraphQL",
  ];

  const urlsGroupTwo = [
    "https://www.meetup.com/graphql-sf/",
    "https://www.meetup.com/graphql-bangkok/",
    "https://www.meetup.com/graphql-sg/",
    "https://guild.host/graphql-london/",
    "https://www.meetup.com/graphql-seattle",
  ];

  const urlsGroupThree = [
    "https://github.com/rocket-connect/graphql-events",
    "https://www.graphql-events.org/",
  ];

  return (
    <div className="text-white bg-graphql-blue py-10 gap-5 mt-auto flex flex-col align-center justify-center">
      <div className="flex gap-10 mx-auto ">
        <ul className="marker:text-graphql-pink list-disc ml-6">
          {urlsGroupOne.map((url) => (
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
        <ul className="marker:text-graphql-pink list-disc ml-6">
          {urlsGroupTwo.map((url) => (
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

        <ul className="marker:text-graphql-pink list-disc ml-6">
          {urlsGroupThree.map((url) => (
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
      </div>

      <div className="pt-5">
        <p className="text-center">
          <a href="https://rocketconnect.co.uk">
            Made with <span className="text-red-500">❤️ </span>
          </a>
        </p>
      </div>
    </div>
  );
}
