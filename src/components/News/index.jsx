import classNames from "classnames/bind";
import Style from "./News.module.scss";
import Posts from "./Posts";
import PostItem from "./PostItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const cn = classNames.bind(Style);

function News() {
   const [posts, setPosts] = useState([]);
   const user = useSelector((state) => state.user.userInfo);
   useEffect(() => {
      const fetchPosts = async () => {
         const res = await axios.get(`/api/posts/news/${user._id}`);
         setPosts(
            res.data.sort((p1, p2) => {
               return new Date(p2.createdAt) - new Date(p1.createdAt);
            })
         );
      };
      fetchPosts();
   }, []);
   return (
      <div className={cn("main")}>
         <Posts>
            {posts.map((post) => (
               <PostItem post={post} key={post._id} />
            ))}
         </Posts>
      </div>
   );
}

export default News;
