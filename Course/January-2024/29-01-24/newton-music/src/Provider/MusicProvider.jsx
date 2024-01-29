import React, { createContext, useContext, useState } from "react";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [selectedMusic, setSelectedMusic] = useState({});
  return (
    <MusicContext.Provider value={{ selectedMusic, setSelectedMusic }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
    return useContext(MusicContext)
}
