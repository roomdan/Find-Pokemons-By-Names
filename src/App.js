import {useEffect, useState } from 'react';
import './App.css';
import FindBox from './SearchCompnent';
import { PrintData } from './LogPrintData';

function App() {

  const [character, setCharacter] = useState('');
  const [apiPick, setApiPick] = useState('');
  const [loading, setLoading] = useState('');

  useEffect(
    ()=>{
        const url = `https://pokeapi.co/api/v2/pokemon/${character}`
        const AccesApi = async () => {
            const accesUrl = await fetch(url);
            await accesUrl.json().then(
                accesItem => {setApiPick(accesItem)})//acces to api json response)
        }
        if(character) {
          AccesApi()
          setLoading('')
        }
        else(setLoading("Hello, here you can to find a Pokemon by name..."))
    }, [character]
) 

const pokemonData = <PrintData
 link={apiPick?apiPick.sprites.front_shiny:''} 
 title={apiPick.name} 
 description={apiPick.id} 
 addA={apiPick.location_area_encounters}
 />

  return (
    <div className="App">
      <header className='head-page'>
        <div className='head-presentation'>
          <div className='presentatio-logo'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' alt='logo-app' />
            <div className='logo-principal-page App-logo'></div>
          </div>
        </div>
        <div><FindBox  oneSearch={int=>{setCharacter(int)}}/></div>
        <div className='menu-navigation-app'></div>
      </header>
      <div className="App-header">
        <div>
        {loading}
        {character?pokemonData:''}
        </div>
      </div>
      <footer className='App-footer'></footer>
    </div>
  );
}

export default App;
