import Image from 'next/image'
import { Pkgrid } from '@/components/Pkgrid'
import { Pkcard } from '@/components/Pkcard'
import { getPokemonlist } from '@/lib/Pkapi'
export default async function Home() {
  const pokemonlist = await getPokemonlist()
  return (
    <div>
      <Pkgrid pokemonlist={pokemonlist} />
      
      </div>
  )
}
