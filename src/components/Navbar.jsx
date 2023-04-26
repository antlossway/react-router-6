import { Link } from "react-router-dom"
import useAuthContext from "../hooks/useAuthContext"

const Navbar = () => {
  const {user, setUser} = useAuthContext()

  const Logout = () => {
    setUser(null)
  }
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/dashboard">Dashboard</Link>
        {
          user? <button className="btn" onClick={Logout}>Logout</button>
          : <Link to="/login">Login</Link>
        }
        {user && <span className="greeting">hello {user?.name}({user?.role})</span>}
    </nav>
  )
}
export default Navbar