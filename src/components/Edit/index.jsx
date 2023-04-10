import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/userSlice";
import "./Edit.scss";

function Edit() {
   const user = useSelector((state) => state.user.userInfo);
   const [name, setName] = useState(user.username);
   const [desc, setDesc] = useState(user.desc);
   const dispatch = useDispatch();
   const handleSubmit = async () => {
      try {
         const dataForm = {
            userId: user._id,
            username: name,
            desc: desc,
         };
         await axios.put(`/api/user/${user._id}`, dataForm);
         const res = axios.get(`/api/user?userId=${user._id}`);
         dispatch(loadUser(res.data));
      } catch (err) {
         console.log({ Error: err });
      }
   };
   return (
      <div>
         <div className="body">
            <h3>Edit Profile</h3>
            <div className="edit">
               <div className="avatar">
                  <div className="img">
                     <img src="/images/no-avatar.jpg" alt="" />
                  </div>
                  <div className="change">
                     <div className="change-item">
                        <span>{user.username}</span>
                        <label htmlFor="file">Change profile photo</label>
                        <input type="file" id="file" hidden />
                     </div>
                  </div>
               </div>
               <div className="desc name">
                  <aside>
                     <label>Name</label>
                  </aside>
                  <input
                     type="text"
                     maxLength={20}
                     placeholder=""
                     autoComplete="off"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
               </div>
               <div className="desc gender">
                  <aside>
                     <label>Gender</label>
                  </aside>
                  <select defaultValue={"Custom"}>
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                     <option value="custom">Custom</option>
                  </select>
               </div>
               <div className="desc">
                  <aside>
                     <label>Desc</label>
                  </aside>
                  <textarea
                     rows="5"
                     maxLength={150}
                     autoComplete="off"
                     autoCorrect="off"
                     value={desc}
                     onChange={(e) => setDesc(e.target.value)}
                  ></textarea>
               </div>
               <div className="submit">
                  <aside></aside>
                  <button onClick={handleSubmit}>Submit</button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Edit;
