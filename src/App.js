import './App.css';
import {Flex} from "@react-css/flex";
import Header from "./Header";
import ChatList from "./ChatList";
import MessageField from "./MessageField";
import React from "react";

function App() {
  return (
   <>
               <Flex>
                   <Header/>
               </Flex>
               <Flex>
                   <ChatList />
                   <MessageField />
               </Flex>

   </>
  );
}

export default App;
