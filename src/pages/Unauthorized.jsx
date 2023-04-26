import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

  return (
    <section className='section'>
      <h2>403 Forbidden</h2>
      <br />
      <p>You are not authorized to access the requested page</p>
      <div>
        <button className="btn" onClick={goBack}>Go Back</button>
      </div>
    </section>
  );
};
export default Unauthorized;
