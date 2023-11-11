import { createRoot } from "react-dom/client";
import "tailwindcss/tailwind.css";

import { App } from "./app";
import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
