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
    <div className="container mx-auto flex flex-col sm:flex-row justify-center gap-10 md:gap-20 items-center my-20">
      {imgs.map((image) => (
        <div key={image.name} className="flex flex-col items-center p-4">
          <img
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover"
            src={image.src}
            alt={image.name}
          />
          <p className="text-sm text-center mt-2">{image.name}</p>
        </div>
      ))}
    </div>
  );
}
