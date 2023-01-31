import classNames from "classnames/bind";
import Style from "./Suggest.module.scss";

const cn = classNames.bind(Style);

function Suggest() {
   return (
      <div className={cn("Suggest")}>
         <div className={cn("user")}>User</div>
         <div className={cn("Suggest-list")}>
            <div className={cn("Suggest-item")}></div>
         </div>
      </div>
   );
}

export default Suggest;
