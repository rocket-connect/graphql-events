import { Container } from "./container";

const meetups = {
  Europe: [
    {
      href: "https://guild.host/graphql-london",
      text: "GraphQL London",
    },
    {
      href: "https://www.meetup.com/Amsterdam-GraphQL-Meetup/",
      text: "GraphQL Amsterdam",
    },
    {
      href: "https://www.meetup.com/graphql-berlin/",
      text: "GraphQL Berlin",
    },
    {
      href: "https://www.meetup.com/GraphQL-Barcelona/",
      text: "GraphQL Barcelona",
    },
    {
      href: "https://www.meetup.com/Budapest-GraphQL/",
      text: "GraphQL Budapest",
    },
    {
      href: "https://www.meetup.com/Copenhagen-GraphQL-Meetup-Group/",
      text: "GraphQL Copenhagen",
    },
    {
      href: "https://www.meetup.com/GraphQL-Milano/",
      text: "GraphQL Milano",
    },
    {
      href: "https://www.meetup.com/graphql-munich/",
      text: "GraphQL Munich",
    },
    {
      href: "https://www.meetup.com/fr-FR/parisgraphql/",
      text: "GraphQL Paris",
    },
    {
      href: "https://www.meetup.com/graphql-sarajevo/",
      text: "GraphQL Sarajevo",
    },
    {
      href: "https://www.meetup.com/GraphQL-Stockholm/",
      text: "GraphQL Stockholm",
    },
    {
      href: "https://www.meetup.com/graphql-zurich/",
      text: "GraphQL Zurich",
    },
    {
      href: "https://www.meetup.com/GraphQL-Wroclaw/",
      text: "GraphQL Wroclaw",
    },
  ],
  Asia: [
    {
      href: "https://www.meetup.com/graphql-bangkok/",
      text: "GraphQL Bangkok",
    },
    {
      href: "https://www.meetup.com/graphql-sg/",
      text: "GraphQL Singapore",
    },
    {
      href: "https://www.meetup.com/graphql-seoul/",
      text: "GraphQL Seoul",
    },
    {
      href: "https://www.facebook.com/groups/graphql.kr",
      text: "GraphQL Korea",
    },
    {
      href: "https://www.meetup.com/graphqlshenzhen/",
      text: "GraphQL Shenzhen",
    },
    {
      href: "https://www.meetup.com/GraphQLHongKong/",
      text: "GraphQL Hongkong",
    },
    {
      href: "https://www.meetup.com/graphql-bangalore/",
      text: "GraphQL Bangalore",
    },
    {
      href: "https://www.meetup.com/GraphQL-Tokyo/",
      text: "GraphQL Tokyo",
    },
    {
      href: "https://www.meetup.com/GraphQL-TLV/",
      text: "GraphQL Tel Aviv",
    },
    {
      href: "https://guild.host/graphql-taipei/events",
      text: "GraphQL Taipei",
    },
  ],
  "North America": [
    {
      href: "https://www.meetup.com/graphql-sf/",
      text: "GraphQL San Francisco",
    },
    {
      href: "https://www.meetup.com/graphql-seattle",
      text: "GraphQL Seattle",
    },
    {
      href: "https://www.meetup.com/graphql-boston/",
      text: "GraphQL Boston",
    },
    {
      href: "https://www.meetup.com/graphql-newyork/",
      text: "GraphQL NYC",
    },
    {
      href: "https://www.meetup.com/ATX-GraphQL/",
      text: "GraphQL Austin",
    },
    {
      href: "https://www.meetup.com/GraphQL-MN/",
      text: "GraphQL Minneapolis",
    },
    {
      href: "https://www.meetup.com/graphql-denver/",
      text: "GraphQL Denver",
    },
    {
      href: "https://www.meetup.com/graphql-chicago/",
      text: "GraphQL Chicago",
    },
  ],
  "South America": [
    {
      href: "https://www.meetup.com/graphql-sp/",
      text: "GraphQL São Paulo",
    },
    {
      href: "https://www.meetup.com/GraphQL-BA/",
      text: "GraphQL Buenos Aires",
    },
  ],
  Australia: [
    {
      href: "http://graphql.melbourne/",
      text: "GraphQL Melbourne",
    },
    {
      href: "https://graphql.sydney/",
      text: "GraphQL Sydney",
    },
  ],
  Africa: [
    {
      href: "https://www.meetup.com/nairobi-graphql-meetup/",
      text: "GraphQL Nairobi",
    },
  ],
};

function UrlList({ continent, urls }) {
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
  return (
    <div className="text-white bg-graphql-blue py-10 mt-auto">
      <Container>
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 w-full">
            {Object.entries(meetups).map(([continent, urls], index) => (
              <UrlList key={index} continent={continent} urls={urls} />
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
      </Container>
    </div>
  );
}
