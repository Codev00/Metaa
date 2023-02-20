import classNames from "classnames/bind";
import Style from "./Sidebar.module.scss";
import Create from "../Create";
import { useState } from "react";
import NavItem from "./NavItem";

const cn = classNames.bind(Style);

function Sidebar() {
   const [create, setCreate] = useState(false);
   const handleCreate = (e) => {
      e.preventDefault();
      setCreate(!create);
   };
   const handlePreventDefault = (e) => {
      e.preventDefault();
   };
   const SidebarList = [
      {
         title: "Home",
         to: "/",
         icon: <i className="fa-solid fa-house"></i>,
         callback: () => {},
      },
      {
         title: "Search",
         to: "/search",
         icon: <i className="fa-solid fa-magnifying-glass"></i>,
         callback: handlePreventDefault,
      },
      {
         title: "Messages",
         to: "/messages",
         icon: <i className="fa-brands fa-facebook-messenger"></i>,
         callback: () => {},
      },
      {
         title: "Create",
         to: "/create",
         icon: <i className="fa-regular fa-square-plus"></i>,
         callback: handleCreate,
      },
      {
         title: "Profile",
         to: "/profile",
         icon: <i className="fa-regular fa-user"></i>,
         callback: () => {},
      },
      {
         title: "Light",
         to: "/light",
         icon: <i className="fa-regular fa-moon"></i>,
         callback: handlePreventDefault,
      },
   ];

   return (
      <div className={cn("Sidebar")}>
         <div className={cn("logo")}>
            <h1>Metaa</h1>
         </div>
         <div className={cn("nav-bar")}>
            <div className={cn("nav-bar-list")}>
               {SidebarList.map((item, index) => (
                  <NavItem
                     key={index}
                     title={item.title}
                     icon={item.icon}
                     to={item.to}
                     callback={item.callback}
                  />
               ))}
            </div>
         </div>
         <Create
            data={create}
            setData={(value) => {
               setCreate(value);
            }}
         />
      </div>
   );
}

export default Sidebar;
