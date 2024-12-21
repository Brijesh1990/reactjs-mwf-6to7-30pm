import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Add from "./components/Add";
// import Multiplication from "./components/MultiplicationApp";
// import AnimationApp from "./components/Animations";
import AnimationTxt from "./components/AnimationTxt";
import 'animate.css'
createRoot(document.getElementById("demo")).render(
    <StrictMode>
     {/* <Add /> */}
     {/* <Multiplication /> */}
     {/* <AnimationApp /> */}
     <AnimationTxt />
    </StrictMode>
)
