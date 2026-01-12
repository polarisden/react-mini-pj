function InputBox(props){
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className='flex gap-1'>
          <label for="name">{props.question}</label>
          <span class="text-red-500">*</span>
        </div>
        <input 
          type="text"
          name={props.name}
          placeholder={props.placeholder}
          className="h-10 border border-[#e5e5e5] rounded-[8px] pl-2"
          value={props.state}
          onChange={(e) => props.setstate(e.target.value)}
        />
      </div>
    </>
  )
}

export default InputBox