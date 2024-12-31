import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import JsxApp from "./components/JsxApp";
import App from "./components/AnimationsApp";
import './style.css'
import 'animate.css'
createRoot(document.getElementById("demo")).render(
    <StrictMode>
    {/* <JsxApp /> */}
    <App />
    </StrictMode>
)