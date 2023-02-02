import Home from "../pages/Home";
import Messages from "../pages/Messages";
import Profile from "../pages/Profile";
import { DefaultLayout } from "../views";

const publicRouter = [
   { path: "/", component: Home, layout: DefaultLayout },
   { path: "/messages", component: Messages, layout: DefaultLayout },
   { path: "/profile", component: Profile, layout: DefaultLayout },
];

export { publicRouter };
