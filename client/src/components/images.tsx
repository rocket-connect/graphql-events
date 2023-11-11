import { london, bangkok11, bangkok12, seattle } from "../images";

const imgs = [
  {
    name: "GraphQL Bangkok 12",
    src: bangkok12,
    eventLink: "https://www.meetup.com/graphql-bangkok/events/296635356/",
  },
  {
    name: "GraphQL Seattle",
    src: seattle,
    eventLink: "https://www.meetup.com/graphql-seattle/events/296065732",
  },
  {
    name: "GraphQL London",
    src: london,
    eventLink: "https://guild.host/events/september-meetup-lxmkv4",
  },
  {
    name: "GraphQL Bangkok 11",
    src: bangkok11,
    eventLink: "https://www.meetup.com/graphql-bangkok/events/294721074/",
  },
];

export function Images() {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center my-20">
      {imgs.map((image) => (
        <a href={image.eventLink} className="hover:text-graphql-pink">
          <div key={image.name} className="flex flex-col items-center p-4">
            <img
              className="w-36 h-36 rounded-full object-cover"
              src={image.src}
              alt={image.name}
            />
            <p className="text-sm text-center mt-2 underline">{image.name}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
