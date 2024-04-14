import './App.css'
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      [FIXED_CONTENT]

      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/blog">blog</Link>
      </nav>

      <Outlet />

      [FIXED_CONTENT]
    </>
  );
}