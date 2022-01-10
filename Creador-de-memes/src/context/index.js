import { createContext, useState } from "react";

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = (event) => {
    setLinea1(event.target.value);
  };

  const onChangeLinea2 = (event) => {
    setLinea2(event.target.value);
  };

  const onChangeImagen = (event) => {
    setImagen(event.target.value);
  };

  const data = {
    linea1,
    linea2,
    imagen,
    onChangeImagen,
    onChangeLinea1,
    onChangeLinea2,
  };

  return <ImageContext.Provider value={data}>{children}</ImageContext.Provider>;
};

export default ImageContext;
