import React from "react";
import styles from "./Results.module.css";
import { Result, Player } from "../../components";
import { useRouter } from "next/router";
const Results = ({ props }) => {
  const router = useRouter();
  return (
    <div className={styles.results}>
      {router.route === "/"
        ? props?.map((team, index) => <Result key={index} team={team} />)
        : props?.map((player, index) => <Player key={index} player={player} />)}
    </div>
  );
};

export default Results;
