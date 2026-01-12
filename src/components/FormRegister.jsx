import { useState } from "react"
import InputBox from "./InputBox"
import movies from "/src/data/moviesList"
import validateData from "/src/utils/validators"

function FormRegister(props) {
  const [selectedMovie, setSelectedMovie] = useState("")
  const [username, setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [comment, setComment] = useState("")
  const [errors, setErrors] = useState({validation: false, errorMessage: {}})


  function handleSubmit(){
    setErrors(validateData(username,email,selectedMovie))
    console.log("errors.validation =",errors.validation)
    console.log("data =",errors)
  }

  function handleReset(){
    setSelectedMovie("")
    setUsername("")
    setEmail("")
    setComment("")
    setErrors({validation: false, errorMessage: {}})
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="flex flex-col w-[450px]">
          <header className="flex gap-3 text-white bg-gradient-to-r from-purple-700 to-indigo-600 items-center p-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
            <h1 className="text-2xl font-semibold">Movie Survey</h1>
          </header>
          {!errors.validation? 
            <div className="flex flex-col bg-white p-6 shadow-lg rounded-b-[10px]">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <InputBox question="ชื่อ" name="username" placeholder="กรุณากรอกชื่อของคุณ" state={username} setstate={setUsername} iserror={!errors.errorMessage?.username}/>
                  {errors.errorMessage?.username && <p className="text-sm text-red-500">{errors.errorMessage.username}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <InputBox question="อีเมล" name="email" placeholder="example@email.com" state={email} setstate={setEmail} iserror={!errors.errorMessage?.email}/>
                  {errors.errorMessage?.email && <p className="text-sm text-red-500">{errors.errorMessage.email}</p>}
                </div>
                <div>
                  <div className='flex gap-1 space-y-3'>
                    <label for="name">เลือกหนังที่คุณชอบ</label>
                    <span class="text-red-500">*</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className={`flex flex-col gap-3 rounded-lg ${errors.errorMessage.movie && "p-3 border border-red-500"}`}>
                        {movies.map((value,index) => (
                          <label key={index} className="flex gap-3 cursor-pointer hover:bg-slate-100 rounded-md transition-colors p-2">
                            <input 
                              type="radio"
                              name="movie"
                              id={`movie-${index}`}
                              className="w-4 h-4 mt-4 cursor-pointer"
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
                    {errors.errorMessage?.movie && <p className="text-sm text-red-500">{errors.errorMessage.movie}</p>}
                  </div>
                  <div className="pt-7 pb-2">
                    <label for="name">ความคิดเห็นเกี่ยวกับหนัง</label>
                  </div>
                  <textarea id="comment" name="comment" rows="4" placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..." className="w-full border border-[#e5e5e5] rounded-[7px] p-[10px]" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                </div>
              </div>
              <footer className="flex justify-between pt-4">
                <button className="flex items-center gap-1 border border-[#e5e5e5] py-2 px-4 rounded-md cursor-pointer hover:bg-gray-100" onClick={handleReset}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-cw h-4 w-4"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
                  รีเซ็ต
                </button>
                <button className="flex items-center gap-1 bg-gradient-to-r from-purple-700 to-indigo-600 text-white py-2 px-4 rounded-md cursor-pointer" onClick={handleSubmit}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send h-4 w-4"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>   
                  ส่งแบบสำรวจ
                </button>
              </footer>
            </div>
            :
            <div className="bg-white p-6 flex flex-col gap-5 shadow-lg rounded-b-xl">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex gap-2 mb-4 text-green-800 items-center text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-600"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                  <p>ส่งแบบสำรวจสำเร็จ!</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <p className="text-gray-500">ชื่อ:</p>
                  <p>{username}</p>
                  <div></div>
                  <p className="text-gray-500">อีเมล:</p>
                  <p>{email}</p>
                  <div></div>
                  <p className="text-gray-500">หนังที่เลือก:</p>
                  <p className="text-purple-700">{selectedMovie}</p>
                  <div></div>
                </div>
                {comment && 
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="pt-4">
                      <p className="border-t border-gray-200 pt-3 text-gray-500">ความคิดเห็น:</p>
                    </div>
                    <p className="bg-gray-50 p-3 rounded-md">{comment}</p>
                  </div>
                }
              </div>
              <button className="flex gap-3 justify-center items-center bg-[#171717] text-white p-2.5 rounded-md text-sm" onClick={handleReset}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-cw h-4 w-4"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
                ทำแบบสำรวจใหม่
              </button>
            </div>
          }

        </div>
      </div>
    </>
  )
}

export default FormRegister