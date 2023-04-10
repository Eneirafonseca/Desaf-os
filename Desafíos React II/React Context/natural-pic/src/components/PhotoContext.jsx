import { createContext, useState } from "react";

export const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    return (
        <PhotoContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </PhotoContext.Provider>
    );
};

export default PhotoContext;
