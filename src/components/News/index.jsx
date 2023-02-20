import classNames from "classnames/bind";
import Style from "./News.module.scss";
import Posts from "./Posts";
import PostItem from "./PostItem";

const cn = classNames.bind(Style);

function News() {
   return (
      <div className={cn("main")}>
         <Posts>
            <PostItem />
         </Posts>
      </div>
   );
}

export default News;
