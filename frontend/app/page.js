"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://backend:8000/api/health/")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then(setData)
      .catch(() => setError(true));
  }, []);

  return (
    <main>
      <h1>Como está o backend?</h1>

      {error ? (
        <p>Não consegui falar com o backend agora. Ele ainda não está no ar.</p>
      ) : !data ? (
        <p>Verificando...</p>
      ) : (
        <>
          <p>Status: {data.status}</p>
          <p>{data.message}</p>
        </>
      )}
    </main>
  );
}
