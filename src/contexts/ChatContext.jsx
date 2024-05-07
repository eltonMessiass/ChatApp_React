import React, {createContext, useState, useEffect,useContext} from "react";



export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [selectedChat, setSelectedChat] = useState(null)
    const [messages, setMessages] = useState({})
    


    const selectChat = (chatId) => {
        setSelectedChat(chatId)
    }

    return (
        <ChatContext.Provider value={selectedChat, selectChat, messages, setMessages}>
            {children}
        </ChatContext.Provider>
    )
}