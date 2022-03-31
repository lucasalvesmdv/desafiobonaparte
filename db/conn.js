const conn = require("mongoose")

async function main() {
  await conn.connect('mongodb://localhost:27017/bonaparte') 
  console.log('Conectou ao mongoDB com Mongoose')
  
}

main().catch((err) => console.log(err))

module.exports = conn