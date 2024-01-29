import React from "react";
import style from "./MusicCard.module.css";
import { useMusic } from "../../Provider/MusicProvider";

export const MusicCard = (props) => {
  const { setSelectedMusic } = useMusic();
  const { title, thumbnail, artist } = props;
  const artistList = artist.map((item) => item.name).join(" & ");
  return (
    <section
      className={style.musicCard}
      onClick={() => setSelectedMusic(props)}
    >
      <img
        src={thumbnail}
        alt={title}
        height="150"
        width="150"
        className={style.bannerImg}
      />
      <div>{title}</div>
      <div className={style.artist} title={artistList}>
        {artistList}
      </div>
    </section>
  );
};
