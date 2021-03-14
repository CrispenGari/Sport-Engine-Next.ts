import React from "react";
import styles from "./Player.module.css";
import { Avatar } from "@material-ui/core";

const Player = ({ player }) => {
  return (
    player?.strThumb && (
      <>
        <div className={styles.player}>
          <div className={styles.player__top}>
            <Avatar
              className={styles.player__top__avatar}
              alt={player?.strPlayer}
              src={player?.strCutout}
            />
            <div className={styles.player__top__info}>
              <h1>{player?.strPlayer}</h1>
              <p>
                <small>{player?.strBirthLocation}</small> •
                <small>{player?.strSport}</small>
                <small>{player?.strBirthLocation}</small> •
                <small>{player?.strGender}</small>
                <small>{player?.strBirthLocation}</small> •
                <small>{player?.strTeam}</small>
              </p>
            </div>
          </div>
          <div className={styles.player__center}>
            <h1>
              {player?.strPlayer} • {player?.strPosition}
            </h1>

            <img src={player?.strThumb} alt="player-thumb" />

            <h1>{player?.strPlayer}</h1>
            <small>{player?.strDescriptionEN}</small>
          </div>
          <div className={styles.player__bottom}>
            <div className={styles.player__bottom__left}>
              {/* <h1>{player?.strPlayer}</h1>
            {player?.strDescriptionEN} */}
            </div>
            <div className={styles.player__bottom__right}>
              <h1>{player?.strKit}</h1>
              <img
                src={
                  player?.strRender ||
                  player?.strCutout ||
                  player?.strCutout?.strThumb
                }
                alt={player?.strPlayer}
              />
            </div>
          </div>
        </div>
      </>
    )
  );
};
export default Player;
