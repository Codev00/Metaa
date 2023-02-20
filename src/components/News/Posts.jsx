import classNames from "classnames/bind";
import Style from "./News.module.scss";

const cn = classNames.bind(Style);

function Posts({ children }) {
   return <div className={cn("post")}>{children}</div>;
}

export default Posts;
