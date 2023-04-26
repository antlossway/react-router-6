import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import CurrentLocation from "../components/CurrentLocation";

const Layout = () => {
  return (
    <>
      <Navbar />
      <CurrentLocation />
      <Outlet />
    </>
  );
};
export default Layout;
