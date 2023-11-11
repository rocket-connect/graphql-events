const urlGroups = [
  [
    { href: "https://graphql.org/", text: "graphql.org" },
    { href: "https://graphql.org/foundation/", text: "graphql.org/foundation" },
    { href: "https://twitter.com/GraphQL", text: "twitter.com/GraphQL" },
    { href: "https://www.graphql-events.org/", text: "graphql-events.org" },
    {
      href: "https://github.com/rocket-connect/graphql-events",
      text: "Github",
    },
  ],
  [
    {
      href: "https://www.meetup.com/graphql-sf/",
      text: "meetup.com/graphql-sf",
    },
    {
      href: "https://www.meetup.com/graphql-bangkok/",
      text: "meetup.com/graphql-bangkok",
    },
    {
      href: "https://www.meetup.com/graphql-sg/",
      text: "meetup.com/graphql-sg",
    },
    {
      href: "https://guild.host/graphql-london/",
      text: "guild.host/graphql-london",
    },
    {
      href: "https://www.meetup.com/graphql-seattle",
      text: "meetup.com/graphql-seattle",
    },
  ],
];

const UrlList = ({ urls }) => (
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
);

export function Footer() {
  return (
    <div className="text-white bg-graphql-blue py-10 mt-auto">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-20">
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
