import React from "react";
import Formulario from "./componets/Formulario";
import { ImageProvider } from "./context";

function App() {
  return (
    <>
      <ImageProvider>
        <Formulario />
      </ImageProvider>
    </>
  );
}

export default App;
