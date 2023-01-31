import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouter } from "./routes";
function App() {
   return (
      <Router>
         <div className="App">
            <Routes>
               {publicRouter.map((route, index) => {
                  const Layout =
                     route.layout === null ? Fragment : route.layout;
                  const Page = route.component;
                  return (
                     <Route
                        key={index}
                        path={route.path}
                        element={
                           <Layout>
                              <Page />
                           </Layout>
                        }
                     ></Route>
                  );
               })}
            </Routes>
         </div>
      </Router>
   );
}

export default App;
