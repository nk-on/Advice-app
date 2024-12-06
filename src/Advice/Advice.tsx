import { useEffect, useState } from 'react';

export default function Advice() {
  interface ApiType {
    slip: { id: number; advice: string };
  }
  const [ApiObj, setApiObj] = useState<{ id: number; advice: string }>({
    id: 0,
    advice: '',
  });
  const [clicked, setClicked] = useState(false);
  async function fetchData(): Promise<void> {
    const data = await fetch('https://api.adviceslip.com/advice');
    const res: ApiType = await data.json();
    if (res.slip.id === ApiObj.id) {
      fetchData();
    } else {
      setApiObj(res.slip);
    }
  }
  useEffect(() => {
    fetchData();
    console.log('i work');
  }, [clicked]);
  return (
    <div className="flex flex-col justify-center items-center gap-[10px]">
      <p className="text-[#53fea8]">Advice #{ApiObj.id}</p>
      <h1 className="text-[16px] text-[#c5e2e9] font-extrabold">
        {ApiObj.advice}
      </h1>
      <div className="w-[50px] h-[50px] rounded-[50%] bg-[#52fea9] flex justify-center items-center absolute bottom-[30%]">
        <img
          src="src/assets/icon-dice.svg"
          alt="dice-icon"
          className="cursor-pointer"
          onClick={() => {
            setClicked(!clicked);
          }}
        ></img>
      </div>
    </div>
  );
}
