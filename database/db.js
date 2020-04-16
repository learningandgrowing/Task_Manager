const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/NodeJs.db'
})

const TaskManager = db.define('TaskManager', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    task: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    due: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW 
    },
    status: {
        type: Sequelize.STRING(15),
        allowNull: true,
        defaultValue: 'incomplete'
    },
    priority: {
        type: Sequelize.STRING(10),
        allowNull: true,
        defaultValue: 'medium'
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    Notes: {
        type: Sequelize.STRING,
        allowNull: true,
    }  
})


// to check if db created or not
db.sync()
        .then(() => console.log('Database has been synced.'))
        .catch((err) => console.log('Error creating database.'))

module.exports = {
    db, TaskManager
}
