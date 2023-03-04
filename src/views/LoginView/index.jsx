import classNames from "classnames/bind";
import Style from "./LoginView.module.scss";

const cn = classNames.bind(Style);

function LoginView({ children }) {
   return <div className={cn("wrapper")}>{children}</div>;
}

export default LoginView;
