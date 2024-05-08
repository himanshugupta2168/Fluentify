import Image from "next/image"
function loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center animate-pulse">
        <Image src={"/logo.svg"} width={100} height={100} alt="Loading"/>
    </div>
  )
}

export default loading