import { Header } from "./components/header";
import { Events } from "./components/events";
import { Intro } from "./components/intro";

export function App() {
  return (
    <div className="text-graphql-text">
      <Header />
      <Intro />
      <Events />
    </div>
  );
}
