import { Header } from "./components/header";
import { Events } from "./components/events";
import { Intro } from "./components/intro";
import { Footer } from "./components/footer";
import { Callout } from "./components/callout";

export function App() {
  return (
    <div className="flex flex-col min-h-screen text-graphql-blue">
      <Callout />
      <Header />
      <Intro />
      <Events />
      <Footer />
    </div>
  );
}
