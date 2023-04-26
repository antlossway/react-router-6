import { Link } from "react-router-dom";

const Home = () => {
  return (
      <section className='section'>
        <h1>Home page</h1>
        <div className="box">
          <h2>Public Routes</h2>
          <Link to="/about">About</Link>
          <Link to="/products">Product</Link>
          <Link to="/login">Login</Link>
        </div>

        <div className="box">
          <h2>Protected Routes</h2>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/dashboard/admin">Admin Dashboard</Link>
          <Link to="/dashboard/sales">Sales Dashboard</Link>
        </div>
      </section>
  );
};
export default Home;
