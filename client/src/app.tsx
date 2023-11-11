import { Header } from "./components/header";
import { Events } from "./components/events";
import { Intro } from "./components/intro";
import { Footer } from "./components/footer";
import { Callout } from "./components/callout";
import { Images } from "./components/images";

export function App() {
  return (
    <div className="flex flex-col min-h-screen text-graphql-blue">
      <Callout />
      <Header />
      <Intro />
      <Images />
      <Events />
      <Footer />
    </div>
  );
}
