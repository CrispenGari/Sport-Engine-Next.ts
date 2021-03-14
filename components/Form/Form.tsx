import styles from "./Form.module.css";

import { useQuery } from "../../hooks";
import { useRouter } from "next/router";

const Form = ({ setQuery }) => {
  const [query, bindQuery, resetQuery] = useQuery("");
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();
    setQuery(query);
    resetQuery();
  };
  return (
    <form className={styles.form} onSubmit={search}>
      <input
        type="text"
        placeholder={
          router.route === "/"
            ? `Search a Football Team...`
            : "Search a Player..."
        }
        {...bindQuery}
      />
    </form>
  );
};

export default Form;
