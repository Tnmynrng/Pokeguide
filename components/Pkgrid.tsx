"use client"
import { useState } from "react"
import { Pkcard } from "./Pkcard"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
interface Pokemongridprops{
    pokemonlist : any;
}
export function Pkgrid({pokemonlist}:Pokemongridprops){
    const [text,setText] = useState('')
    console.log(pokemonlist)
    const searchFilter = (pokemonlist:any)=>{
        return pokemonlist.filter(
            (pokemon:any)=>pokemon.name.toLowerCase().includes(text)
        )
    }
    const filteredpokemonlist = searchFilter(pokemonlist)
    return(
        <>
        <div>
            <h2 className="text-center scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Search for your Pokemon!  
            </h2>
            <div className="grid w-full justify-center align-center items-center gap-1.5">
            <Label  htmlFor="pokemonName">
                <h4 className="text-center mt-3 mb-3 scroll-m-20 text-xl font-semibold tracking-tight">
                Pokemon Name
                </h4>
            </Label>
            <Input type="text" value={text} id="pokemonName" placeholder="Pikachu,Squirtle.."
            onChange={(e)=>{setText(e.target.value)}} />
            </div>
            <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon Card Collection</h3>
        </div>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            {filteredpokemonlist.map((pokemon:any)=>{
                return(
                    <Pkcard name={pokemon.name} />
            )
            })}
        </div>
    </>
    )
}