import "./PostDetail.scss";
import { format } from "timeago.js";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Comment({ cmt }) {
   const [user, setUser] = useState();
   useEffect(() => {
      const fetchUser = async () => {
         const res = await axios.get(`/api/user?userId=${cmt?.userId}`);
         setUser(res.data);
      };
      fetchUser();
   }, []);
   return (
      <div className="cmt-item">
         <div className="avt">
            <img
               src={
                  user?.profileImg == ""
                     ? "/images/no-avatar.jpg"
                     : user?.profileImg
               }
               alt="avt"
            />
         </div>
         <div className="comment-box">
            <div className="user-name">
               <span>{user?.username}</span>
            </div>
            <div className="comment">
               <span>{cmt.cmt}</span>
            </div>
            <div className="status">
               <span>{format(cmt.createAt)}</span>
               <span>Reply</span>
            </div>
         </div>
      </div>
   );
}

export default Comment;
