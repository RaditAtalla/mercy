import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { login } from "../apis/Collections";
import { useState } from "react";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const saveToStorage = async (token) => {
    localStorage.setItem("token", JSON.stringify(token));
  };

  const handleLogin = async () => {
    const data = {
      email: email,
      password: password,
    };
    const res = await login(data);
    if (res.success) {
      await saveToStorage(res.token).then(() => {
        navigate("/dashboard");
      });
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <div className="container login-inner-container text-center">
        <img id="login-icon" src={require("../assets/icons/login-icon.png")} alt="icon" className="img-responsive" />
        <form className="mb-4 mt-5">
          <div className="row bg-light rounded-pill ps-3 pe-3 mb-2">
            <div className="col-auto d-flex justify-content-center align-items-center p-0">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="col p-0 w-100 h-100 d-flex align-items-center">
              <input
                type="email"
                id="email-input"
                className="form-control ps-2"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="row bg-light rounded-pill ps-3 pe-3">
            <div className="col-auto d-flex justify-content-center align-items-center p-0">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <div className="col p-0 w-100 h-100 d-flex align-items-center">
              <input
                type="password"
                id="pwd-input"
                className="form-control ps-2"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </form>
        <div className="row">
          <button onClick={handleLogin} className="btn btn-primary btn-md w-100 rounded-pill">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
