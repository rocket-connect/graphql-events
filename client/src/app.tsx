import { Header } from "./components/header";
import { Events } from "./components/events";
import { Intro } from "./components/intro";
import { Footer } from "./components/footer";

export function App() {
  return (
    <div className="flex flex-col min-h-screen text-graphql-text">
      <Header />
      <Intro />
      <Events />
      <Footer />
    </div>
  );
}
