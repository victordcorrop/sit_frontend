const llamandoAPI = async () => {
    try {
      const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
  
      const data =  respuesta.json()
      console.log(data)
  
    } catch (error) {
      console.log(error);
    } 
  }
  
  llamandoAPI()