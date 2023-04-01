import Style from "./Follow.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { useLayoutEffect } from "react";
const cn = classNames.bind(Style);

function FollowItem({ title }) {
   const [titleName, setTitleName] = useState(title);
   const [following, setFollowing] = useState(true);
   useLayoutEffect(() => {
      setTitleName(title);
   }, [title]);
   return (
      <div className={cn("user-item")}>
         <div className={cn("avt")}>
            <img src="/images/no-avatar.jpg" alt="" />
         </div>
         {titleName == "Followers" && (
            <div className={cn("name")}>
               <h6>Name</h6>
               {""}
               <span>•</span>
               {""} <span>Follow</span>
            </div>
         )}
         {titleName == "Followings" && (
            <div className={cn("name")}>
               <h6>Name</h6>
            </div>
         )}
         {titleName == "Followers" && (
            <div className={cn("remove")}>
               <input
                  type="button"
                  value="Remove"
                  className={cn("btn-remove")}
               />
            </div>
         )}
         {titleName == "Followings" && (
            <div className={cn("remove")}>
               {following && (
                  <input
                     type="button"
                     value="Following"
                     className={cn("btn-remove")}
                  />
               )}
               {following || (
                  <input
                     type="button"
                     value="Follow"
                     className={cn("btn-remove", "follow")}
                  />
               )}
            </div>
         )}
      </div>
   );
}

export default FollowItem;
