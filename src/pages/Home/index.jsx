import Style from "./Home.module.scss";
import classNames from "classnames/bind";
import { Suggest, News } from "../../components";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLayoutEffect } from "react";

const cn = classNames.bind(Style);

function Home() {
   const user = useSelector((state) => state.user.userInfo);
   const navigate = useNavigate();
   useEffect(() => {
      if (!user) {
         navigate("/auth");
      }
   }, []);
   useLayoutEffect(() => {
      window.document.title = "Meta" + " • " + "@" + user.username;
   }, []);
   return (
      <Fragment>
         <div className={cn("container-box")}>
            <News />
            <Suggest />
         </div>
      </Fragment>
   );
}

export default Home;
