import Home from "../pages/Home";
import Messages from "../pages/Messages";
import Profile from "../pages/Profile";
import { DefaultView, MessageView, ProfileView } from "../views";

const publicRouter = [
   { path: "/", component: Home, view: DefaultView },
   { path: "/messages", component: Messages, view: MessageView },
   { path: "/profile", component: Profile, view: ProfileView },
];

export { publicRouter };
