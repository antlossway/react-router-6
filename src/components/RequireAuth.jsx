import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuthContext from "../hooks/useAuthContext"

//allowedRoles is array [role1, role2]
const RequireAuth = ({allowedRoles}) => {
    const {user} = useAuthContext()
    const location = useLocation()

  return (
        allowedRoles?.includes(user?.role) ? <Outlet />
        : user ?
            <Navigate to="/unauthorized" state={{from: location}} replace /> //second check, if user is authenticated but does not have proper right, then redirect to unauthoried page
            : // if user is not authenticated, then go to login
            <Navigate to="/login" state={{from: location}} replace />
  )
}
export default RequireAuth