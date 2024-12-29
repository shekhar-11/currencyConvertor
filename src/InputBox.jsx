import React, { useState } from 'react'

import useCurrencyInfo from '../../hooks/useCurrencyInfo';
function InputBox() {
  const [currentTo,setCurrentTo] = useState("usd");
  const [currentFrom,setCurrentFrom] = useState("inr");
  const [amountFrom,setAmountFrom] = useState(0);
  const [amountTo,setAmountTo] = useState(0);
  const dataObj = useCurrencyInfo(currentFrom);
  const handleClick=()=>{
    setAmountTo(amountFrom* dataObj[currentTo])
  }
  const data = Object.keys(dataObj);
  return (
    <div className='w-full h-screen flex items-center justify-center bg-cyan-800'>
<div className='bg-white rounded-lg  flex flex-col p-10'>
  <div className=' flex items-center gap-2 text-white'>
    <label htmlFor='from' className='text-black   w-16'>From</label>
    <select  className='border text-black border-black' value={currentFrom} onChange={(e)=>setCurrentFrom(e.target.value)}>
      {
        data.map((e,ind)=>{
          return (<option key = {ind} value={e} >{e}</option>)

        })
      }
    <option selected disabled  className='w-2' >Select</option>

    </select>
    <input id="from" className='flex-1 text-black  shadow-md border border-black' value={amountFrom} onChange={(e)=>setAmountFrom(e.target.value)}/>
  </div>



  <div className='flex  items-center gap-2 mt-2 text-white'>
    <label htmlFor='to' className='text-black  w-16'>To</label>
    <select className='border text-black border-black' value={currentTo} onChange={(e)=>setCurrentTo(e.target.value)}>
    {
      data.map((e,ind)=>{
       return  (<option key={ind}>{e}</option>)
      })
    }

    </select>
    <input id="to" className='flex-1 text-black shadow-md  border border-black ' disabled value={amountTo} onChange={(e)=>setAmountTo(e.target.value)}/>
  </div>
  <div className='text-center'>
    
  <button className='mt-3 bg-orange-600 rounded-lg  p-2' onClick={handleClick}>Convert</button>
  </div>

</div>

    </div>
  )
}

export default InputBox
