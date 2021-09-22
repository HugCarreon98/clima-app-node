var axios = require("axios").default;

const getLugar = async (direccion) => {
    var options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/timezone.json',
        params: {q: direccion},
        headers: {
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
          'x-rapidapi-key': '358a8b0f21msh246fc5c20fb3ec4p1ca6d7jsnccba210f4260'
        }
      };
      
      /*axios.request(options).then(function (response) {
          const {data} = response;
          const {location} = data;
          const {name, country, lat, lon} = location;
          console.log(`Se encontro localización:
          Nombre: ${name}
          País: ${country}
          Latitud: ${lat}
          Longitud: ${lon}`)
      }).catch(function (error) {
          console.error("No se encontró localización");
      });*/












      try {
        const resultado = await axios.request(options);
        const {data} = resultado;
        const {location} = data;
        const {name, country, lat, lon} = location;
        console.log(`Se encontro localización:
        Nombre: ${name}
        País: ${country}
        Latitud: ${lat}
        Longitud: ${lon}`)
      } catch (error) {
          console.log("No pude hacerlo :(")
      }

}

module.exports = {
    getLugar
    //guardarDB
}

