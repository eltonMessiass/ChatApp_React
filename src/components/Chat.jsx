import axios from 'axios'
import React, { useEffect, useState } from 'react'
import api from '../api'
import {Link} from 'react-router-dom'

function Chat() {

    const [conversation, setConversation] = useState([])
    const [selectedChatId, setSelectedChatId] = useState(null);
    const route = '/api/chats/'

    useEffect(() => {
        api.get(route).then((res) => {
            setConversation(res.data)
        })
        console.log(conversation)
    },[])

    const handleClick = (chatId) => {
      setIsSelected(ChatId)
    }

  return (

    
      
    <div className="chats w-full h-full p-0 m-0" >
      {conversation.map(conversation => (    
          <Link to='#' className={`chat w-full px-2 py-1 flex flex-row gap-2 my-2 hover:bg-[#222035] ${conversation.id === selectedChatId ? 'border border-primary' : ''}`} key={conversation.id} onClick={() => handleClick(conversation.id)}>
            <img src="" alt="perfil" className="w-11 h-11 border rounded-full" />
              <div className="flex flex-col flex-wrap whitespace-nowrap w-1/2 gap-1">
                <p className="text-primary">{conversation.other_participant}</p>
                <p className="text-[#DDDDDD] text-xs overflow-hidden">Boa tarde, na boa?</p>
              </div>
              <div className="flex flex-col gap-2 text-white text-xs float-right mx-3">
                <p>2 min ago</p>
                <p className="bg-[#AC3761] w-6 h-6 rounded-full flex justify-center items-center">5</p>
              </div>           
          </Link>
        ))}
  </div>
)
}


export default Chat
