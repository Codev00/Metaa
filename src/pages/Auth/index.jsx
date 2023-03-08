import classNames from "classnames/bind";
import Style from "./Auth.module.scss";
import { Login, Register } from "../../components";
import { useState, useEffect } from "react";
const cn = classNames.bind(Style);

function Auth() {
   const signInContent = {
      title: "Create Account",
      Desc: "Sign up to see photos and videos from your friends.",
      button: "Sign Up",
      bg: "bg-sign-in",
   };
   const signUpContent = {
      title: "Hello Friend !!!",
      Desc: "Welcome To Back",
      button: "Sign In",
      bg: "bg-sign-up",
   };
   const listBg = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
   const [count, setCount] = useState();
   const [status, setStatus] = useState(false);
   const [content, setContent] = useState(signInContent);
   const handleStatus = () => {
      setStatus(!status);
      status ? setContent(signInContent) : setContent(signUpContent);
   };
   useEffect(() => {
      setCount(Math.floor(Math.random() * listBg.length));
   }, []);
   return (
      <div
         className={cn("body")}
         style={{
            backgroundImage: `url(/background/${listBg[count]})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center, center",
         }}
      >
         <div className={cn("wrapper")}>
            <div className={cn("right", content.bg)}>
               <div className={cn("content")}>
                  <h1>{content.title}</h1>
                  <span>{content.Desc}</span>
               </div>
               <input
                  type="submit"
                  value={content.button}
                  onClick={handleStatus}
               />
            </div>
            <div className={cn("left")}>
               {status || <Login />}
               {status && <Register />}
            </div>
         </div>
      </div>
   );
}

export default Auth;
