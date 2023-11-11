import { githubBlue, logo } from "../images";

export function Header() {
  return (
    <div className="w-full p-3 border-b-2 border-graphql-border">
      <div className="container mx-auto flex justify-between">
        <div className="flex gap-3">
          <img src={logo} alt="logo" className="w-10" />

          <p className="text-2xl text-graphql-pink my-auto">GraphQL Events</p>
        </div>

        <div className="flex gap-10">
          <a
            href="https://github.com/rocket-connect/graphql-events"
            className="flex items-center"
          >
            <span className="w-8">
              <img src={githubBlue} alt="github" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
