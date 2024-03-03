import { useState } from "react";
import "./App.css";
import { FaEye, FaEyeSlash, FaInfoCircle, FaCircle } from "react-icons/fa";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("password");

  return (
    <body>
      <div className="stars"></div>
      <div className="comet">
        <FaCircle />
      </div>
      <div className="container">
        <h1>Login</h1>
        <form className="container_form">
          <div className="inpts">
            <label className="label">Email</label>
            <div className="div__inpt">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  borderBottomColor: email.length > 0 ? "#00ffee" : "#000",
                }}
              />
            </div>
            <label className="label">Senha</label>
            <div className="div__inpt">
              <input
                type={showPassword}
                name="password"
                id="password"
                placeholder="Senha"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  borderBottomColor: password.length > 0 ? "#00ffee" : "#000",
                }}
                required
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              />
              <abbr title="A senha deve conter, pelo menos um número, uma letra minúscula, uma letra maiúscula, no mínimo 8 caracteres.">
                <FaInfoCircle size={25} />
              </abbr>
            </div>
            <span>
              {showPassword == "password" ? (
                <FaEye size={25} onClick={() => setShowPassword("text")} />
              ) : (
                <FaEyeSlash
                  size={25}
                  onClick={() => setShowPassword("password")}
                />
              )}
            </span>
          </div>
          <button>Entrar</button>
          <div className="content_links">
            <a href="">Já possui conta?</a>
            <a href="">Esqueceu senha?</a>
          </div>
        </form>
      </div>
    </body>
  );
}

export default App;
