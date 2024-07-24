import { getPokemon } from "@/lib/Pkapi";
import Pkimage from "@/components/Pkimage";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
export default async function Pkpage({params}:{params: {pokemonname:string}}){
    const {pokemonname}  = params;
    const pokemonobject=  await getPokemon(pokemonname)
    console.log(pokemonobject)
    return (
        <>
    <div className="m-4" style={{position:'relative',width:'300',height:'300'}} ></div>
        <h1 className="text-4xl text-bold pt-4">{pokemonname}</h1>
        <Pkimage 
        name={pokemonname} 
        image={pokemonobject.sprites.other['official-artwork'].front_default}
        />
        <h4 className=" mb-3 scroll-m-20 text-xl font-semibold tracking-tight">
            Weight : {pokemonobject.weight}
        </h4>
        <div className="flex-cols">
            {pokemonobject.stats.map((statobj:any)=>{
                const statname = statobj.stat.name
                const statvalue = statobj.base_stat;
                return(
                    <div className="grid grid-cols-2 gap-5 mb-5 " style={{width:'600'}} key={statname}>
                    <h3 className="p-2">{statname} : {statvalue}</h3>
                    <Progress className='w-1/2 m-auto' value={statvalue} />
                    </div>
                    )
            })}
    </div>
        </>
    )
}