import classNames from "classnames/bind";
import Style from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
const cn = classNames.bind(Style);

function SidebarItem({ title, icon, to, callback }) {
   return (
      <div className={cn("nav-bar-item")}>
         <NavLink
            to={to}
            onClick={callback}
            className={(nav) => cn({ active: nav.isActive })}
         >
            {icon}
            <h5>{title}</h5>
         </NavLink>
      </div>
   );
}

SidebarItem.propTypes = {
   title: PropTypes.string.isRequired,
   icon: PropTypes.node.isRequired,
   to: PropTypes.string.isRequired,
   callback: PropTypes.func.isRequired,
};

export default SidebarItem;
