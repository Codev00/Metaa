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
   const [files, setFiles] = useState();
   const [label, setLabel] = useState(true);
   const desc = useRef();

   useEffect(() => {
      return () => {
         files && URL.revokeObjectURL(files[0]);
      };
   }, [files]);

   useEffect(() => {
      if (data) {
         setClose(!close);
         setData(false);
      }
   }, [data]);
   const handleClose = () => {
      setFiles();
      setLabel(true);
      desc.current.value = "";
      setClose(!close);
   };
   const handleFiles = (e) => {
      setFiles(e.currentTarget.files);
      setLabel(false);
   };
   const handleSubmit = async (e) => {
      e.preventDefault();

      if (files) {
         const data = new FormData();
         data.append("image", files[0]);
         data.append("description", desc.current.value);
         data.append("userId", user._id);
         try {
            await axios.post("/api/post/create", data);
         } catch (err) {
            console.log({ error: err });
         }
      }
      handleClose();
   };

   return (
      <div
         className={cn("create", { close: close })}
         style={{ background: "rgba(0, 0, 0, 0.5)" }}
      >
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
                     {files && (
                        <div className={cn("previewImg")}>
                           <img src={URL.createObjectURL(files[0])} alt="" />
                           <label htmlFor="files">ChangeImg</label>
                        </div>
                     )}
                     <input
                        type="file"
                        id="files"
                        onChange={handleFiles}
                        hidden
                        required
                     />
                  </div>
                  <div className={cn("desc")}>
                     <textarea
                        name="text"
                        id="text"
                        cols="30"
                        rows="5"
                        placeholder="Messages...."
                        ref={desc}
                        autoComplete="off"
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
