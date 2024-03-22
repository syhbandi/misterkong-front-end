import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Suspense } from "react";
import TopBarProgress from "react-topbar-progress-indicator";
function App() {
  return (
    <Suspense fallback={<TopBarProgress />}>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </Suspense>
  );
}

export default App;
