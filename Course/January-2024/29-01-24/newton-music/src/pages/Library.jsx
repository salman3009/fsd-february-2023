import React, { useEffect, useState } from "react";
import { useUser } from "../Provider/UserProvider";
import { MusicProvider } from "../Provider/MusicProvider";
import { MusicPlayer } from "../components/music/MusicPlayer";
import { MusicCard } from "../components/music/MusicCard";

export const Library = () => {
  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const { isUserLoggedIn } = useUser();

  const fetchFavoriteSongs = () => {
    fetch("https://academics.newtonschool.co/api/v1/music/favorites/like", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${isUserLoggedIn}`,
        projectId: "8nbih316dv01",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched songs:", data);
        setFavoriteSongs(data.data.songs);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  };

  const removeFromFavorite = async (songId, token) => {
    const url = `https://academics.newtonschool.co/api/v1/music/favorites/like`;
    return fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        projectId: "8nbih316dv01",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ songId }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Failed to add to watchlist");
      }
      return response.json();
    });
  };

  useEffect(() => {
    fetchFavoriteSongs();
  }, []);

  return (
    <MusicProvider>
      <h4>Your Library</h4>
      {favoriteSongs.length ? (
        <section className="musicList-container">
          {favoriteSongs.map((music) => (
            <>
              <article className="music-card">
                <MusicCard key={music._id} {...music} />
                <button
                  className="remove-btn"
                  onClick={() => removeFromFavorite(music._id, isUserLoggedIn)}
                >
                  X
                </button>
              </article>
            </>
          ))}
        </section>
      ) : (
        "Add Songs to your library!"
      )}
      <MusicPlayer />
    </MusicProvider>
  );
};
