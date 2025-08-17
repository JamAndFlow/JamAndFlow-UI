import { useEffect, useState } from "react";

const apiBase = import.meta.env.VITE_API_URL;

function App() {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    fetch(`${apiBase}/health`)
      .then(res => res.json())
      .then(data => setApiResponse(data))
      .catch(err => console.error("API fetch error:", err));
  }, []);

  return (
    <>
      <div>
        <h1>Jam and Flow UI</h1>
        <p>Welcome to the Jam and Flow UI application!</p>
      </div>
      <div>
        <p>API Base URL: {apiBase}</p>
      </div>
      <div>
        <p>Response from API: {apiResponse ? JSON.stringify(apiResponse) : "Loading..."}</p>
      </div>
    </>
  );
}

export default App;
