import classNames from "classnames/bind";
import Style from "./Auth.module.scss";
import { Login, Register } from "../../components";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const cn = classNames.bind(Style);

function Auth() {
   const signUpContent = {
      title: "Bạn đã đăng ký thành viên rồi?",
      Desc: "Sign In",
   };
   const signInContent = {
      title: "Bạn chưa là thành viên?",
      Desc: "Sign Up",
   };
   const [count, setCount] = useState();
   const [status, setStatus] = useState(false);
   const [content, setContent] = useState(signInContent);
   const handleStatus = () => {
      setStatus(!status);
      status ? setContent(signInContent) : setContent(signUpContent);
   };
   return (
      <div className={cn("body")}>
         <div className={cn("wrapper")}>
            <div className={cn("right")}>
               <div className={cn("content")}>
                  <span>{content.title}</span>
                  <button onClick={handleStatus}>{content.Desc}</button>
               </div>
            </div>
            <div className={cn("left")}>
               {status || <Login />}
               {status && <Register setState={(value) => setStatus(value)} />}
            </div>
         </div>
      </div>
   );
}

export default Auth;
