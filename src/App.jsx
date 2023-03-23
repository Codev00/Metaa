import { Fragment } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth } from "./pages";
import { publicRouter } from "./routes";
import { LoginView } from "./views";
function App() {
   const user = useSelector((state) => state.user.userInfo);
   return (
      <Router>
         <div className="App">
            <Routes>
               {publicRouter.map((route, index) => {
                  const View = route.view === null ? Fragment : route.view;
                  const Page = route.component;
                  return (
                     <Route
                        key={index}
                        path={route.path}
                        element={
                           user ? (
                              <View>
                                 <Page />
                              </View>
                           ) : (
                              <LoginView>
                                 <Auth />
                              </LoginView>
                           )
                        }
                     />
                  );
               })}
            </Routes>
         </div>
      </Router>
   );
}

export default App;
