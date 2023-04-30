import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./components";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <CookiesProvider>
         <GlobalStyle>
            <Provider store={store}>
               <App />
            </Provider>
         </GlobalStyle>
      </CookiesProvider>
   </React.StrictMode>
);
