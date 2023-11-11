import { githubBlue, logo } from "../images";
import { Container } from "./container";

export function Header() {
  return (
    <div className="w-full p-3 border-b-2 border-graphql-border">
      <Container>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <img src={logo} alt="logo" className="my-auto h-5 md:h-10" />

            <p className="text-sm md:text-2xl text-graphql-pink my-auto">
              GraphQL Events
            </p>
          </div>

          <div className="flex gap-10">
            <a
              href="https://github.com/rocket-connect/graphql-events"
              className="flex items-center"
            >
              <span className="w-5 md:w-10">
                <img loading="lazy" src={githubBlue} alt="github" />
              </span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
