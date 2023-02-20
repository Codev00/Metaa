import classNames from "classnames/bind";
import Style from "./DefaultView.module.scss";
import { Sidebar } from "../../components";

const cn = classNames.bind(Style);

function DefaultView({ children }) {
   return (
      <div className={cn("wrapper")}>
         <Sidebar />
         <div className={cn("container")}>{children}</div>
      </div>
   );
}

export default DefaultView;
