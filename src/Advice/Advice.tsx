import { useEffect, useState } from "react";

export default function Advice(){
    interface ApiType{
        slip:{id:number,advice:string}
    }
    const [advice,setAdvice] = useState<string>('')
    async function fetchData():Promise<void>{
        const data = await fetch('https://api.adviceslip.com/advice');
        const res:ApiType = await data.json();
        setAdvice(res?.slip?.advice);
    }
    useEffect(()=>{
       fetchData();
    },[])
    return (
        <h1 className='text-[32px] text-[#c5e2e9] font-extrabold'>{advice}</h1>
    )
}