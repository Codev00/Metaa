import axios from "axios";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Style from "./Suggest.module.scss";
import Avatar from "../CircleAvatar";

const cn = classNames.bind(Style);

function SuggestItem({ user }) {
   const currentUser = useSelector((state) => state.user.userInfo);
   const [followed, setFollowed] = useState(false);
   useEffect(() => {
      setFollowed(user.followers.includes(currentUser._id));
   }, [currentUser, user._id]);
   const handleFollow = async () => {
      try {
         if (followed) {
            await axios.put(`/api/user/${user._id}/unfollow`, {
               userId: currentUser._id,
            });
         } else {
            await axios.put(`/api/user/${user._id}/follow`, {
               userId: currentUser._id,
            });
         }
      } catch (err) {
         console.log({ error: err });
      }
      setFollowed(!followed);
   };
   return (
      <div className={cn("Suggest-item")}>
         <div className={cn("avatar")}>
            <Avatar
               url={user.profileImg || "/images/no-avatar.jpg"}
               size={45}
            />
         </div>
         <div className={cn("name")}>
            <Link to={`/profile/${user.username}/posts`}>
               <span>{user.username}</span>
            </Link>
         </div>
         <div className={cn("follow")}>
            <span onClick={handleFollow}>
               {followed ? "Following" : "Follow"}
            </span>
         </div>
      </div>
   );
}

export default SuggestItem;
