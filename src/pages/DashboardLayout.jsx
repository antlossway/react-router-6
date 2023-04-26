import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  return (
    <section className="section">
      <h1>Dashboard</h1>
      <Outlet />
    </section>
  );
};
export default DashboardLayout;
