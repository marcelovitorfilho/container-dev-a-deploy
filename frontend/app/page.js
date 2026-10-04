"use client";

import { useEffect, useState } from "react";
import { getData, testFirestoreWrite } from "../lib/data";

export default function Home() {
  const [data, setData] = useState(null);
  const [writeResult, setWriteResult] = useState("");
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

async function handleWriteTest() {
  try {
    await testFirestoreWrite();
    setWriteResult("Escrita permitida.");
  } catch (error) {
    setWriteResult(`Erro de escrita: ${error.code}`);
  }
}

  return (
    <main>
      <h1>Dados do projeto na nuvem</h1>

      {loading && <p>Verificando...</p>}

      {error && (
        <p>
          Não consegui falar com o backend agora. Ele ainda não está no ar.
        </p>
      )}

      <button onClick={handleWriteTest}> Testar escrita no Firestore </button>

{writeResult && <p>{writeResult}</p>}

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