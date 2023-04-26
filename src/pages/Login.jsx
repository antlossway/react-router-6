import { useCallback,useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';

import authenticate from '../utils/authenticate';

const Login = () => {
  const {setUser, users} = useAuthContext()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  //autofocus on name input when login form loaded
  const nameInput = useCallback( (inputElement) => {
    if(inputElement) {
      inputElement.focus()
    }
  },[])

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return //need to implement real authentication

    const authResult = authenticate(name)
    if(!authResult) return

    setUser({name, email, role:authResult.role})
    // navigate(-1)
    navigate(from, {replace: true})
  };


  return (
    <section className='section'>
      <form className='form' onSubmit={handleSubmit}>
        <h5>login</h5>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            ref={nameInput}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
  );
};
export default Login;
