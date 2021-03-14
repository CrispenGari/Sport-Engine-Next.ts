import { Header, Form, Results } from "../components";
import styles from "../styles/Home.module.css";
import { useData } from "../hooks";
import { useState } from "react";
const Home = () => {
  const [query, setQuery] = useState("");
  const { data } = useData(query);
  return (
    <div className={styles.home}>
      <Header />
      <Form setQuery={setQuery} />
      <h1 className={styles.home__result}>
        <span>{data?.filter((res) => res?.strStadiumThumb)?.length}</span>{" "}
        Result(s) Found
      </h1>
      <Results props={data?.filter((res) => res?.strStadiumThumb)} />
    </div>
  );
};
export default Home;
