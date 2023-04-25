import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  if (url === false) {
    throw new Error("Debe ingresar el URL");
  }

  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
    url: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  });

  useEffect(() => {
    if (isMounted.current) {
      setState({
        data: null,
        loading: true,
        error: null,
      });
    }

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          loading: false,
          data: data,
          error: null,
        });
      })
      .catch((e)=>{
        return {
          data: null,
          loading: true,
          error: null,
          url: null,
        };
      });
  }, [url]);

  return state;
};