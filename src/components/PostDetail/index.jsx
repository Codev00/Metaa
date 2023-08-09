import "./PostDetail.scss";
import { useState } from "react";
import Comment from "./Comment";
import { useEffect, useLayoutEffect } from "react";
import axios from "axios";
import { useRef } from "react";
import Avatar from "../CircleAvatar";
function PostDetail({ post, cmt, setCmt, user, curUser }) {
   const [isLike, setIsLike] = useState(false);
   const [likes, setLikes] = useState(post.likes.length);
   const [show, setShow] = useState(false);
   const [cmts, setCmts] = useState([]);
   const comment = useRef();
   const reply = useRef("");
   useEffect(() => {
      if (cmt) {
         setShow(true);
      }
   }, [cmt]);
   useEffect(() => {
      setIsLike(post.likes.includes(curUser?._id));
   }, [curUser, post.likes]);
   useLayoutEffect(() => {
      const fetchComment = async () => {
         const res = await axios.get(`/api/cmt/all/${post._id}`);
         setCmts(
            res.data.sort((cmt1, cmt2) => {
               return new Date(cmt1.createAt) - new Date(cmt2.createAt);
            })
         );
      };
      fetchComment();
   }, [cmts]);
   const handleLike = async () => {
      try {
         await axios.put("/api/posts/" + post._id + "/like", {
            userId: curUser._id,
         });
      } catch (error) {}
      setLikes(isLike ? likes - 1 : likes + 1);
      setIsLike(!isLike);
   };
   const handleClose = () => {
      setCmt(false);
      setShow(false);
   };
   const handleComment = async () => {
      try {
         const cmtForm = {
            userId: curUser._id,
            postId: post._id,
            cmt: comment.current.value,
         };
         await axios.post("/api/cmt", cmtForm);
         comment.current.value = "";
      } catch (err) {
         console.log({ Error: err });
      }
   };
   return (
      <div
         className={"post-detail"}
         style={{ display: show ? "flex" : "none" }}
      >
         <span className="close-btn" onClick={handleClose}>
            <i class="fa-solid fa-xmark"></i>
         </span>
         <div className="post">
            <div className="images-post">
               <img src={post.img} alt="img" />
            </div>
            <div className="cmt-post">
               <div className="user">
                  <div className="avatar">
                     <Avatar
                        url={user.profileImg || "/images/no-avatar.jpg"}
                        size={45}
                     />
                  </div>
                  <div className="name">
                     <span>{user.username}</span>
                  </div>
               </div>

               <div className="cmt-show">
                  {cmts.map((cmt, index) => (
                     <Comment cmt={cmt} key={index} />
                  ))}
               </div>
               <div className="status-bar">
                  <div className="status">
                     <div className="like-box" onClick={handleLike}>
                        {isLike ? (
                           <i className="fa-solid fa-heart like"></i>
                        ) : (
                           <i className="fa-regular fa-heart"></i>
                        )}
                     </div>
                     <div className="cmt-line">
                        <span onClick={handleCmt()}>
                           <i className="fa-regular fa-comment-dots"></i>
                        </span>
                     </div>
                     <div className="share">
                        <i className="fa-regular fa-paper-plane"></i>
                     </div>
                  </div>
                  <div className="likes">
                     <span>{post.likes.length} likes</span>
                  </div>
               </div>
               <div className="cmt">
                  <div className="cmt-box">
                     <div className="emoji">
                        <i class="fa-regular fa-face-smile"></i>
                     </div>
                     <div className="comment-text">
                        <textarea
                           placeholder="Add a comment"
                           id="cmt"
                           autoComplete="off"
                           autoCorrect="off"
                           ref={comment}
                        ></textarea>
                     </div>
                     <div className="submit-cmt">
                        <span onClick={handleComment}>Post</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default PostDetail;
