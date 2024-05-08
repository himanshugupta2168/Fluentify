export const Statistics=()=>{
    return(
        <div className=" relative my-10">
            <h1 className="text-center text-[25px] md:text-[60px] lg:text-[80px] font-extrabold"><span className="text-green-400">Fluentify</span> by the <span className="text-blue-400 underline decoration-wavy decoration-6">numbers</span></h1>
            <div className="w-full flex justify-center items-center my-6">
                <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-green-400 rounded-full flex justify-center items-center "> 
                <p className="text-lg text-black font-bold  md:text-2xl lg:text-3xl -translate-y-10">1000+ hours of fun content</p>
                </div>
                <div className="w-[150px]  h-[150px] md:w-[250px] md:h-[250px] bg-blue-400 absolute rounded-full -translate-x-24 translate-y-14 md:-translate-x-72 md:translate-y-20 flex flex-col justify-center items-center text-black text-lg font-bold md:text-2xl lg:text-3xl">
                    <p className="">8+</p>
                    <p className="">languages</p>
                    <p>courses</p>
                </div>
                <div className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] bg-blue-400 absolute rounded-full translate-x-24 translate-y-14 md:translate-x-72 md:translate-y-20 flex flex-col justify-center items-center text-black text-lg font-bold md:text-2xl lg:text-3xl">
                    <p>93%</p>
                    <p>fluency</p>
                    <p>in two months</p>
                </div>
            </div>
        </div>
    )
}