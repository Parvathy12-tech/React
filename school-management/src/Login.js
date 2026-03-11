import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./authSlice";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginUser = async () => {

        const response = await fetch("https://worksheet-student.mashupstack.com/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: email,
                password: password
            })

        });

        const data = await response.json();

        if (data.token) {

            const userData = {
                email: email,
                token: data.token
            };

            localStorage.setItem("user", JSON.stringify(userData));

            dispatch(setUser(userData));

            navigate("/students");
        }

    }

    return (

        <div>

            <h2>Login</h2>

            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={loginUser}>Login</button>

        </div>

    )

}

export default Login;