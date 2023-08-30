import { useState } from "react";


const Login = () => {
    const [error, setError] = useState (null);
    const [successMessage, setSuccessMessage] = useState (null);
    const [userData, setUserData] = useState(null);
    const [token] = useState(null);

    const handleClick = async () => {
        try {
        const response = await fetch ('https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/users/login', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        const result = await response.json();
        setSuccessMessage (result.message);
        setUserData (result.data);
        } catch (error){
            setError (error.message);
        }
    }
    return (
    <div className="container">
    <h2>Authenticate</h2>
    {error && <p className="error-message">Error: {error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      {userData && <p>Welcome, {userData.username}!</p>}
      <button onClick={handleClick} className="form-input">Authenticate Token</button>
      </div>)
};

export default Login;