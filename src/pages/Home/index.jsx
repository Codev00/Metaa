import Style from "./Home.module.scss";
import classNames from "classnames/bind";
import { Suggest } from "../../components";
import { Fragment } from "react";

const cn = classNames.bind(Style);

function Home() {
   return (
      <Fragment>
         <div className={cn("container-box")}>
            <div className={cn("main")}>
               <h1>Home</h1>
            </div>
            <Suggest />
         </div>
      </Fragment>
   );
}

export default Home;
