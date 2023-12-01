import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const root = createRoot(document.getElementById("root"));
root.render(<App tab="root" />);
