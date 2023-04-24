import classNames from "classnames/bind";
import { useEffect, useLayoutEffect, useState } from "react";
import Style from "./News.module.scss";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PostDetail from "../PostDetail";

const cn = classNames.bind(Style);

function PostItem({ post }) {
   const [user, setUser] = useState({});
   const [likes, setLikes] = useState(post.likes.length);
   const [isLike, setIsLike] = useState(false);
   const [cmt, setCmt] = useState(false);
   const currentUser = useSelector((state) => state.user.userInfo);
   useLayoutEffect(() => {
      setIsLike(post.likes.includes(currentUser._id));
   }, [currentUser._id, post.likes]);
   useLayoutEffect(() => {
      const fetchUsers = async () => {
         const res = await axios.get(`api/user?userId=${post.userId}`);
         setUser(res.data);
      };
      fetchUsers();
   }, [post.userId]);
   const handleLike = async () => {
      try {
         await axios.put("/api/post/" + post._id + "/like", {
            userId: currentUser._id,
         });
      } catch (error) {}
      setLikes(isLike ? likes - 1 : likes + 1);
      setIsLike(!isLike);
   };
   const handleCmt = () => {
      setCmt(true);
   };
   return (
      <div className={cn("post-item")}>
         <div className={cn("post-header")}>
            <Link to={`/profile/${user.username}/posts`}>
               <img
                  src={
                     user.profileImg == ""
                        ? "/images/no-avatar.jpg"
                        : user.profileImg
                  }
                  alt="avatar"
               />
            </Link>
            <Link to={`/profile/${user.username}/posts`}>
               <span className={cn("name")}>{user.username}</span>
            </Link>
            <span className={cn("timeline")}> • {format(post.createdAt)}</span>
            <div className={cn("edit-post")}>
               <span className={cn("edit-menu")}>
                  <i className="fa-solid fa-ellipsis"></i>
               </span>
            </div>
         </div>
         <div className={cn("post-img")}>
            <img
               src={post.img || `/images/${post.img}`}
               alt=""
               onDoubleClick={handleLike}
            />
         </div>
         <div className={cn("post-status")}>
            <div className={cn("like-box")} onClick={handleLike}>
               {isLike ? (
                  <i className={cn("fa-solid fa-heart like")}></i>
               ) : (
                  <i className={cn("fa-regular fa-heart")}></i>
               )}
            </div>
            <div className={cn("cmt")}>
               <span onClick={handleCmt}>
                  <i className={cn("fa-regular fa-comment-dots")}></i>
               </span>
            </div>
            <div className={cn("share")}>
               <i className={cn("fa-regular fa-paper-plane")}></i>
            </div>
         </div>
         <div className={cn("post-content")}>
            <h5>
               <span>{likes}</span> likes
            </h5>

            <p>{post.desc}</p>
         </div>
         <PostDetail
            like={isLike}
            curUser={currentUser}
            user={user}
            post={post}
            cmt={cmt}
            setCmt={(value) => {
               setCmt(value);
            }}
         />
      </div>
   );
}

export default PostItem;
