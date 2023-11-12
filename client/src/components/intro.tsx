import { Container } from "./container";

export function Intro() {
  return (
    <Container>
      <div className="py-20 flex flex-col align-center justify-center w-5/5 md:w-4/5 lg:w-3/5 mx-auto gap-20">
        <h1 className="text-center text-graphql-blue text-3xl md:text-5xl xl:text-6xl">
          The home for GraphQL Community Events
        </h1>

        <a
          href="https://github.com/rocket-connect/graphql-events#submitting-an-event"
          className="mx-auto"
        >
          <button
            type="button"
            className="text-graphql-pink px-8 lg:px-12 py-2 lg:py-3 border-2 border-graphql-pink rounded-lg hover:bg-graphql-pink hover:text-white transition-colors duration-300"
          >
            Add your Event
          </button>
        </a>
      </div>
    </Container>
  );
}
