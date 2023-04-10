import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import PhotoContext from "./components/PhotoContext";

const PhotoProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <PhotoContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </PhotoContext.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <PhotoProvider>
    <App />
  </PhotoProvider>
);

