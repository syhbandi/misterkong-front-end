import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./components/Navbar";
import FOoter from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <FOoter />
      <ScrollRestoration />
    </>
  );
}

export default App;
