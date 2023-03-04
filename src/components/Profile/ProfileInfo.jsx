import Style from "./Profile.module.scss";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
const cn = classNames.bind(Style);

function ProfileInfo() {
   return (
      <div className={cn("profile")}>
         <header>
            <div className={cn("avatar")}>
               <img src="/images/no-avatar.jpg" alt="no avatar" />
            </div>
            <div className={cn("info")}>
               <div className={cn("name")}>
                  <span>Hamter</span>
               </div>
               <div className={cn("desc")}>
                  <span>0 posts</span>
                  <span>8 followers</span>
                  <span>10 following</span>
               </div>
            </div>
         </header>

         <div className={cn("menu")}>
            <div className={cn("menu-item")}>
               <NavLink
                  to="/profile/hamter/posts"
                  className={(nav) => cn({ active: nav.isActive })}
               >
                  <div>
                     <span>POSTS</span>
                  </div>
               </NavLink>
            </div>
            <div className={cn("menu-item")}>
               <NavLink
                  to="/profile/hamter/saved"
                  className={(nav) => cn({ active: nav.isActive })}
               >
                  <div>
                     <span>SAVED</span>
                  </div>
               </NavLink>
            </div>
         </div>
      </div>
   );
}

export default ProfileInfo;
