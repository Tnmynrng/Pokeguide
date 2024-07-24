import Link from "next/link"
import Image from "next/image";
interface Pkcardprops{
  name: string;
}

export function Pkcard({name}:Pkcardprops){
    return(
        <Link
          href={name}
          className="group m-3 rounded-lg border border-transparent px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          key={name + "card"}
        > 
          <h2 className={`text-2xl font-semibold`}>
            {name}
          </h2>
        </Link>
    )
}