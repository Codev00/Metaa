import SuggestItem from "./SuggestItem";
import classNames from "classnames/bind";
import Style from "./Suggest.module.scss";

const cn = classNames.bind(Style);

function Suggest() {
   return (
      <div className={cn("Suggest")}>
         <div className={cn("user")}>
            <div className={cn("user-avatar")}>
               <img src="/images/no-avatar.jpg" alt="no avatar" />
            </div>
            <div className={cn("user-name")}>
               <span>Hamter</span>
            </div>
            <div className={cn("user-logout")}>
               <a href="#">
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
               </a>
            </div>
         </div>
         <div className={cn("Suggest-list")}>
            <span>Suggestions for you</span>
            <SuggestItem
               imgUrl={"/images/no-avatar.jpg"}
               name={"Hamter Hamter"}
            />
         </div>
      </div>
   );
}

export default Suggest;
