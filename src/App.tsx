import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Advice from './Advice/Advice';
interface ApiRes {
  slip:{id:number,advice:string}
}
function App(){
  return (
    <>
      <div className="w-[80%] h-[300px] md:w-[600px] bg-[#333b49]  rounded-[15px] custom-shadow flex flex-col justify-center	items-center text-center">
        <Advice />
      </div>
    </>
  );
}

export default App;
