import classNames from "classnames/bind";
import Style from "./ProfileView.module.scss";
import { Sidebar } from "../../components";

const cn = classNames.bind(Style);

function ProfileView({ children }) {
   return (
      <div className={cn("wrapper")}>
         <div className={cn("right-sidebar")}>
            <Sidebar />
         </div>

         <div className={cn("container")}>
            <div className={cn("main")}>{children}</div>
         </div>
      </div>
   );
}

export default ProfileView;
