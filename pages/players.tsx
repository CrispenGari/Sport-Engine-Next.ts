import { Header, Form, Results } from "../components";

import styles from "../styles/Players.module.css";
import { useState } from "react";
import { useData } from "../hooks";

const players = () => {
  const [query, setQuery] = useState("");
  const { data } = useData(query);

  return (
    <div className={styles.players}>
      <Header />
      <Form setQuery={setQuery} />
      <h1 className={styles.players__result}>
        <span>{data?.filter((res) => res?.strThumb).length}</span> Player(s)
        Found
      </h1>
      <Results props={data?.filter((res) => res?.strThumb)} />
    </div>
  );
};

export default players;
