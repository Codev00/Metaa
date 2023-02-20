import classNames from "classnames/bind";
import Style from "./MessageView.module.scss";
import { Sidebar } from "../../components";

const cn = classNames.bind(Style);

function MessageView({ children }) {
   return (
      <div className={cn("wrapper")}>
         <Sidebar />
         <div className={cn("container")}>{children}</div>
      </div>
   );
}

export default MessageView;
