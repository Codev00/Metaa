import classNames from "classnames/bind";
import Style from "./Register.module.scss";

const cn = classNames.bind(Style);

function Register() {
   return (
      <div className={cn("login")}>
         <div className={cn("form")}>
            <h2>Create Account</h2>
            <input type="text" placeholder="Username" autoComplete="off" />
            <input type="email" placeholder="Email" autoComplete="off" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Sign Up" className={cn("submit")} />
         </div>
      </div>
   );
}

export default Register;
