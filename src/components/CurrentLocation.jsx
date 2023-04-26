import { useLocation } from "react-router-dom"

const CurrentLocation = () => {
  const currentLocation = useLocation()

  return (
    <div className="section">
      <h5>current Page location: </h5>
      <span>{currentLocation.pathname}</span>
    </div>
  )
}
export default CurrentLocation