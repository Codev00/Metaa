import classNames from "classnames/bind";
import Style from "./Auth.module.scss";
import { Login, Register } from "../../components";
import { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { autoLogin } from "../../redux/callsAPI";
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
   const [status, setStatus] = useState(false);
   const [show, setShow] = useState(false);
   const [content, setContent] = useState(signInContent);
   const dispatch = useDispatch();
   const nevigate = useNavigate();
   const [cookies, setCookies] = useCookies("token");
   const token = cookies.token;
   const handleStatus = () => {
      setStatus(!status);
      status ? setContent(signInContent) : setContent(signUpContent);
   };
   useLayoutEffect(() => {
      if (token) {
         try {
            dispatch(autoLogin(token));
            nevigate("/");
         } catch (error) {
            console.log(error);
            setShow(true);
         }
      } else {
         setShow(true);
      }
   });
   return (
      <div className={cn("body")}>
         {show && (
            <div className={cn("wrapper")}>
               <div className={cn("right")}>
                  <div className={cn("content")}>
                     <span>{content.title}</span>
                     <button onClick={handleStatus}>{content.Desc}</button>
                  </div>
               </div>
               <div className={cn("left")}>
                  {status || <Login />}
                  {status && (
                     <Register setState={(value) => setStatus(value)} />
                  )}
               </div>
            </div>
         )}
      </div>
   );
}

export default Auth;
