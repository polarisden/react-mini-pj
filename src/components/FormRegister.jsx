import { useState } from "react"
import InputBox from "./InputBox"
import movies from "/src/data/moviesList"

function FormRegister(props) {
  const [selectedMovie, setSelectedMovie] = useState("")
  const [username, setUsername] = useState("")
  const [emai,setEmail] = useState("")
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="flex flex-col w-[30%]">
          <header className="flex gap-3 text-white bg-gradient-to-r from-purple-700 to-indigo-600 items-center p-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
            <h1 className="text-2xl font-semibold">Movie Survey</h1>
          </header>
          <div className="flex flex-col bg-white p-6 shadow-lg rounded-b-[10px]">
            <div className="flex flex-col gap-4">
              <InputBox question="ชื่อ" name="username" placeholder="กรุณากรอกชื่อของคุณ" state={username} setstate={setUsername}/>
              <InputBox question="อีเมล" name="email" placeholder="example@email.com" state={emai} setstate={setEmail}/>
              <div>
                <div className='flex gap-1 space-y-3'>
                  <label for="name">เลือกหนังที่คุณชอบ</label>
                  <span class="text-red-500">*</span>
                </div>
                <div className="flex flex-col gap-5">
                    {movies.map((value,index) => (
                      <label key={index} className="flex gap-2 cursor-pointer hover:bg-slate-100 rounded-md transition-colors">
                        <input 
                          type="radio"
                          name="movie"
                          id={`movie-${index}`}
                          value={value.title}
                          checked={selectedMovie === value.title}
                          onChange={(e) => setSelectedMovie(e.target.value)}
                        />
                        <div className="flex flex-col">
                          <p>{value.title} ({value.year})</p>
                          <p className="text-gray-500">Director: {value.director}</p>
                        </div>
                      </label>
                    ))}
                </div>
                <div className="pt-8 pb-2">
                  <label for="name">ความคิดเห็นเกี่ยวกับหนัง</label>
                </div>
                <textarea id="comment" name="comment" rows="4" placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..." className="w-full border border-[#e5e5e5] rounded-[7px] p-[10px]"></textarea>
              </div>
            </div>
            <footer className="flex justify-between pt-4">
              <button className="flex items-center gap-1 border border-[#e5e5e5] py-2 px-4 rounded-md cursor-pointer hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-cw h-4 w-4"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
                รีเซ็ต
              </button>
              <button className="flex items-center gap-1 bg-gradient-to-r from-purple-700 to-indigo-600 text-white py-2 px-4 rounded-md cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send h-4 w-4"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>   
                ส่งแบบสำรวจ
              </button>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormRegister