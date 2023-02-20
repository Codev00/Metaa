import Style from "./Create.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import FileItem from "./FileItem";

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
               <FileItem />
               <div className={cn("desc")}>
                  <textarea
                     name="text"
                     id="text"
                     cols="30"
                     rows="10"
                     placeholder="Messages...."
                  ></textarea>
               </div>
               <div className={cn("submit")}>
                  <button>Create</button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Create;
