export function Intro() {
  return (
    <div className="container mx-auto">
      <div className="pt-24 flex flex-col align-center justify-center w-5/5 md:w-4/5 lg:w-3/5 mx-auto gap-20">
        <h1 className="text-center text-graphql-blue text-4xl md:text-5xl xl:text-6xl">
          The home for GraphQL Community Events
        </h1>

        <a href="#create" className="mx-auto">
          <button
            type="button"
            className="text-graphql-pink px-8 lg:px-12 py-2 lg:py-3 border-2 border-graphql-pink rounded-lg"
          >
            Create an Event
          </button>
        </a>
      </div>
    </div>
  );
}
