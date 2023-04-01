import "./Edit.scss";

function Edit() {
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
                        <span>Name</span>
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
                  ></textarea>
               </div>
               <div className="submit">
                  <aside></aside>
                  <button>Submit</button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Edit;
