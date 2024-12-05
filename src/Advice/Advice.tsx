import { useEffect, useState } from "react";

export default function Advice(){
    interface ApiType{
        slip:{id:number,advice:string}
    }
    const [ApiObj,setApiObj] = useState<{id:number,advice:string}>({id:0,advice:''})
    async function fetchData():Promise<void>{
        const data = await fetch('https://api.adviceslip.com/advice');
        const res:ApiType = await data.json();
        setApiObj(res.slip);
    }
    useEffect(()=>{
       fetchData();
    },[])
    return (
        <div>
            <p className="text-[#53fea8]">Advice #{ApiObj.id}</p>
            <h1 className='text-[16px] text-[#c5e2e9] font-extrabold'>{ApiObj.advice}</h1>
        </div>
    )
}