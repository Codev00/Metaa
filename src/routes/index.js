import { Login, Register } from "../components";
import { AllPost, Saved } from "../components/Profile";
import { Auth, Home, Messages, Profile } from "../pages";
import { DefaultView, MessageView, ProfileView, LoginView } from "../views";

const publicRouter = [
   { path: "/", component: Home, view: DefaultView },
   { path: "/messages", component: Messages, view: MessageView },
   { path: "/profile/:username", component: Profile, view: ProfileView },
   { path: "/profile/:username/posts", component: AllPost, view: ProfileView },
   { path: "/profile/:username/saved", component: Saved, view: ProfileView },
   { path: "/auth", component: Auth, view: LoginView },
   { path: "/auth/login", component: Login, view: LoginView },
   { path: "/auth/register", component: Register, view: LoginView },
];

export { publicRouter };
