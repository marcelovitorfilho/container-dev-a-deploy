"use client";

import { useEffect, useState } from "react";
import { getData } from "../lib/data";

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData()
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <h1>Como está o backend?</h1>

      {loading && <p>Verificando...</p>}

      {error && (
        <p>
          Não consegui falar com o backend agora. Ele ainda não está no ar.
        </p>
      )}

      {data && (
        <>
          <p>Status: {data.status}</p>

          {data.message && <p>{data.message}</p>}

          {data.items && (
            <ul>
              {data.items.map((item) => (
                <li key={item.id}>
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </main>
  );
}