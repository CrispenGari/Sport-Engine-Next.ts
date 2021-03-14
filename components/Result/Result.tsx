import React from "react";
import styles from "./Result.module.css";
import { Avatar } from "@material-ui/core";

const Result = ({ team }) => {
  return (
    team?.strStadiumThumb && (
      <>
        <div className={styles.result}>
          <div className={styles.result__top}>
            <Avatar
              className={styles.result__top__avatar}
              alt={team?.strTeam}
              src={team?.strTeamLogo}
            />
            <div className={styles.result__top__info}>
              <h1>{team?.strTeam}</h1>
              <p>
                <small>{team?.strLeague}</small> •
                <small>{team?.strSport}</small>
              </p>
            </div>
          </div>
          <div className={styles.result__center}>
            <h1>{team?.strStadium}</h1>

            <img src={team?.strStadiumThumb} alt="team-stadium" />

            <h1>{team?.strStadiumLocation}</h1>
            <small>{team?.strStadiumDescription}</small>
          </div>
          <div className={styles.result__bottom}>
            <div className={styles.result__bottom__left}>
              <h1>{team?.strTeam}</h1>
              {team?.strDescriptionEN}
            </div>
            <div className={styles.result__bottom__right}>
              <h1>Team Jersey</h1>
              <img src={team?.strTeamJersey} alt={team?.strTeam} />
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Result;
