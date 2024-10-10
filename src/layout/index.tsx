import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
function Layout(): JSX.Element {
  return (
    <>
      <Navbar />
      <main className="w-full h-auto min-h-64 bg-gradient-to-b from-white from-20% to-green-600">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
