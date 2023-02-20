import Style from "./Profile.module.scss";
import classNames from "classnames/bind";
const cn = classNames.bind(Style);

function Profile() {
   return (
      <div className={cn("profile")}>
         <header>
            <div className={cn("avatar")}>
               <img
                  src="../../../public/images/no-avatar.jpg"
                  alt="no avatar"
               />
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
               <a href="">
                  <div>
                     <span>POSTS</span>
                  </div>
               </a>
            </div>
            <div className={cn("menu-item")}>
               <a href="">
                  <div>
                     <span>SAVED</span>
                  </div>
               </a>
            </div>
         </div>
      </div>
   );
}

export default Profile;
