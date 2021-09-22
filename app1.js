
const argv = require(`yargs`).options({
    direction: {
        alias: "d",
        desc: "Dirección de la ciudad para obtener el clima",
        demand: true
    }
}).argv

console.log(argv)
console.log(argv.direction)

const {getLugar} = require(`./lugar/lugar`)

getLugar(argv.direction)
