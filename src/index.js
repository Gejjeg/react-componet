import { createRoot } from "react-dom/client"
import { Hello } from "./helloComponent";
import { App } from "./appComponent";
import * as ReactDOM from 'react-dom';
import { ModifyHello } from "./modifyHello";


const root = createRoot(document.getElementById("root"));

root.render(<Hello />);
root.render(<App />);
ReactDOM.render(<App />, document.getElementById("root"));
root.render(<ModifyHello />);