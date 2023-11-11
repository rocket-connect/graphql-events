import { london, bangkok11, bangkok12, seattle } from "../images";

const imgs = [
  {
    name: "GraphQL Bangkok 12",
    src: bangkok12,
  },
  {
    name: "GraphQL Bangkok 11",
    src: bangkok11,
  },
  {
    name: "GraphQL Seattle",
    src: seattle,
  },
  {
    name: "GraphQL London",
    src: london,
  },
];

export function Images() {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center my-20">
      {imgs.map((image) => (
        <div key={image.name} className="flex flex-col items-center p-4">
          <img
            className="w-36 h-36 rounded-full object-cover"
            src={image.src}
            alt={image.name}
          />
          <p className="text-sm text-center mt-2">{image.name}</p>
        </div>
      ))}
    </div>
  );
}
