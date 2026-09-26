export default async function Home() {
  const response = await fetch("http://backend:8000/api/health/", {
  cache: "no-store",
});

const data = await response.json();

  return (
    <main>
      <h1>Situação atual do Backend com hot reload</h1>
      <p>Status: {data.status}</p>
      <p>Mensagem: {data.message}</p>
    </main>
  );
}