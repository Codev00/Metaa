import Style from "./Profile.module.scss";
import classNames from "classnames/bind";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { useEffect } from "react";
import Follow from "../Follow";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
const cn = classNames.bind(Style);

function ProfileInfo() {
   const curUser = useSelector((state) => state.user.userInfo);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [user, setUser] = useState({});
   const [post, setPost] = useState([]);
   const [followed, setFollowed] = useState(false);
   const username = useParams().username;
   const [follow, setFollow] = useState("");

   useLayoutEffect(() => {
      window.document.title = "@" + username;
      const fetchUser = async () => {
         const res = await axios.get(`/api/user?username=${username}`);
         setUser(res.data);
      };
      const fetchPost = async () => {
         const res = await axios.get("/api/posts?username=" + username);
         setPost(res.data);
      };
      fetchUser();
      fetchPost();
   }, [username, followed, curUser]);
   useEffect(() => {
      if (curUser.username != username) {
         if (curUser.followings.includes(user?._id)) {
            setFollowed(!followed);
         }
      }
   }, []);
   const handleFollow = async () => {
      try {
         if (followed) {
            await axios.put(`/api/user/${user._id}/unfollow`, {
               userId: curUser._id,
            });
         } else {
            await axios.put(`/api/user/${user._id}/follow`, {
               userId: curUser._id,
            });
         }
      } catch (err) {
         console.log({ error: err });
      }
      setFollowed(!followed);
   };
   const handleEdit = () => {
      navigate("/account/edit");
   };
   const handleShowFollowers = () => {
      setFollow("Followers");
      console.log(follow);
   };
   const handleShowFollowings = () => {
      setFollow("Followings");
   };
   const handleChangeImg = async (e) => {
      const img = e.target.files[0];
      const data = new FormData();
      data.append("image", img);
      try {
         await axios.put(`/api/user/update/${user._id}`, data);
      } catch (err) {
         console.log(err);
      }
   };
   return (
      <div className={cn("profile")}>
         <header>
            <div className={cn("avatar")}>
               <label htmlFor="avt">
                  <img
                     src={user.profileImg || "/images/no-avatar.jpg"}
                     alt="no avatar"
                  />
               </label>
               <input type="file" id="avt" onChange={handleChangeImg} hidden />
            </div>
            <div className={cn("info")}>
               <div className={cn("name")}>
                  <span>{user.username}</span>
                  <div className={cn("btn-follow")}>
                     {curUser.username != user.username && (
                        <span
                           onClick={handleFollow}
                           style={{ cursor: "pointer" }}
                        >
                           {followed == true ? "Following" : "Follow"}
                        </span>
                     )}
                     {curUser.username == user.username && (
                        <span onClick={handleEdit}>Edit Profile</span>
                     )}
                  </div>
               </div>
               <div className={cn("follow")}>
                  <span>{post.length} posts</span>
                  <span
                     className={cn("btn-follow")}
                     onClick={handleShowFollowers}
                  >
                     {user.followers === undefined ? 0 : user.followers.length}{" "}
                     followers
                  </span>
                  <span
                     className={cn("btn-follow")}
                     onClick={handleShowFollowings}
                  >
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
         <Follow
            title={follow}
            close={() => {
               setFollow(null);
            }}
         />
      </div>
   );
}

export default ProfileInfo;
