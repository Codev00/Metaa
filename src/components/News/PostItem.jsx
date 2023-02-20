import classNames from "classnames/bind";
import Style from "./News.module.scss";

const cn = classNames.bind(Style);

function PostItem() {
   return (
      <div className={cn("post-item")}>
         <div className={cn("post-header")}>
            <a href="">
               <img src="/public/images/no-avatar.jpg" alt="no avatar" />
            </a>
            <a href="">
               <span className={cn("name")}>Hamter</span>
            </a>
            <span className={cn("timeline")}>• 5 mins ago</span>
         </div>
         <div className={cn("post-img")}></div>
         <div className={cn("post-status")}>
            <i class="fa-regular fa-heart"></i>
            {/* <i class="fa-solid fa-heart"></i> */}
            <i class="fa-regular fa-comment-dots"></i>
            <i class="fa-regular fa-paper-plane"></i>
         </div>
         <div className={cn("post-content")}>
            <p>Visited</p>
         </div>
      </div>
   );
}

export default PostItem;
