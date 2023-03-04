import classNames from "classnames/bind";
import Style from "./ProfileView.module.scss";
import { Sidebar } from "../../components";
import { ProfileInfo } from "../../components/Profile";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const cn = classNames.bind(Style);

function ProfileView({ children }) {
   const navigate = useNavigate();
   return (
      <div className={cn("wrapper")}>
         <div className={cn("right-sidebar")}>
            <Sidebar />
         </div>

         <div className={cn("container")}>
            <div className={cn("main")}>
               <ProfileInfo />
               {children}
            </div>
         </div>
      </div>
   );
}

export default ProfileView;
