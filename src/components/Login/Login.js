import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TokenContext from '../../contexts/TokenContext';
import { useContext, useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../utils/tokenSlice";

const Login = () => {

    // const { token, setToken } = useContext(TokenContext);
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const token = useSelector(state => state.token.value);

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

            dispatch(setToken(response.data.auth.access_token));
            localStorage.setItem('authToken', response.data.auth.access_token);

            //   await setToken(response.data.auth.access_token);
            //   localStorage.setItem('authToken', response.data.auth.access_token);
              setTimeout(() => {
                navigate("/");
              }, 2000);
              
        } catch (error) {
            console.error("Login error:", error);
        }
    }
    

    useEffect(() => {
        handleLogin();
    }, []);
    
    if (loading) {
        return <div>Loading...</div>; 
    }


    return (
        <div>
        </div>
    );
};

export default Login;
