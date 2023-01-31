import classNames from "classnames/bind";
import Style from "./Sidebar.module.scss";
import { Link } from "react-router-dom";

const cn = classNames.bind(Style);

function Sidebar() {
   return (
      <div className={cn("Sidebar")}>
         <div className={cn("logo")}>
            <h1>Metaa</h1>
         </div>
         <div className={cn("nav-bar")}>
            <div className={cn("nav-bar-list")}>
               <div className={cn("nav-bar-item")}>
                  <Link to="/">
                     <i class="fa-solid fa-house"></i>Home
                  </Link>
               </div>
               <div className={cn("nav-bar-item")}>
                  <Link to="">
                     <i class="fa-solid fa-magnifying-glass"></i>Search
                  </Link>
               </div>
               <div className={cn("nav-bar-item")}>
                  <Link to="/messages">
                     <i class="fa-brands fa-facebook-messenger"></i>Messages
                  </Link>
               </div>
               <div className={cn("nav-bar-item")}>
                  <Link to="">
                     <i class="fa-regular fa-square-plus"></i>Create
                  </Link>
               </div>
               <div className={cn("nav-bar-item")}>
                  <Link to="/profile">
                     <i class="fa-regular fa-user"></i>Profile
                  </Link>
               </div>
               <div className={cn("nav-bar-item")}>
                  <Link to="">
                     <i class="fa-regular fa-moon"></i>
                     Dark/Light
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Sidebar;
