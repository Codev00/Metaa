import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import Style from "./News.module.scss";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const cn = classNames.bind(Style);

function PostItem({ post }) {
   const [user, setUser] = useState({});
   const [likes, setLikes] = useState(post.likes.length);
   const [isLike, setIsLike] = useState(false);
   const currentUser = useSelector((state) => state.user.userInfo);
   useEffect(() => {
      setIsLike(post.likes.includes(currentUser._id));
   }, [currentUser._id, post.likes]);
   useEffect(() => {
      const fetchUsers = async () => {
         const res = await axios.get(`api/user?userId=${post.userId}`);
         setUser(res.data);
      };
      fetchUsers();
   }, [post.userId]);
   const handleLike = async () => {
      try {
         await axios.put("/api/posts/" + post._id + "/like", {
            userId: currentUser._id,
         });
      } catch (error) {}
      setLikes(isLike ? likes - 1 : likes + 1);
      setIsLike(!isLike);
   };
   return (
      <div className={cn("post-item")}>
         <div className={cn("post-header")}>
            <Link to={`/profile/${user.username}/posts`}>
               <img
                  src={user.profileImg || "/images/no-avatar.jpg"}
                  alt="avatar"
               />
            </Link>
            <Link to={`/profile/${user.username}/posts`}>
               <span className={cn("name")}>{user.username}</span>
            </Link>
            <span className={cn("timeline")}>• {format(post.createdAt)}</span>
         </div>
         <div className={cn("post-img")}></div>
         <div className={cn("post-status")}>
            <div className={cn("like-box")} onClick={handleLike}>
               {isLike ? (
                  <i className={cn("fa-solid fa-heart like")}></i>
               ) : (
                  <i className={cn("fa-regular fa-heart")}></i>
               )}
            </div>
            <div className={cn("cmt")}>
               <i className={cn("fa-regular fa-comment-dots")}></i>
            </div>
            <div className={cn("share")}>
               <i className={cn("fa-regular fa-paper-plane")}></i>
            </div>
         </div>
         <div className={cn("post-content")}>
            <h5>
               <span>{likes}</span> likes
            </h5>

            <p>
               <span>{post.desc}</span>
            </p>
         </div>
      </div>
   );
}

export default PostItem;
