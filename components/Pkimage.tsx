"use client"
import Image from "next/image"
export default function Pkimage({image , name } : {image:string,  name:string}){
    return(
    <Image src={image} 
    alt={"Picture of" + name}
    height={300}
    width={300}
    priority
    style={{'objectFit':'contain'}}
    className="transition-opacity opacity-0 duration-[2s]"
        onLoadingComplete={(image)=>{
            image.classList.remove('opacity-0')
        }}
      />
    )
}