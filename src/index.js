import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GifExpertApp from "./components/GiftExpertApp";
import './index.css'


const rootElement = document.getElementById("root");    //Asiganmos el contenido al Root
const root = createRoot(rootElement);   //  Renderizamos en el Root

root.render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>
);
