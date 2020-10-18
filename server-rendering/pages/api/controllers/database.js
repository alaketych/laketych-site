const mysql = require('serverless-mysql')

const connection = mysql({
    config: {
        host: process.env.MYSQL_USER,
        user: process.env.MYSQL_HOST,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    }
})

exports.query = async(query) => {
    try {
        const results = await connection.query(query)
        await connection.end()
        return results
    }
    catch(error) {
        return { error }
    }
}