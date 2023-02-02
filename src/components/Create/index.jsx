import Style from "./Create.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";

const cn = classNames.bind(Style);

function Create({ data, setData }) {
   const [close, setClose] = useState(true);
   useEffect(() => {
      if (data) {
         setClose(!close);
         setData(false);
      }
   }, [data]);
   const handleClose = () => {
      setClose(!close);
   };
   return (
      <div className={cn("create", { close: close })}>
         <i className="fa-solid fa-circle-xmark" onClick={handleClose}></i>
         <div className={cn("create-modal")}>
            <div className={cn("title")}>
               <h1>Create new post</h1>
            </div>
            <div className={cn("create-body")}>
               <div className={cn("file")}></div>
            </div>
         </div>
      </div>
   );
}

export default Create;
