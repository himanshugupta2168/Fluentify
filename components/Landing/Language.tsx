"use client"
import { useState } from "react"
import Image from "next/image"

type LanuageBox ={
    name:string, 
    flag:string
}

export const Language =()=>{
    const [languages, setLanguages]= useState<LanuageBox[]>([
        {
            name:"Hello",
            flag:"/flags/gb.svg",
        },
        {
            name:"नमस्ते",
            flag:"/flags/in.svg",
        },
        {
            name:"你好",
            flag:"/flags/cn.svg",
        },
        {
            name:"hallo",
            flag:"/flags/de.svg",
        },
        {
            name:"こんにちは",
            flag:"/flags/jp.svg",
        },
        {
            name:"Bonjour",
            flag:"/flags/fr.svg",
        },
        {
            name:"привет",
            flag:"/flags/ru.svg",
        },
        {
            name:"Hola",
            flag:"/flags/es.svg",
        },
        {
            name:"Ciao",
            flag:"/flags/it.svg",
        },
        {
            name:"안녕하세요",
            flag:"/flags/kr.svg",
        }
    ])
    // console.log(languages);
    return(
        <section className="relative my-20 ">
            <h1 className=" text-center py-10 text-[25px] md:text-[60px] lg:text-[80px] font-extrabold">I want to <span className="text-pink-400">Learn...</span></h1>
            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {
                    languages.map((language, index)=>(<div className="min-w-1/5 h-[200px] dark:hover:bg-slate-800 rounded-2xl cursor-pointer active:scale-95 duration-200  flex flex-col justify-center items-center gap-4 py-2 bg-sky-100 dark:bg-slate-700 hover:bg-slate-300" key={index}>
                        <Image src={language.flag} alt={language.name} width={150} height={100}/>
                        <h3 className="text-center font-semibold text-[20px]">{language.name}</h3>
                    </div>))
                }
            </div>
        </section>
    )
}