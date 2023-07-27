import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollRestoration />
    </>
  );
}

export default App;
