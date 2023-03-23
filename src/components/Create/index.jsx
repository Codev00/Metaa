import Style from "./Create.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import axios from "axios";

const cn = classNames.bind(Style);

function Create({ data, setData }) {
   const user = useSelector((state) => state.user.userInfo);
   const [close, setClose] = useState(true);
   const [files, setFiles] = useState([]);
   const [haveFile, setHaveFile] = useState(false);
   const [label, setLabel] = useState(true);
   const desc = useRef();

   useEffect(() => {
      if (data) {
         setClose(!close);
         setData(false);
      }
   }, [data]);
   const handleClose = () => {
      setClose(!close);
      setFiles([]);
      setHaveFile(!haveFile);
      setLabel(!label);
   };
   const handleFiles = (e) => {
      setFiles(e.currentTarget.files);
      setHaveFile(!haveFile);
      setLabel(!label);
   };
   const handleSubmit = async (e) => {
      e.preventDefault();

      const newPost = {
         userId: user._id,
         desc: desc.current.value,
         img: [],
      };
      if (files) {
         const data = new FormData();
         for (var i = 0; i < files.length; i++) {
            const fileName =
               Date.now() +
               "-" +
               files[i].name.toLowerCase().split(" ").join("-");
            data.append("images", files[i]);
         }
         try {
            const res = await axios.post("/api/images/upload", data);
            for (const file of res.data) {
               newPost.img.push(file.filename);
            }
         } catch (err) {
            console.log({ error: err });
         }
      }
      try {
         await axios.post("/api/posts", newPost);
      } catch (err) {
         console.log({ error: err });
      }
   };
   return (
      <div className={cn("create", { close: close })}>
         <i className="fa-solid fa-circle-xmark" onClick={handleClose}></i>
         <div className={cn("create-modal")}>
            <div className={cn("title")}>
               <h1>Create new post</h1>
            </div>
            <div className={cn("create-body")}>
               <form
                  className={cn("form")}
                  encType="multipart/form-data"
                  onSubmit={handleSubmit}
               >
                  <div className={cn("file")}>
                     {label && (
                        <label htmlFor="files">
                           <h4>Select from computer</h4>
                        </label>
                     )}
                     {haveFile &&
                        Array.from(files).map((file, index) => (
                           <h4 key={index}>{file.name}</h4>
                        ))}
                     <input
                        type="file"
                        id="files"
                        multiple
                        onChange={handleFiles}
                        hidden
                     />
                  </div>
                  <div className={cn("desc")}>
                     <textarea
                        name="text"
                        id="text"
                        cols="30"
                        rows="10"
                        placeholder="Messages...."
                        ref={desc}
                     ></textarea>
                  </div>
                  <div className={cn("submit")}>
                     <button type="submit">Create</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}

export default Create;
