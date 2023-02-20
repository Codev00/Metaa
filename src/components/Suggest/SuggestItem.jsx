import classNames from "classnames/bind";
import Style from "./Suggest.module.scss";

const cn = classNames.bind(Style);

function SuggestItem({ imgUrl, name }) {
   return (
      <div className={cn("Suggest-item")}>
         <div className={cn("avatar")}>
            <img src={imgUrl} alt="no avatar" />
         </div>
         <div className={cn("name")}>
            <span>{name}</span>
         </div>
         <div className={cn("follow")}>
            <span>Follow</span>
         </div>
      </div>
   );
}

export default SuggestItem;
