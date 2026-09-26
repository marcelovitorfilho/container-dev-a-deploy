export default async function Home() {
const response = await fetch("http://127.0.0.1:8000/api/health/");

const data = await response.json();
return ( <main> <h1>Situação atual do Backend com hot reload</h1>
  <p>Status: {data.status}</p>
  <p>Mensagem: {data.message}</p>
</main>);

}
