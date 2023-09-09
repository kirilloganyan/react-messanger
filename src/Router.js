import React from "react";
import { Routes, Route, } from "react-router-dom";
import Layout from "./Layout";
import Profile from "./Profile";
import {sendMessage} from "./actions/messageActions";

function Router() {
    const chats=[1,2,3,4,5,6,7,8,9]
    return (
        <Routes>
            <Route path="/" element={<Layout />} />
            {chats.map((chatId) => (
                <Route
                    path={`/chat/${chatId}`}
                    element={<Layout sendMessage={sendMessage}
                        chatId={chatId} />}
                />
            ))}
            <Route path="/profile" element={<Profile user={"gnehgo"} />} />
        </Routes>
    );
}
export default Router;
