const Sequelize = require('sequelize')

const db = new Sequelize('shopdb', 'shopper', 'shoppass', {
    host: 'localhost',
    dialect: 'mysql',
    pool: { //object to insure the min and max connection
        min: 0,
        max: 5
    }
})

//creating items to put in our db
const User = db.define('users', { //first term is the name of table then collection of all the col it will have
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

//we will now create another type of table

const Product = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
     type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: Sequelize.STRING,
    price: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0
    }
})

//to make sure database is created
db.sync()
    .then(() => console.log("database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    User, Product //exporting user class and product class
}

//now we will start creating our API --> make folder ROUTE inside it API --> new file users.js and products.js and index.js