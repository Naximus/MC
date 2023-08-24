import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({
        token,
        setToken
        }) => {

    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            axios.defaults.headers.post['Content-Type'] ='application/json';
            const response = await axios({
                method: 'post',
                url: `https://developer-api.seemelissa.com/v1/auth/login`,
                withCredentials: false,
                data: {
                    client_id: "62419ac553304",
                    client_secret: "62419ac553269",
                    username: "interview@mclimate.eu",
                    password: "interview_mclimate"
                },
              });

              await setToken(response.data.auth.access_token);
              setTimeout(() => {
                navigate("/");
              }, 2000);
              
        } catch (error) {
            console.error("Login error:", error);
        }
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {token && <p>Logged in with token: {token}</p>}
        </div>
    );
};

export default Login;
