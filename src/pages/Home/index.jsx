import Style from "./Home.module.scss";
import classNames from "classnames/bind";
import { Suggest, News } from "../../components";
import { Fragment } from "react";

const cn = classNames.bind(Style);

function Home() {
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
