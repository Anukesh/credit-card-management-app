import { useEffect, useState } from "react";

interface UseFetchOptions extends RequestInit {}

interface UseFetchResult<T> {
  data: T;
  error: { message: string } | null;
  status: "idle" | "loading" | "fetched" | "error";
}

export function useFetch<T = unknown>(
  url: string,
  OPTIONS: UseFetchOptions = {}
): UseFetchResult<T> {
  const [data, setData] = useState<T>([] as T);
  const [error, setError] = useState<{ message: string } | null>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "fetched" | "error"
  >("idle");

  useEffect(() => {
    const controller = new AbortController();
    setStatus("loading");
    setError(null);

    fetch(url, { signal: controller.signal, ...OPTIONS })
      .then((res) => (res.status === 200 ? res.json() : Promise.reject(res)))
      .then((data: T) => {
        setData(data);
        setStatus("fetched");
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setStatus("error");
        setError({ message: "There's an error fetching data!" });
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, error, status };
}
