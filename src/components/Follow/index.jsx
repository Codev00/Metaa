import Style from "./Follow.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(Style);

function Follow() {
   return (
      <div className={cn("follow-modal")}>
         <header>Follower</header>
         <div className={cn("body-modal")}></div>
      </div>
   );
}

export default Follow;
