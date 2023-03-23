import classNames from "classnames/bind";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/callsAPI";
import Style from "./Login.module.scss";

const cn = classNames.bind(Style);

function Login() {
   const email = useRef();
   const password = useRef();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(
         login({ email: email.current.value, password: password.current.value })
      );
      navigate("/");
   };
   useEffect(() => {
      navigate("/auth");
   }, []);
   return (
      <div className={cn("login")}>
         <form className={cn("form")} onSubmit={handleSubmit}>
            <h2>Metaa</h2>
            <input
               type="email"
               placeholder="Email"
               autoComplete="off"
               autoFocus
               required
               ref={email}
            />
            <input
               type="password"
               placeholder="Password"
               required
               ref={password}
            />
            <input type="submit" value="Sign In" className={cn("submit")} />
         </form>
      </div>
   );
}

export default Login;
