import { createRoot } from "react-dom/client"
import { Hello } from "./helloComponent";
import { App } from "./appComponent";

const root = createRoot(document.getElementById("root"));

root.render(<Hello />);
root.render(<App />);
