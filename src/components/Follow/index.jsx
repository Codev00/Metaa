import Style from "./Follow.module.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useState } from "react";
import FollowItem from "./FollowItem";

const cn = classNames.bind(Style);

function Follow({ title, close }) {
   const [show, setShow] = useState(false);
   useEffect(() => {
      if (title) {
         setShow(!show);
      }
   }, [title]);
   return (
      <div className={cn("follow-modal", { show: show })}>
         <div className={cn("modal")}>
            <header>
               {title}
               <div className={cn("btn-close")}>
                  <span
                     onClick={() => {
                        setShow(false);
                        close();
                     }}
                  >
                     <i class="fa-solid fa-xmark"></i>
                  </span>
               </div>
            </header>
            <div className={cn("body-modal")}>
               <FollowItem title={title} />
            </div>
         </div>
      </div>
   );
}

export default Follow;
