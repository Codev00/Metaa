import Style from "./Profile.module.scss";
import classNames from "classnames/bind";
import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const cn = classNames.bind(Style);

function AllPost() {
   const params = useParams();
   const [post, setPost] = useState([]);
   const username = params.username;
   useLayoutEffect(() => {
      window.document.title = "@" + params.username + " - Posts";
      try {
         const fetchPost = async () => {
            const res = await axios.get("/api/post?username=" + username);
            setPost(res.data);
         };
         fetchPost();
      } catch (error) {
         console.log(error);
      }
   }, [username]);
   return (
      <div className={cn("post")}>
         {post.map((post) => (
            <div className={cn("post-item")}>
               <div className={cn("img")}>
                  <img src={post.img} alt="" />
                  <div className={cn("mark")}></div>
               </div>
            </div>
         ))}
      </div>
   );
}

export default AllPost;
