import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const Dashboard = () => {
  const {user} = useAuthContext()
  return (
    <section className='section'>
      <h4>Dashboard</h4>
      <div className="box">
        <Link to="/dashboard/admin">Admin Dashboard</Link>
        <Link to="/dashboard/sales">Sales Dashboard</Link>
      </div>
    </section>
  );
};
export default Dashboard;
