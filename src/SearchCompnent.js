import { useEffect, useState } from "react"
import SelectNames from "./select-name-pokes";

const FindBox = ({oneSearch})=>{
const [some, setSome] = useState('');
const [names, setNames] = useState(null);

useEffect(
    ()=>{
        const get = async (url)=>{
           const acces = await fetch(url);
           await acces.json().then(felt=>{setNames(felt.results)})
        }
        get('https://pokeapi.co/api/v2/pokemon');

    },[]
)

const NameSlct = names?names.map(
    name=>{
       return(
           <SelectNames key={name.url} value={name.name} name={name.name}/>
       )
    }
):'';

    return <form>
        <div>
            <label className='form-search-label'>
               <select value={some} onChange={(q)=>{setSome(q.target.value)}}>
                <option value='Select'>Select a Pokemon</option>
                {NameSlct}
               </select>
                <button onClick={e=>{e.preventDefault();oneSearch(some); setSome('') }}>Search</button>
            </label>
        </div>
    </form>
}

export default FindBox