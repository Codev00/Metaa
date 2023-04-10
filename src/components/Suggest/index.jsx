import SuggestItem from "./SuggestItem";
import classNames from "classnames/bind";
import Style from "./Suggest.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { getAllUser, logOut } from "../../redux/userSlice";
import { useState } from "react";

const cn = classNames.bind(Style);

function Suggest() {
   const user = useSelector((state) => state.user.userInfo);
   const suggest = useSelector((state) => state.user.userList);
   const [sugList, setSugList] = useState([]);
   const dispatch = useDispatch();
   useEffect(() => {
      setSugList([]);
      for (const sug of suggest) {
         if (!user.followings.includes(sug._id)) {
            setSugList((prev) => [...prev, sug]);
         }
      }
   }, [suggest]);
   useEffect(() => {
      const fetchSuggest = async () => {
         const res = await axios.get(`/api/user/${user._id}`);
         dispatch(getAllUser(res.data));
      };
      fetchSuggest();
   }, [user]);
   const handleLogOut = () => {
      dispatch(logOut());
   };
   return (
      <div className={cn("Suggest")}>
         <div className={cn("user")}>
            <div className={cn("user-avatar")}>
               <img src="/images/no-avatar.jpg" alt="no avatar" />
            </div>
            <div className={cn("user-name")}>
               <span>{user.username}</span>
            </div>
            <div className={cn("user-logout")}>
               <div onClick={handleLogOut} style={{ cursor: "pointer" }}>
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
               </div>
            </div>
         </div>
         <div className={cn("Suggest-list")}>
            <span>Suggestions for you</span>
            {sugList.map(
               (user, index) =>
                  index < 6 && <SuggestItem key={user._id} user={user} />
            )}
         </div>
      </div>
   );
}

export default Suggest;
