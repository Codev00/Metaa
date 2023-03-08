import classNames from "classnames/bind";
import Style from "./Login.module.scss";

const cn = classNames.bind(Style);

function Login() {
   return (
      <div className={cn("login")}>
         <div className={cn("form")}>
            <h2>Metaa</h2>
            <input type="text" placeholder="Username" autoComplete="off" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Sign In" className={cn("submit")} />
         </div>
      </div>
   );
}

export default Login;
