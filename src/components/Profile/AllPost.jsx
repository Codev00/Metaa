import Style from "./Profile.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(Style);

function AllPost() {
   return (
      <div className={cn("post")}>
         <div className={cn("post-item")}>
            <div className={cn("img")}>
               <img src="/background/1.jpg" alt="" />
               <div className={cn("mark")}></div>
            </div>
         </div>
         <div className={cn("post-item")}></div>
         <div className={cn("post-item")}></div>
      </div>
   );
}

export default AllPost;
