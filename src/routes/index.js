import { Login, Register } from "../components";
import { AllPost, Saved } from "../components/Profile";
import { Auth, Home, Messages, Profile, Settings } from "../pages";
import { DefaultView, MessageView, ProfileView, LoginView } from "../views";

const publicRouter = [
   { path: "/", component: Home, view: DefaultView },
   { path: "/messages", component: Messages, view: MessageView },
   { path: "/profile/:username", component: Profile, view: ProfileView },
   { path: "/profile/:username/posts", component: AllPost, view: ProfileView },
   { path: "/profile/:username/saved", component: Saved, view: ProfileView },
   { path: "/auth", component: Auth, view: LoginView },
   { path: "/account/edit", component: Settings, view: MessageView },
];

export { publicRouter };
