import './index.scss'
import viteLogo from '/vite.svg'
import { useState } from 'react'
import axios from 'axios';
function Home() {
  const [count, setCount] = useState(0);

  axios.get(`${import.meta.env.VITE_API}/posts`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
  axios.get(`${import.meta.env.VITE_API}/comments`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
export default Home
