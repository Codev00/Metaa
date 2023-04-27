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
   const [postShow, setPostShow] = useState(10);
   const user = useSelector((state) => state.user.userInfo);
   useEffect(() => {
      const fetchPosts = async () => {
         const res = await axios.get(`/api/post/news/${user._id}`);
         setPosts(
            res.data.sort((p1, p2) => {
               return new Date(p2.createdAt) - new Date(p1.createdAt);
            })
         );
      };
      fetchPosts();
   }, [posts]);
   return (
      <div className={cn("main")}>
         <Posts>
            {posts.map(
               (post, index) =>
                  index <= postShow && <PostItem post={post} key={post._id} />
            )}
         </Posts>
      </div>
   );
}

export default News;
