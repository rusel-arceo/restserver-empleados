
require('dotenv').config();

config = {
    port: process.env.PORT || 3000,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    dbHost:process.env.DB_HOST,
    db_name:process.env.DB_NAME,
}
// const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`

module.exports= {
    config
}; 