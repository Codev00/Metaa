import classNames from "classnames/bind";
import Style from "./DefaultLayout.module.scss";
import { Sidebar, Suggest } from "../../components";

const cn = classNames.bind(Style);

function Layout({ children }) {
   return (
      <div className={cn("wrapper")}>
         <Sidebar />
         <div className={cn("container")}>{children}</div>
      </div>
   );
}

export default Layout;
