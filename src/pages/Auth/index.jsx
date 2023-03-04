import { Outlet } from "react-router-dom";

function Auth() {
   return (
      <div className="body">
         Hello
         <Outlet />
      </div>
   );
}

export default Auth;
