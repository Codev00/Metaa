import Style from "./Create.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";

const cn = classNames.bind(Style);

function FileItem() {
   const [files, setFiles] = useState([]);
   const [co, setCo] = useState(false);
   const [label, setLabel] = useState(true);
   const handleFiles = (e) => {
      setFiles(e.currentTarget.files);
      console.log(files);
      setCo(true);
   };

   return (
      <div className={cn("file")}>
         {label && (
            <label htmlFor="file">
               <h4>Select from computer</h4>
            </label>
         )}
         {co &&
            Array.from(files).map((file, index) => (
               <h4 key={index}>{file.name}</h4>
            ))}
         <input type="file" id="file" multiple onChange={handleFiles} hidden />
      </div>
   );
}

export default FileItem;
