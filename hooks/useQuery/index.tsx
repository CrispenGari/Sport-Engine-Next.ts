import { useState } from "react";

const useQuery = (initialState) => {
  const [query, setQuery] = useState(initialState);

  const reset = () => {
    setQuery(initialState);
  };
  const bind = {
    value: query,
    onChange: (e) => {
      setQuery(e.target.value);
    },
  };

  return [query, bind, reset];
};

export default useQuery;
