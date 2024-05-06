import React, { useEffect, useState } from "react"
import Chat from "../components/Chat"

const Home = () => {

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-[#222035] px-10 justify-center w-full">
        <div className="flex flex-row float-right gap-11 items-center">
          <h3 className="text-white text-xl">Elton Messias</h3>
          <a href="#" className="w-10 rounded-full"><img src="https://preview.redd.it/most-attractive-man-in-a-country-v0-9pwswqjkat8b1.jpg?width=1024&format=pjpg&auto=webp&s=7fdc9fbdd3baab7a2a84f5e7f2d6fc2b517a1ba0" alt="profile-pic"  className="rounded-full"/></a>
        </div>
      </header>

      <aside className="bg-main w-1/4 h-screen  flex flex-col gap-2" >
        <div className="flex justify-between text-xl text-white ">
          <h2>Chats</h2>
          <h2 className="border rounded px-2">New</h2>
        </div>
        <section className=" p-3 rounded h-full w-full flex flex-col gap-5">
          <form action="" className="w-full h-8">
            <input type="search" placeholder="search"  className="w-full h-full rounded bg-main border border-primary outline-none text-sm text-white px-2"/>
          </form>

          <div className="w-full">
            <Chat />
          </div>
        </section>
      </aside>
    </div>
  )
}

export default Home

