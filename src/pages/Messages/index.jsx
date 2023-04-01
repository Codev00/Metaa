import { useLayoutEffect } from "react";

function Messages() {
   useLayoutEffect(() => {
      window.document.title = "Messages";
   }, []);
   return <h1>Messages</h1>;
}

export default Messages;
