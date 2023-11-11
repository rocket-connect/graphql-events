export function Intro() {
  return (
    <div className="container mx-auto">
      <div className="py-24 flex flex-col align-center justify-center w-5/5 md:w-4/5 lg:w-3/5 mx-auto">
        <h1 className="text-center text-4xl md:text-5xl xl:text-6xl">
          The home for GraphQL Community Events
        </h1>

        <a href="#contact" className="mx-auto mt-20">
          <button
            type="button"
            className="text-white font-bold px-8 lg:px-12 py-2 lg:py-3"
          >
            Contact
          </button>
        </a>
      </div>
    </div>
  );
}
