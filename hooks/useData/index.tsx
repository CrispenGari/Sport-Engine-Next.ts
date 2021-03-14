import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const useData = (query) => {
  const router = useRouter();
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://www.thesportsdb.com/api/v1/json/1/${
          router.route === "/" ? "searchteams.php?t" : "searchplayers.php?p"
        }=${query}`
      );
      setData(router.route === "/" ? data?.teams : data?.player);
    })();
  }, [query, router]);
  return {
    data,
  };
};

export default useData;
