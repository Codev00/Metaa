import Style from "./Profile.module.scss";
import classNames from "classnames/bind";
import { NavLink, useParams } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const cn = classNames.bind(Style);

function ProfileInfo() {
   const [user, setUser] = useState({});
   const [post, setPost] = useState([]);
   const username = useParams().username;
   useLayoutEffect(() => {
      const fetchUser = async () => {
         const res = await axios.get(`/api/user?username=${username}`);
         setUser(res.data);
      };
      const fetchPost = async () => {
         const res = await axios.get("/api/posts/" + username);
         setPost(res.data);
      };
      fetchUser();
      fetchPost();
   }, [username]);
   return (
      <div className={cn("profile")}>
         <header>
            <div className={cn("avatar")}>
               <img src="/images/no-avatar.jpg" alt="no avatar" />
            </div>
            <div className={cn("info")}>
               <div className={cn("name")}>
                  <span>{user.username}</span>
               </div>
               <div className={cn("follow")}>
                  <span>{post.length} posts</span>
                  <span className={cn("btn-follow")}>
                     {user.followers === undefined ? 0 : user.followers.length}{" "}
                     followers
                  </span>
                  <span className={cn("btn-follow")}>
                     {user.followings === undefined
                        ? 0
                        : user.followings.length}{" "}
                     following
                  </span>
               </div>
               <div className={cn("desc")}>
                  <span>{user.desc || "No description"}</span>
               </div>
            </div>
         </header>

         <div className={cn("menu")}>
            <div className={cn("menu-item")}>
               <NavLink
                  to={`/profile/${user.username}/posts`}
                  className={(nav) => cn({ active: nav.isActive })}
               >
                  <div>
                     <span>POSTS</span>
                  </div>
               </NavLink>
            </div>
            <div className={cn("menu-item")}>
               <NavLink
                  to={`/profile/${user.username}/saved`}
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
