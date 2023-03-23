import axios from "axios";
import classNames from "classnames/bind";
import { useRef } from "react";
import Style from "./Register.module.scss";

const cn = classNames.bind(Style);

function Register({ setState }) {
   const username = useRef();
   const email = useRef();
   const password = useRef();
   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
         };
         await axios.post("api/auth/register", user);
         setState(false);
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div className={cn("login")}>
         <form className={cn("form")} onSubmit={handleSubmit}>
            <h2>Create Account</h2>
            <input
               type="text"
               placeholder="Username"
               autoComplete="off"
               required
               ref={username}
            />
            <input
               type="email"
               placeholder="Email"
               autoComplete="off"
               required
               ref={email}
            />
            <input
               type="password"
               placeholder="Password"
               required
               ref={password}
            />
            <input type="submit" value="Sign Up" className={cn("submit")} />
         </form>
      </div>
   );
}

export default Register;
