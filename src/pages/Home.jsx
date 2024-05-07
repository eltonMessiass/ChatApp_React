import React, { useContext, useEffect, useState } from "react"
import Chat from "../components/Chat"
import api from "../api"
import { Link } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"

const Home = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [chats, setChats] = useState([])
  const [messages, setMessages] = useState([])
  const {user} = useContext(UserContext)
  const userId = user.id
  

  useEffect(() => {
    getChats()
  },[])

  const getChats = () => {
    api.get('/api/chats/').then((res) => {
      setChats(res.data)
    })
  }

  const getMessages = async (chatId) => {
    try {
      api.get(`/api/chats/${chatId}/messages/`).then(res => {
        setMessages(res.data)
        console.log(messages)
      })
    } catch (error) {
      console.error('Erro ao buscar as mensagens do chat: ', error)
    }
  }

  const handleChatSelect = (chatId) => {
    setSelectedChatId(chatId)
    getMessages(chatId)
  }

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-[#222035] px-10 justify-center w-full">
        <div className="flex flex-row float-right gap-11 items-center">
          <h3 className="text-white text-xl">Elton Messias</h3>
          <a href="#" className="w-10 rounded-full"><img src="https://preview.redd.it/most-attractive-man-in-a-country-v0-9pwswqjkat8b1.jpg?width=1024&format=pjpg&auto=webp&s=7fdc9fbdd3baab7a2a84f5e7f2d6fc2b517a1ba0" alt="profile-pic"  className="rounded-full"/></a>
        </div>
      </header>

      <div className="flex flex-row">
        <aside className="bg-main w-1/4 h-screen  flex flex-col gap-2" >
          <div className="flex justify-between text-xl text-white ">
            <h2>Chats</h2>
            <h2 className="border rounded px-2">New</h2>
          </div>
          <section className=" p-3 rounded h-full w-full flex flex-col gap-5">
            <form action="" className="w-full h-8">
              <input type="search" placeholder="search"  className="w-full h-full rounded bg-main border border-primary outline-none text-sm text-white px-2"/>
            </form>
  
            <div className="chats w-full">
            {chats.map(chat => (    
              <Link to='#' className={`chat w-full px-2 py-1 flex flex-row gap-2 my-2 hover:bg-[#222035] ${chat.id === selectedChatId ? 'border border-primary' : ''}`} key={chat.id} onClick={() => handleChatSelect(chat.id)}>
                <img src="" alt="perfil" className="w-11 h-11 border rounded-full" />
                  <div className="flex flex-col flex-wrap whitespace-nowrap w-1/2 gap-1">
                    <p className="text-primary">{chat.other_participant}</p>
                    <p className="text-[#DDDDDD] text-xs overflow-hidden">Boa tarde, na boa?</p>
                  </div>
                  <div className="flex flex-col gap-2 text-white text-xs float-right mx-3">
                    <p>2 min ago</p>
                    <p className="bg-[#AC3761] w-6 h-6 rounded-full flex justify-center items-center">5</p>
                  </div>           
              </Link>
        ))}
            </div>
          </section>
        </aside>

        <div className="messages flex flex-col w-1/4 h-10">
          {messages.map(message => (
            <p className={message.message_sender === userId ? 'text-primary float-right text-2xl' : ''} key={message.id}>
              {message.content}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home

