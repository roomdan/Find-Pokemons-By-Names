function example () {

    const accesInfor = async ()=>{
        const url= `https://pokeapi.co/api/v2/pokemon-species/132/`
        const accesData = await fetch(url).then(accesApi=>accesApi.json()).then(accesDataAll=>console.log(accesDataAll))    
    }
    accesInfor()
}
example();