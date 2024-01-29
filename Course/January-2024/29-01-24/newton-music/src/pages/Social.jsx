import axios from "axios";
import React, { useEffect, useState } from "react";
import { getHeaderWithProjectId } from "../utils/configs";
import { ArticleComponent } from "../components/social/Article.jsx";

export const Social = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const fetchAlbums = async () => {
    setLoading(true);
    const config = getHeaderWithProjectId();
    const res = await axios.get(
      "https://academics.newtonschool.co/api/v1/quora/post?limit=100",
      config
    );
    console.log("res", res.data.data);
    setPodcasts(res.data.data);

    setLoading(false);
  };

  useEffect(() => {
    fetchAlbums();
  }, []);
  // return <div>Podcasts</div>;

  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    <>
      <div>Data</div>
      {podcasts.map((post) => (
        <ArticleComponent article={post} />
      ))}
    </>
    // podcasts && (
    //   <MusicProvider>
    //     <section className="musicList-container">
    //       {podcasts.map((music, i) => (
    //         <MusicCard key={i} {...music} />
    //       ))}
    //     </section>
    //     <MusicPlayer/>
    //   </MusicProvider>
    // )
  );
};
