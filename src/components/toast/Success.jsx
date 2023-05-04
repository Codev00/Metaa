import "./style.css";
function Success({ title, msg, type, duration }) {
   const icons = {
      success: "fa-sharp fa-regular fa-badge-check",
      error: "fa-regular fa-bomb",
      warning: "fa-sharp fa-regular fa-brake-warning",
   };
   useEffect(() => {
      setTimeout(() => {
         document.getElementById("toast").style.display = "none";
      }, duration);
   });
   return (
      <div id="toast">
         <div className="toast">
            <div className="icon">X</div>
            <div className="body">
               <h3 className="title">{title}</h3>
               <p className="msg">{msg} </p>
            </div>
         </div>
      </div>
   );
}

export default Success;
