import { useState, useEffect } from "react";
import movies from "../../data/movies.json";

const useLoadMovies = (page) => {
  const [images, addImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      const res = movies.slice(0, page * 20);
      setLoading(false);
      addImages(res);
    } catch (e) {
      setLoading(false);
    }
  }, [page]);
  return [images, loading];
};

export default useLoadMovies;
