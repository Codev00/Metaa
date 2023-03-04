import classNames from "classnames/bind";
import Style from "./News.module.scss";
import Posts from "./Posts";
import PostItem from "./PostItem";
import { useEffect, useState } from "react";
import axios from "axios";

const cn = classNames.bind(Style);

function News() {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      const fetchPosts = async () => {
         const res = await axios.get("api/posts/news/63d52b2635bf2bd505725908");
         setPosts(res.data);
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
