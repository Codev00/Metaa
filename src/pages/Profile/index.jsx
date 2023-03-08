import Style from "./Profile.module.scss";
import classNames from "classnames/bind";
import { Outlet } from "react-router-dom";
const cn = classNames.bind(Style);

function Profile() {
   return (
      <div className={cn("body")}>
         <h1>Welcome to Profile</h1>
         <Outlet />
      </div>
   );
}

export default Profile;
